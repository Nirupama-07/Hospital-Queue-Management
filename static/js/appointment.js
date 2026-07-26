if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Please login first.");
    window.location.replace("login.html");
}
// const form = document.getElementById("appointmentForm");
const department = document.getElementById("department");
const doctor = document.getElementById("doctor");

const doctors = {
    Cardiology: [
        "Dr. Priya Sharma (Cardiologist)",
        "Dr. Amit Das (Cardiologist)"
    ],

    Neurology: [
        "Dr. Rahul Verma (Neurologist)",
        "Dr. Neha Singh (Neurologist)"
    ],

    Orthopedics: [
        "Dr. Arjun Mehta (Orthopedic)",
        "Dr. Rakesh Kumar (Orthopedic)"
    ],

    Dermatology: [
        "Dr. Sneha Patel (Dermatologist)",
        "Dr. Pooja Nair (Dermatologist)"
    ],

    Pediatrics: [
        "Dr. Anjali Roy (Pediatrician)",
        "Dr. Karan Gupta (Pediatrician)"
    ]
};

department.addEventListener("change", function () {

    const selectedDepartment = department.value;

    doctor.innerHTML = `<option>Select Doctor</option>`;

    if (doctors[selectedDepartment]) {

        doctors[selectedDepartment].forEach(doc => {

            const option = document.createElement("option");
            option.textContent = doc;
            option.value = doc;

            doctor.appendChild(option);

        });

    }

});

const form = document.getElementById("appointmentForm");


const name = document.getElementById("name");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const departmentValue = document.getElementById("department");
const doctorValue = document.getElementById("doctor");
const date = document.getElementById("date");
const time = document.getElementById("time");
const reason = document.getElementById("reason");

const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const ageError = document.getElementById("ageError");
const genderError = document.getElementById("genderError");
const departmentError = document.getElementById("departmentError");
const doctorError = document.getElementById("doctorError");
const dateError = document.getElementById("dateError");
const timeError = document.getElementById("timeError");
const reasonError = document.getElementById("reasonError");


const namePattern = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/;
const phonePattern = /^[6-9]\d{9}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


name.addEventListener("input", () => {
    let val = name.value
    if (!namePattern.test(val)) {
        nameError.innerText = "❌ Example:Name Should be In this order Pragatika Mishra"
        nameError.style.color = "red"
    } else {
        nameError.innerText = "✅correct name"
        nameError.style.color = "green"
    }
})


// Phone Validation
phone.addEventListener("input", () => {
    let val = phone.value
    if (!phonePattern.test(val)) {
        phoneError.innerText = "❌ Example:Enter a valid 10-digit phone number"
        phoneError.style.color = "red"
    } else {
        phoneError.innerText = "✅"
        phoneError.style.color = "green"
    }
})


// Email Validation
email.addEventListener("input", () => {
    let val = email.value
    if (!emailPattern.test(val)) {
        emailError.innerText = "❌ Invalid Email"
        emailError.style.color = "red"
    } else {
        emailError.innerText = "✅Correct email"
        emailError.style.color = "green"
    }
})

// Age Validation
age.addEventListener("input", () => {
    let val = age.value
    if (val < 1 || val > 120) {
        ageError.innerText = "Enter a valid age";
        ageError.style.color = "red"
    } else {
        ageError.innerText = "✅"
        ageError.style.color = "green"
    }
})


// Gender Validation
gender.addEventListener("change", function () {
    if (gender.value === "Select Gender") {
        genderError.innerText = "Please select gender";
        genderError.style.color = "red"
    } else {
        genderError.innerText = "✅ Valid";
        genderError.style.color = "green"
    }
});

// Department Validation
departmentValue.addEventListener("change", function () {
    if (department.value === "Select Department") {
        departmentError.innerText = "Please select department";
        departmentError.style.color = "red"
    } else {
        departmentError.innerText = "✅ Valid";
        departmentError.style.color = "green"
    }
});

// Doctor Validation
doctorValue.addEventListener("change", function () {
    if (doctor.value === "Select Doctor") {
        doctorError.innerText = "Please select doctor";
        doctorError.style.color = "red"
    } else {
        doctorError.innerText = "✅ Valid";
        doctorError.style.color = "green"
    }
});

// Date Validation
date.addEventListener("change", function () {
    if (date.value === "") {
        dateError.innerText = "Please select appointment date";
    } else {
        const selectedDate = new Date(date.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            dateError.innerText = "Date cannot be in the past";
            dateError.style.color = "red"
        } else {
            dateError.innerText = "✅";
            dateError.style.color = "green"
        }
    }
});

// Time Validation
time.addEventListener("change", function () {
    if (time.value === "") {
        timeError.innerText = "Please select appointment time";
        timeError.style.color = "red"
    } else {
        timeError.innerText = "✅ Valid";
        timeError.style.color = "green"
    }
});

// Reason Validation
reason.addEventListener("input", function () {
    if (reason.value.trim() === "") {
        reasonError.innerText = "Please enter reason for visit";
        reasonError.style.color = "red"
    } else if (reason.value.trim().length < 10) {
        reasonError.innerText = "Reason must be at least 10 characters";
        reasonError.style.color = "red"
    } else {
        reasonError.innerText = "✅";
        reasonError.style.color = "green"
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid =
        namePattern.test(name.value.trim()) &&
        phonePattern.test(phone.value.trim()) &&
        emailPattern.test(email.value.trim()) &&
        age.value >= 1 &&
        age.value <= 120 &&
        gender.value !== "Select Gender" &&
        department.value !== "Select Department" &&
        doctor.value !== "Select Doctor" &&
        date.value !== "" &&
        new Date(date.value) >= new Date(new Date().setHours(0, 0, 0, 0)) &&
        time.value !== "" &&
        reason.value.trim().length >= 10;

    if (valid) {
        const token = "HQ-" + Math.floor(1000 + Math.random() * 9000);

        // Display Token Details
        document.getElementById("tokenNumber").textContent = token;
        document.getElementById("patientName").textContent = name.value;
        document.getElementById("patientDepartment").textContent = departmentValue.value;
        document.getElementById("patientDoctor").textContent = doctorValue.value;
        document.getElementById("appointmentDate").textContent = date.value;
        document.getElementById("appointmentTime").textContent = time.value;

        // Save to localStorage
        localStorage.setItem("patientName", name.value);
        localStorage.setItem("department", departmentValue.value);
        localStorage.setItem("doctor", doctorValue.value);
        localStorage.setItem("date", date.value);
        localStorage.setItem("time", time.value);
        localStorage.setItem("token", token);

        // Show Token Section
        document.getElementById("tokenSection").classList.remove("d-none");

        document.getElementById("tokenSection").scrollIntoView({
            behavior: "smooth"
        });

        alert("Appointment Booked Successfully!");

        form.reset();

        // Redirect after a short delay so the user can briefly see the confirmation
        setTimeout(() => {
            window.location.href = "queue.html";
        }, 3000);
    } else {

        document.getElementById("finalmsg").innerText =
            "❌ Please fix all errors before submitting the form";

    }

    

});





