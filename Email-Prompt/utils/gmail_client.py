from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build
import base64
from email.mime.text import MIMEText

def get_gmail_service(token_dict):
    creds = Credentials(
        token=token_dict['access_token'],
        refresh_token=token_dict['refresh_token'],
        token_uri="https://oauth2.googleapis.com/token",
        client_id="YOUR_CLIENT_ID",
        client_secret="YOUR_CLIENT_SECRET",
        scopes=["https://www.googleapis.com/auth/gmail.send"]
    )
    return build('gmail', 'v1', credentials=creds)

def send_email(service, sender, to, subject, body):
    message = MIMEText(body)
    message['to'] = to
    message['from'] = sender
    message['subject'] = subject
    raw = base64.urlsafe_b64encode(message.as_bytes()).decode()

    return service.users().messages().send(userId="me", body={'raw': raw}).execute()
