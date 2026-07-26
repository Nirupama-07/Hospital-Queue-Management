const form = document.getElementById("contactForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const subjectError = document.getElementById("subjectError");
const messageError = document.getElementById("messageError");


const namePattern = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/;
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

email.addEventListener("input", () => {

    let val = email.value.trim();

    if (!emailPattern.test(val)) {
        emailError.innerText = "❌ Example: pragatika@gmail.com";
        emailError.style.color = "red";
    } else {
        emailError.innerText = "✅ Valid Email";
        emailError.style.color = "green";
    }

});


subject.addEventListener("input", () => {

    let val = subject.value.trim();

    if (val === "") {
        subjectError.innerText = "❌ Subject cannot be empty";
        subjectError.style.color = "red";
    }
    else if (val.length < 5) {
        subjectError.innerText = "❌ Subject should be at least 5 characters";
        subjectError.style.color = "red";
    }
    else {
        subjectError.innerText = "✅ Subject looks good";
        subjectError.style.color = "green";
    }

});

message.addEventListener("input", () => {

    let val = message.value.trim();

    if (val === "") {
        messageError.innerText = "❌ Message cannot be empty";
        messageError.style.color = "red";
    }
    else if (val.length < 20) {
        messageError.innerText = "❌ Message should be at least 20 characters";
        messageError.style.color = "red";
    }
    else {
        messageError.innerText = "✅ Message looks good";
        messageError.style.color = "green";
    }

});
form.addEventListener("submit", function (event) {

    event.preventDefault();

    let valid =
        namePattern.test(name.value.trim()) &&
        emailPattern.test(email.value.trim()) &&
        subject.value.trim() !== "" &&
        message.value.trim() !== "";

    

    form.reset();

    nameError.innerText = "";
    emailError.innerText = "";
    subjectError.innerText = "";
    messageError.innerText = "";
    document.getElementById("finalmsg").innerText = valid ? "✅Message Sent" : "❌please fixed all errors before submitting the form";

});