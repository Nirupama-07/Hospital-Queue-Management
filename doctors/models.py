from django.db import models


# Create your models here.
class Department(models.Model):
    image=models.ImageField(upload_to="department/")
    title=models.CharField(max_length=50)
    description=models.CharField(max_length=100)

    def __str__(self):
        return self.title

class Doctors(models.Model):
    image=models.ImageField(upload_to="doctors/")
    name=models.CharField(max_length=50)
    specialist=models.CharField(max_length=50)
    experience=models.IntegerField()
    fee=models.IntegerField()
    department = models.CharField(max_length=50)

    def __str__(self):
        return self.name