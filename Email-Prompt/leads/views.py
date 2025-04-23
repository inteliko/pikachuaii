from rest_framework import viewsets
from .models import Lead, Campaign, EmailTemplate, Reply
from .serializers import LeadSerializer, CampaignSerializer, EmailTemplateSerializer, ReplySerializer
from django.http import JsonResponse
import json

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class CampaignViewSet(viewsets.ModelViewSet):
    queryset = Campaign.objects.all()
    serializer_class = CampaignSerializer

class EmailTemplateViewSet(viewsets.ModelViewSet):
    queryset = EmailTemplate.objects.all()
    serializer_class = EmailTemplateSerializer

class ReplyViewSet(viewsets.ModelViewSet):
    queryset = Reply.objects.all()
    serializer_class = ReplySerializer

def generate_email(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            prompt = data.get('prompt', '')
            email_template = f"Generated email based on prompt: {prompt}"
            return JsonResponse({'email_template': email_template})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON data'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid method'}, status=405)


