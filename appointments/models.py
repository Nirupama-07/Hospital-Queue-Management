from django.db import models

class Appointment(models.Model):

    GENDER_CHOICES = [
        ("Male", "Male"),
        ("Female", "Female"),
        ("Other", "Other"),
    ]

    DEPARTMENT_CHOICES = [
        ("Cardiology", "Cardiology"),
        ("Neurology", "Neurology"),
        ("Orthopedics", "Orthopedics"),
        ("Dermatology", "Dermatology"),
        ("Pediatrics", "Pediatrics"),
    ]

    DOCTOR_CHOICES = [
        ("Dr. Rahul", "Dr. Rahul"),
        ("Dr. Priya", "Dr. Priya"),
        ("Dr. Amit", "Dr. Amit"),
        ("Dr. Sneha", "Dr. Sneha"),
    ]

    STATUS_CHOICES = [
        ("Pending", "Pending"),
        ("Confirmed", "Confirmed"),
        ("Completed", "Completed"),
        ("Cancelled", "Cancelled"),
    ]

    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=10)
    email = models.EmailField()
    age = models.PositiveIntegerField()

    gender = models.CharField(
        max_length=10,
        choices=GENDER_CHOICES
    )

    department = models.CharField(
        max_length=50,
        choices=DEPARTMENT_CHOICES
    )
    doctor = models.CharField(
        max_length=100,
        choices=DOCTOR_CHOICES
    )

    date = models.DateField()
    time = models.TimeField()

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="Pending"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name