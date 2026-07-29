from django import forms
from .models import Appointment


class AppointmentForm(forms.ModelForm):

    class Meta:
        model = Appointment

        fields = "__all__"

        widgets = {
            "name": forms.TextInput(attrs={
                "class": "form-control",
                "id":"name",
                "placeholder": "Enter your name"
            }),

            "phone": forms.TextInput(attrs={
                "class": "form-control",
                "id":"phone",
                "placeholder": "Enter phone number"
            }),

            "email": forms.EmailInput(attrs={
                "class": "form-control",
                "id":"email",
                "placeholder": "Enter email"
            }),

            "age": forms.NumberInput(attrs={
                "class": "form-control",
                "id":"age",
                "placeholder": "Enter age"
            }),

            "gender": forms.Select(attrs={
                "class": "form-select",
                "id":"gender"
            }),

            "department": forms.Select(attrs={
                "class": "form-select",
                "id":"department",
            }),

            "doctor": forms.Select(attrs={
                "class": "form-control",
                "id":"doctor",
                "placeholder": "Enter doctor name"
            }),

            "date": forms.DateInput(attrs={
                "class": "form-control",
                "id":"date",
                "type": "date"
            }),

            "time": forms.TimeInput(attrs={
                "class": "form-control",
                "id":"time",
                "type": "time"
            })

            
        }