from django.shortcuts import render,redirect
from .models import Department,Testimonials,Services
from .forms import ContactForm

# Create your views here.
def home(request):
    departments=Department.objects.all()
    services=Services.objects.all()
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
    testimonials=Testimonials.objects.all()
    return render(request,"website/index.html",{"departments":departments,"services":services,"cards":cards,"testimonials":testimonials})

def emergency(request):
    return render(request,"website/emergency.html")

def contact(request):
    cards=[
        {
            "icon":"bi bi-telephone-fill text-primary",
            "title":"Phone",
            "contact":"9348200847"
        },
        {
            "icon":"bi bi-envelope-fill text-primary",
            "title":"Email",
            "contact":"info@citycarehospital.com"
        },
        {
            "icon":"bi bi-geo-alt-fill text-primary",
            "title":"Address",
            "contact":"123 Health Street, Bhubaneswar, Odisha"
        },
        {
            "icon":"bi bi-shield-plus text-danger",
            "title":"Emergency",
            "contact":"9990000990"
        }
    ]

    if request.method == "POST":
        form = ContactForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect("website:contact")

    else:
        form = ContactForm()

    return render(request,"website/contact.html",{"cards":cards,"form":form})