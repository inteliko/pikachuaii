

# Create your models here.

from django.contrib.auth.models import AbstractUser
from django.db import models
from django.contrib.auth import get_user_model


class CustomUser(AbstractUser):
    # Add any additional fields you want
    bio = models.TextField(null=True, blank=True)
    company_name = models.CharField(max_length=255, null=True, blank=True)
    plan = models.CharField(max_length=100, default='free')


class Subscription(models.Model):
    user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
    plan = models.CharField(max_length=100)
    started_at = models.DateTimeField(auto_now_add=True)
    expires_at = models.DateTimeField(null=True, blank=True)
    stripe_subscription_id = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return f"{self.user.username} - {self.plan}"
