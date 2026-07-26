from django.shortcuts import render,get_object_or_404
from .models import Department

# Create your views here.
def department(request):
    cards=Department.objects.all()
    return render(request, "doctors/departments.html", {"cards": cards})

def doctors(request):
    return render(request,"doctors/doctors.html")