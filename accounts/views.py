from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login
from django.contrib import messages

# Create your views here.

def signup(request):
    if request.method=="POST":
        username=request.POST['username']
        email=request.POST['email']
        password=request.POST['password']
        confirmPassword=request.POST['confirmPassword']

        if password!=confirmPassword:
            messages.error(request,"Password does not matches")
            return redirect("accounts:signup")

        if User.objects.filter(email=email):
            messages.error(request,"Email already registered")
            return redirect("accounts:signup")

        User.objects.create_user(
            username=username,
            email=email,
            password=password
        )

        messages.success(request,"Account successfully logged in")
        return redirect("accounts:login")
    return render(request,"accounts/signup.html")

def login_view(request):
    if request.method=="POST":
        username=request.POST['username']
        password=request.POST['password']

        user = authenticate(
            username=username,
            password=password
        )

        if user is not None:
            login(request,user)
            return redirect("website:home")
        else:
            print("Invalid credentials")
    return render(request,"accounts/login.html")