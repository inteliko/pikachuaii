# leads/api/urls.py

from django.urls import path
from .views import AIGenerateEmailView

urlpatterns = [
    path("generate-email/", AIGenerateEmailView.as_view(), name="generate-email"),
]
