from django.db import models

# Create your models here.
class Department(models.Model):
    icon=models.CharField(max_length=20)
    name=models.CharField(max_length=50)
    images=models.ImageField(upload_to="departments/")
    description=models.TextField()

    def __str__(self):
        return self.name

class Services(models.Model):
    icon=models.CharField(max_length=3)
    title=models.CharField(max_length=20)
    description=models.TextField()
    render=models.CharField(max_length=50)

    def __str__(self):
        return self.title

class Testimonials(models.Model):
    image=models.ImageField(upload_to="testimonials/")
    name=models.CharField(max_length=50)
    disease=models.CharField(max_length=50)
    rating = models.PositiveSmallIntegerField(default=5)
    description=models.TextField()

    def __str__(self):
        return self.name

