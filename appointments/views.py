from django.shortcuts import render, redirect
from .forms import AppointmentForm
from .models import Appointment


def appointment(request):

    if request.method == "POST":
        form = AppointmentForm(request.POST)

        if form.is_valid():
            appointment = form.save()

            return redirect("appointments:queue", appointment.id)

    else:
        form = AppointmentForm()

    return render(request, "appointments/appointment.html", {
        "form": form
    })


def queue(request, pk):

    appointment = Appointment.objects.get(id=pk)

    token = f"HQ-{1000 + appointment.id}"

    return render(request, "appointments/queue.html", {
        "appointment": appointment,
        "token": token,
    })