from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth import get_user_model
import uuid

User = get_user_model()

class ChatSession(models.Model):
    """Stores conversation sessions for each user."""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="chat_sessions")
    session_id = models.UUIDField(default=uuid.uuid4, unique=True, editable=False)  # Unique session identifier
    created_at = models.DateTimeField(auto_now_add=True)  # When session started
    updated_at = models.DateTimeField(auto_now=True)  # Last activity time

    def __str__(self):
        return f"Session {self.session_id} - {self.user.email}"
class ChatMessage(models.Model):
    """Stores user messages and chatbot responses linked to a session."""
    session = models.ForeignKey(ChatSession, on_delete=models.CASCADE, related_name="messages")
    user_message = models.TextField()  # User input message
    bot_response = models.TextField()  # Chatbot's response
    timestamp = models.DateTimeField(auto_now_add=True)  # When the message was sent

    def __str__(self):
        return f"Message in {self.session.session_id} at {self.timestamp}"
class ChatbotAPILog(models.Model):
    """Stores chatbot API interactions for debugging and analytics."""
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
    session = models.ForeignKey(ChatSession, on_delete=models.CASCADE, related_name="api_logs")
    request_payload = models.JSONField()  # Stores API request data
    response_payload = models.JSONField()  # Stores API response data
    status_code = models.IntegerField()  # HTTP Status code (200, 400, 500, etc.)
    created_at = models.DateTimeField(auto_now_add=True)  # API call timestamp

    def __str__(self):
        return f"API Log - Session {self.session.session_id} - {self.status_code}"
