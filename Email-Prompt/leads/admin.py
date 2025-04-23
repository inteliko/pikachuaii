# leads/admin.py
from django.contrib import admin
from .models import Lead, Campaign, EmailTemplate, Reply

admin.site.register(Lead)
admin.site.register(Campaign)
admin.site.register(EmailTemplate)
admin.site.register(Reply)
