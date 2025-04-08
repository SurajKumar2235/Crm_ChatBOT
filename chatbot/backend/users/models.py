from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
import uuid
class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Users must have an email address")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        return self.create_user(email, password, **extra_fields)


class User(AbstractUser):
    # username = None  # Remove username, since email is unique
    id=models.UUIDField(primary_key=True, editable=False, unique=True,auto_created=True, default=uuid.uuid1)

    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()  # Use custom manager
    USERNAME_FIELD = "email"  # Use email instead of username
    REQUIRED_FIELDS = ["name","password"]

    class Meta:
        verbose_name = "User"
        ordering = ["-created_at"]
        db_table = "Users"

    def __str__(self):
        return self.name
    


from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class UserLog(models.Model):
    ACTIONS = [
        ("register", "Register"),
        ("login", "Login"),
        ("logout", "Logout"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    action = models.CharField(max_length=10, choices=ACTIONS)
    ip_address = models.GenericIPAddressField(null=True, blank=True)
    user_agent = models.TextField(null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.email} - {self.action} at {self.timestamp}"