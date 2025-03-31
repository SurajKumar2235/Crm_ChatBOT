from django.http import JsonResponse
from django.urls import resolve
from rest_framework import status

class AdminAuthenticationMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Check if the request is for an Admin API endpoint
        if request.path.startswith('/api/admin/'):
            if not request.user.is_authenticated:
                return JsonResponse(
                    {"error": "Authentication required"}, 
                    status=status.HTTP_401_UNAUTHORIZED
                )
            
            # Optional: Add additional admin permission check
            if not request.user.is_staff:
                return JsonResponse(
                    {"error": "Admin privileges required"}, 
                    status=status.HTTP_403_FORBIDDEN
                )

        response = self.get_response(request)
        return response 