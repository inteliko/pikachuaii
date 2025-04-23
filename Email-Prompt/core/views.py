
from django.http import JsonResponse

def home(request):
    return JsonResponse({
        "message": "Welcome to the Email Sender SaaS",
        "api_endpoints": {
            "leads": "/api/leads/",
            "campaigns": "/api/campaigns/",
            "email-templates": "/api/email-templates/",
            "replies": "/api/replies/"
        }
    })