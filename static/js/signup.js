const form = document.getElementById("signupForm");

const name = document.getElementById("name");
const email = document.getElementById("email");
const mobile = document.getElementById("mobile");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const mobileError = document.getElementById("mobileError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const signupMsg = document.getElementById("signupMsg");

const namePattern = /^[A-Z][a-z]+( [A-Z][a-z]+)*$/;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const mobilePattern = /^[6-9]\d{9}$/;

const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;


name.addEventListener("input", () => {
    if (!namePattern.test(name.value.trim())) {
        nameError.innerText = "❌ Example: Nirupama Majhi";
        nameError.style.color = "red";
    } else {
        nameError.innerText = "✅ Valid Name";
        nameError.style.color = "green";
    }
});
email.addEventListener("input", () => {
    if (!emailPattern.test(email.value.trim())) {
        emailError.innerText = "❌ Example: pragati@gmail.com";
        emailError.style.color = "red";
    } else {
        emailError.innerText = "✅ Valid Email";
        emailError.style.color = "green";
    }
});
mobile.addEventListener("input", () => {
    if (!mobilePattern.test(mobile.value.trim())) {
        mobileError.innerText = "❌ Example: Number Must Be 10 Digit Only";
        mobileError.style.color = "red";
    } else {
        mobileError.innerText = "✅ Valid Phone Number";
        mobileError.style.color = "green";
    }
});
password.addEventListener("input", () => {
    if (!passwordPattern.test(password.value.trim())) {
        passwordError.innerText = "❌  Password must be 8 characters long and should Contain Uppercase,Lowercase,Number and a special character";
        passwordError.style.color = "red";
    } else {
        passwordError.innerText = "✅  Strong Password";
        passwordError.style.color = "green";
    }
})

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid =
        namePattern.test(name.value.trim()) &&
        emailPattern.test(email.value.trim()) &&
        mobilePattern.test(mobile.value.trim()) &&
        passwordPattern.test(password.value) &&
        password.value === confirmPassword.value;

    if (valid) {

        const user = {
            name: name.value.trim(),
            email: email.value.trim(),
            mobile: mobile.value.trim(),
            password: password.value
        };

        localStorage.setItem("user", JSON.stringify(user));

        signupMsg.innerText = "✅ Account Created Successfully!";
        signupMsg.style.color = "green";

        form.reset();

        setTimeout(() => {
            window.location.href = "login.html";
        }, 2000);

    } else {

        signupMsg.innerText = "❌ Please fix all errors before submitting.";
        signupMsg.style.color = "red";
    }
});