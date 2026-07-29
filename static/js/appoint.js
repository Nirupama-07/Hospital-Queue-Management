console.log("hi")
const form = document.getElementById("appointmentForm")

const name = document.getElementById("name")
const phone = document.getElementById("phone")
const email = document.getElementById("email")
const age = document.getElementById("age")
const gender = document.getElementById("gender")
const department = document.getElementById("department")
const doctor = document.getElementById("doctor")
const date = document.getElementById("date")
const time = document.getElementById("time")
const final = document.getElementById("final")

const nameError = document.getElementById("nameError")
const phoneError = document.getElementById("phoneError")
const emailError = document.getElementById("emailError")
const ageError = document.getElementById("ageError")
const genderError = document.getElementById("genderError")
const departmentError = document.getElementById("departmentError")
const doctorError = document.getElementById("doctorError")
const dateError = document.getElementById("dateError")
const timeError = document.getElementById("timeError")


const namePattern = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/;
const phonePattern = /^[6-9]\d{9}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setValidation(input, errorElement, isValid, successMessage, errorMessage) {
    if (isValid) {

        input.classList.remove("is-invalid");
        input.classList.add("is-valid");

        errorElement.innerText = successMessage;
        errorElement.style.color = "green";

    } else {

        input.classList.remove("is-valid");
        input.classList.add("is-invalid");

        errorElement.innerText = errorMessage;
        errorElement.style.color = "red";

    }

}

function validateName() {

    const valid = namePattern.test(name.value.trim());

    setValidation(
        name,
        nameError,
        valid,
        "✅ Correct Name",
        "❌ Example: Nirupama Majhi"
    );

    return valid;

}

name.addEventListener("input", validateName);

function validatePhone() {
    const valid = phonePattern.test(phone.value.trim());

    setValidation(
        phone,
        phoneError,
        valid,
        "✅Valid",
        "❌Enter 10 digits phone number"
    )
    return valid;
}
phone.addEventListener("input", validatePhone)

function validateEmail() {

    const valid = emailPattern.test(email.value.trim());

    setValidation(
        email,
        emailError,
        valid,
        "✅ Valid Email",
        "❌ Enter a valid email address"
    );

    return valid;

}
email.addEventListener("input", validateEmail);

function validateAge() {

    const valid = Number(age.value) >= 1 && Number(age.value) <= 120;

    setValidation(
        age,
        ageError,
        valid,
        "✅ Valid Age",
        "❌ Age must be between 1 and 120"
    );

    return valid;

}

age.addEventListener("input", validateAge);

function validateGender() {

    const valid = gender.value !== "";

    setValidation(
        gender,
        genderError,
        valid,
        "✅ Gender Selected",
        "❌ Please select a gender"
    );

    return valid;

}

gender.addEventListener("change", validateGender);

function validateDepartment() {

    const valid = department.value !== "";

    setValidation(
        department,
        departmentError,
        valid,
        "✅ Department Selected",
        "❌ Please select a department"
    );

    return valid;

}

department.addEventListener("change", validateDepartment);

function validateDoctor() {

    const valid = doctor.value !== "";

    setValidation(
        doctor,
        doctorError,
        valid,
        "✅ Doctor Selected",
        "❌ Please select a doctor"
    );

    return valid;

}

doctor.addEventListener("change", validateDoctor);

function validateDate() {

    let selectedDate = new Date(date.value);

    let today = new Date();
    today.setHours(0, 0, 0, 0);

    const valid = date.value !== "" && selectedDate >= today;

    setValidation(
        date,
        dateError,
        valid,
        "✅ Valid Date",
        "❌ Please select today or a future date"
    );

    return valid;

}

date.addEventListener("change", validateDate);

function validateTime() {

    const valid = time.value !== "";

    setValidation(
        time,
        timeError,
        valid,
        "✅ Valid Time",
        "❌ Please select a time"
    );

    return valid;

}

time.addEventListener("change", validateTime);

console.log("all data inserted")
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("validation time")
    const valid =
        validateName() &&
        validatePhone() &&
        validateEmail() &&
        validateAge() &&
        validateGender() &&
        validateDepartment() &&
        validateDate() &&
        validateTime()


    if (!valid) {



        final.innerText = "❌ Please fix all errors before submitting.";
        final.style.color = "red";

    } else {

        final.innerText = "✅ Form submitted successfully!";
        final.style.color = "green";
        console.log("validation passed")
        

        // Don't call e.preventDefault() here.
        // Django will receive the form, save it, and redirect.

        const appointment = {
            name: name.value,
            phone: phone.value,
            email: email.value,
            age: age.value,
            gender: gender.value,
            department: department.value,
            doctor: doctor.value,
            date: date.value,
            time: time.value
        }

        const appointments = JSON.parse(localStorage.getItem("appointments")) || [];

        const tokenNumber = appointments.length + 1
        const token = `HQ-${String(tokenNumber).padStart(4, "0")}`;

        appointment.token = token

        appointments.push(appointment)

        localStorage.setItem("appointments", JSON.stringify(appointments))

    }

})

