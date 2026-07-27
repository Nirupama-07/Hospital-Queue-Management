from django.shortcuts import render
from .models import Department, Doctors
from django.db.models import Q

# Create your views here.
def department(request):
    cards=Department.objects.all()
    return render(request, "doctors/departments.html", {"cards": cards})

def doctors(request):
    query=request.GET.get("q")
    doctors=Doctors.objects.all()
    if query:
        doctors = doctors.filter(
            Q(name__icontains=query) |
            Q(specialist__icontains=query)
        )
    cards=[
        {
            "icon":"fa-solid fa-user-doctor",
            "title":"Find a Doctor",
            "description":"Browse our experienced specialists and choose the doctor that best suits your healthcare needs."
        },
        {
            "icon":"fa-solid fa-calendar-check",
            "title":"Book Appointment",
            "description":"Select your preferred date and time to schedule an appointment online in minutes."
        },
        {
            "icon":"fa-solid fa-stethoscope",
            "title":"Consult the Doctor",
            "description":"Meet your specialist for diagnosis, treatment planning, and expert medical advice."
        },
        {
            "icon":"fa-solid fa-heart-pulse",
            "title":"Follow-Up Care",
            "description":"Receive continuous support, follow-up appointments, and personalized healthcare guidance."
        }
    ]
    return render(request,"doctors/doctors.html",{"doctors":doctors, "cards":cards})