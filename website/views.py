from django.shortcuts import render
from .models import Department

# Create your views here.
def home(request):
    departments=Department.objects.all()
    cards=[
        {
            "icon":"🩺",
            "title":"Experienced Doctors",
            "description":"Our specialists have years of experience in providing quality healthcare."
        },
        {
            "icon":"⏰",
            "title":"24×7 Emergency",
            "description":"Emergency medical services are available round the clock."
        },
        {
            "icon":"💻",
            "title":"Online Appointment",
            "description":"Book appointments quickly and conveniently from anywhere."
        },
        {
            "icon":"🏥",
            "title":"Modern Equipment",
            "description":"Equipped with advanced medical technology for accurate diagnosis and treatment."
        },
        {
            "icon":"❤️",
            "title":"Patient-Centered Care",
            "description":"Every patient receives personalized attention and compassionate care."
        },
        {
            "icon":"📋",
            "title":"Easy Queue Tracking",
            "description":"Check your token number and waiting status in real time."
        }
    ]
    return render(request,"website/index.html",{"departments":departments,"cards":cards})

def emergency(request):
    return render(request,"website/emergency.html")

def contact(request):
    return render(request,"website/contact.html")