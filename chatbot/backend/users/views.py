from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import UserSerializer
from django.core.cache import cache
from django.contrib.auth import get_user_model
from .models import UserLog  # Import the UserLog model
from django.contrib.auth import authenticate
from django.middleware import csrf
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.github.views import GitHubOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
from django.conf import settings
from allauth.account.models import EmailConfirmation  # Import EmailConfirmation

User = get_user_model()  # Fetch user model efficiently


def log_user_action(user, action, request):
    """Helper function to log user actions"""
    UserLog.objects.create(
        user=user,
        action=action,
        ip_address=get_client_ip(request),
        user_agent=request.headers.get("User-Agent"),
    )

    return "logging created"


def get_client_ip(request):
    """Get client IP address"""
    x_forwarded_for = request.META.get("HTTP_X_FORWARDED_FOR")
    if x_forwarded_for:
        ip = x_forwarded_for.split(",")[0]
    else:
        ip = request.META.get("REMOTE_ADDR")
    return ip


from rest_framework.exceptions import ValidationError

class RegisterAPIView(APIView):
    serializer_class = UserSerializer

    def post(self, request):
        try:
            serializer = self.serializer_class(data=request.data)
            serializer.is_valid(raise_exception=True)
            user = serializer.save(registration_type="email")

            user_data = {
                "id": user.id,
                "email": user.email,
            }
            cache.set(f"user_auth_{user.email}", user_data, timeout=3600)
            log_user_action(user, "register", request)

            return Response(user_data, status=status.HTTP_201_CREATED)

        except ValidationError as e:
            return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class LoginAPIView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        user = User.objects.filter(email=email).first()
        if user and user.check_password(password):
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            refresh_token = str(refresh)

            user_data = {
                "id": user.id,
                "email": user.email,
                "access": access_token,  # Include token in response body
                "refresh": refresh_token  # Include refresh token in response body
            }

            # Cache user session
            cache.set(f"user_auth_{email}", user_data, timeout=3600)

            # Log user login
            log_user_action(user, "login", request)

            # Build response
            response = Response(user_data, status=status.HTTP_200_OK)

            # Set tokens as HttpOnly cookies
            response.set_cookie(
                key='access_token',
                value=access_token,
                httponly=True,
                secure=True,  # set False if using http during dev
                samesite='Lax',
                max_age=3600,
                path='/'
            )
            response.set_cookie(
                key='refresh_token',
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite='Lax',
                max_age=7 * 24 * 60 * 60,  # 7 days
                path='/'
            )

            return response

        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.COOKIES.get("refresh_token")
            if not refresh_token:
                return Response(
                    {"error": "Refresh token is missing from cookies"}, 
                    status=status.HTTP_400_BAD_REQUEST
                )

            try:
                token = RefreshToken(refresh_token)
                token.blacklist()
            except Exception as e:
                return Response(
                    {"error": f"Invalid refresh token: {str(e)}"}, 
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Delete user session cache
            email = request.user.email
            cache.delete(f"user_auth_{email}")
            log_user_action(request.user, "logout", request)

            # Clear cookies
            response = Response(
                {"message": "Logged out successfully"}, 
                status=status.HTTP_200_OK
            )
            response.delete_cookie("access_token")
            response.delete_cookie("refresh_token")

            return response

        except Exception as e:
            return Response(
                {"error": f"Logout failed: {str(e)}"}, 
                status=status.HTTP_400_BAD_REQUEST
            )


class UserProfileAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        print("=====================")
        user = request.user
        user_data = {
            "id": user.id,
            "email": user.email,
            "name": user.name,
        }
        return Response(user_data, status=status.HTTP_200_OK)


class GoogleLoginView(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = settings.GOOGLE_CALLBACK_URL
    client_class = OAuth2Client
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        user = request.user
        user.registration_type = "google"
        user.save(update_fields=["registration_type"])
        return response


class GitHubLoginView(SocialLoginView):
    adapter_class = GitHubOAuth2Adapter
    callback_url = settings.GITHUB_CALLBACK_URL
    client_class = OAuth2Client
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        user = request.user
        user.registration_type = "github"
        user.save(update_fields=["registration_type"])
        return response


class EmailVerificationView(APIView):
    def get(self, request, key):
        try:
            confirmation = EmailConfirmation.objects.get(key=key)
            confirmation.confirm(request)
            return Response({'message': 'Email verified successfully'})
        except EmailConfirmation.DoesNotExist:
            return Response(
                {'error': 'Invalid verification key'}, 
                status=status.HTTP_400_BAD_REQUEST
            )
