from django.urls import path
from . import views

app_name="doctors"

urlpatterns=[
    path('department/',views.department,name="department"),
    path("doctors/",views.doctors,name="doctors")
]