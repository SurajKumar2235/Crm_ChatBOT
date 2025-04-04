from rest_framework.permissions import BasePermission

class IsAuthenticatedForAdmin(BasePermission):
    """
    Custom permission to only allow authenticated users to access Admin API endpoints.
    """
    def has_permission(self, request, view):
        # Check if the request path starts with /api/admin/
        if request.path.startswith('/api/admin/'):
            return bool(request.user and request.user.is_authenticated)
        # For all other paths, allow access
        return True
