from django import forms
from .models import Contact

class ContactForm(forms.ModelForm):

    class Meta:
        model = Contact
        fields = ["name", "email", "subject", "message"]

        widgets = {
            "name": forms.TextInput(attrs={
                "class": "form-control",
                "placeholder": "Enter your name"
            }),
            "email": forms.EmailInput(attrs={
                "class": "form-control",
                "placeholder": "Enter your email"
            }),
            "subject": forms.TextInput(attrs={
                "class": "form-control",
                "placeholder": "Enter subject"
            }),
            "message": forms.Textarea(attrs={
                "class": "form-control",
                "rows": 5,
                "placeholder": "Write your message"
            }),
        }

    # These methods must be OUTSIDE Meta

    def clean_name(self):
        name = self.cleaned_data["name"]

        if len(name) < 3:
            raise forms.ValidationError(
                "Name must be at least 3 characters."
            )

        return name

    def clean_email(self):
        email = self.cleaned_data["email"]

        if not email.endswith("@gmail.com"):
            raise forms.ValidationError(
                "Please enter a valid Gmail address."
            )

        return email

    def clean_subject(self):
        subject = self.cleaned_data["subject"]

        if len(subject) < 5:
            raise forms.ValidationError(
                "Subject must be at least 5 characters."
            )

        return subject

    def clean_message(self):
        message = self.cleaned_data["message"]

        if len(message.strip()) == 0:
            raise forms.ValidationError(
                "Message cannot be empty."
            )

        if len(message) < 5:
            raise forms.ValidationError(
                "Message must be at least 5 characters."
            )

        return message