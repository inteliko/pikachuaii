
# Register your models here.
# campaigns/admin.py

from django.contrib import admin
from .models import Campaign, EmailTemplate, Reply

admin.site.register(Campaign)
admin.site.register(EmailTemplate)
admin.site.register(Reply)
