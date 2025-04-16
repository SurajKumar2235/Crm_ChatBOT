from django.conf import settings
import clerk
from .models import ClerkUser, UserActivity

class ClerkAuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response
        clerk.api_key = settings.CLERK_SECRET_KEY

    def __call__(self, request):
        session_token = request.headers.get('Authorization', '').replace('Bearer ', '')
        
        if session_token:
            try:
                clerk_session = clerk.sessions.verify_token(session_token)
                user_id = clerk_session['sub']
                
                # Get or create ClerkUser
                user, created = ClerkUser.objects.get_or_create(
                    clerk_id=user_id,
                    defaults={
                        'email': clerk_session.get('email', ''),
                        'name': clerk_session.get('name', '')
                    }
                )

                # Log user activity
                UserActivity.objects.create(
                    user=user,
                    action='login',
                    ip_address=self.get_client_ip(request),
                    user_agent=request.META.get('HTTP_USER_AGENT', '')
                )
                
                request.user = user
            except Exception as e:
                request.user = None
        
        response = self.get_response(request)
        return response

    def get_client_ip(self, request):
        x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
        if x_forwarded_for:
            return x_forwarded_for.split(',')[0]
        return request.META.get('REMOTE_ADDR')