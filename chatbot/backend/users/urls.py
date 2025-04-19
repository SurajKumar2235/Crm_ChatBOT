from django.urls import path
from .views import RegisterAPIView, LoginAPIView, LogoutAPIView, UserProfileAPIView, GoogleLoginView, GitHubLoginView, EmailVerificationView

urlpatterns = [
    path('register/', RegisterAPIView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('logout/', LogoutAPIView.as_view(), name='logout'),
    path('me/', UserProfileAPIView.as_view(), name='user-profile'),
    path('google/', GoogleLoginView.as_view(), name='google_login'),
    path('github/', GitHubLoginView.as_view(), name='github_login'),
    path('verify-email/<str:key>/', EmailVerificationView.as_view(), name='verify_email'),
]
