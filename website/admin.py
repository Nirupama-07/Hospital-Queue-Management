from django.contrib import admin
from .models import Department, Testimonials, Services

# Register your models here.
admin.site.register([Department, Testimonials, Services])