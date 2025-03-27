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



class RegisterAPIView(APIView):
    serializer_class = UserSerializer

    def post(self, request):
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

class LoginAPIView(APIView):
    serializer_class = UserSerializer

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        cached_user = cache.get(f"user_auth_{email}")

        if cached_user:
            return Response(cached_user, status=status.HTTP_200_OK)

        user = User.objects.filter(email=email).only("id", "email").first()
        if user and user.check_password(password):
            refresh = RefreshToken.for_user(user)
            user_data = {
                "id": user.id,
                "email": user.email,
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            }
            cache.set(f"user_auth_{email}", user_data, timeout=3600)
            log_user_action(user, "login", request)

            return Response(user_data, status=status.HTTP_200_OK)

        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)



class LogoutAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            refresh_token = request.data.get("refresh")
            if not refresh_token:
                return Response(
                    {"error": "Refresh token is required"}, 
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Try to blacklist the refresh token
            try:
                token = RefreshToken(refresh_token)
                token.blacklist()
            except Exception as e:
                return Response(
                    {"error": f"Invalid refresh token: {str(e)}"}, 
                    status=status.HTTP_400_BAD_REQUEST
                )

            # Remove user cache on logout
            email = request.user.email
            cache.delete(f"user_auth_{email}")
            log_user_action(request.user, "logout", request)

            return Response(
                {"message": "Logged out successfully"}, 
                status=status.HTTP_200_OK
            )
        except Exception as e:
            return Response(
                {"error": f"Logout failed: {str(e)}"}, 
                status=status.HTTP_400_BAD_REQUEST
            )