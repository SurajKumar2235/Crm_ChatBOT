# from rest_framework.views import APIView
# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework.permissions import IsAuthenticated
# from rest_framework_simplejwt.tokens import RefreshToken
# from .serializers import UserSerializer,MyTokenObtainPairSerializer
# from django.core.cache import cache

# from django.contrib.auth import authenticate
# # Create your views here.

# class RegisterAPIView(APIView):
#     serializer_class = UserSerializer

#     def post(self, request):
#         serializer = self.serializer_class(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         cache.set(f"user_auth_{serializer.data['email']}", serializer.data, timeout=3600)

#         return Response(serializer.data, status=status.HTTP_201_CREATED)
    
# class LoginAPIView(APIView):
#     serializer_class = UserSerializer

#     def post(self, request):
#         email = request.data.get('email')
#         password = request.data.get('password')

#         cached_user = None  # Initialize cached_user to avoid UnboundLocalError
#         if cached_user:
#             print("=====================")
#             return Response(cached_user, status=status.HTTP_200_OK)

#         user = authenticate(email=email, password=password)

#         if user:
#             refresh = RefreshToken.for_user(user)
#             user_data = {
#                 'email': user.email,
#                 'refresh': str(refresh),
#                 'access': str(refresh.access_token),
#             }
#             cache.set(f"user_auth_{email}", user_data, timeout=3600)

#             return Response({
#                 'refresh': str(refresh),
#                 'access': str(refresh.access_token),
#             })
        
#         else:
#             return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


# class LogoutAPIView(APIView):
#     serializer_class = UserSerializer
#     permission_classes = [IsAuthenticated]
#     def post(self, request):
#         try:
#             refresh_token = request.data.get("refresh")
#             if not refresh_token:
#                 return Response({"error": "Refresh token is required"}, status=status.HTTP_400_BAD_REQUEST)

#             token = RefreshToken(refresh_token)
#             token.blacklist()  # Blacklist the refresh token

#             return Response({"message": "Logged out successfully"}, status=status.HTTP_204_NO_CONTENT)
#         except Exception as e:
#             return Response({"error": "Invalid token"}, status=status.HTTP_400_BAD_REQUEST)
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
            user = serializer.save()

            user_data = {
                "id": user.id,
                "email": user.email,
            }
            cache.set(f"user_auth_{user.email}", user_data, timeout=3600)
            log_user_action(user, "register", request)

            return Response(user_data, status=status.HTTP_201_CREATED)

        except ValidationError as e:
            return Response({"errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from django.core.cache import cache

User = get_user_model()

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


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.core.cache import cache

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
