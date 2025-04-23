from django.db import models
from django.contrib.auth import get_user_model



class Campaign(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    subject = models.CharField(max_length=255)
    body = models.TextField()
    sent_at = models.DateTimeField(null=True, blank=True)
    status = models.CharField(max_length=50, default="draft")  # draft, sent, etc.

    def __str__(self):
        return self.name


class EmailTemplate(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    subject = models.CharField(max_length=255)
    body = models.TextField()

    def __str__(self):
        return self.name


class Reply(models.Model):
    lead = models.ForeignKey('leads.Lead', on_delete=models.CASCADE, related_name='campaign_replies')  # Change here
    campaign = models.ForeignKey(Campaign, on_delete=models.CASCADE)
    content = models.TextField()
    received_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Reply from {self.lead.name}"