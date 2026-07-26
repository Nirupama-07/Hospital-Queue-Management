from django.urls import path
from . import views

app_name="website"

urlpatterns=[
    path('',views.home,name="home"),
    path('emergency/',views.emergency,name="emergency"),
    path('contact/',views.contact,name="contact")
]