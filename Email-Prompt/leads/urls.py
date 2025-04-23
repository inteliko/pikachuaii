from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LeadViewSet, CampaignViewSet, EmailTemplateViewSet, ReplyViewSet
from leads.api.views import AIGenerateEmailView  # ✅ import the correct view

router = DefaultRouter()
router.register(r'leads', LeadViewSet)
router.register(r'campaigns', CampaignViewSet)
router.register(r'email-templates', EmailTemplateViewSet)
router.register(r'replies', ReplyViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('generate-email/', AIGenerateEmailView.as_view(), name='generate_email'),  # ✅ use class-based view
]
