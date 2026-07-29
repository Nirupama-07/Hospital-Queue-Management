from django.urls import path
from . import views

app_name="queueapp"

urlpatterns=[
    path('',views.queue,name="queue")
]