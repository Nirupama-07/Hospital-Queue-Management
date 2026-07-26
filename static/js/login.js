const form = document.getElementById("loginForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const loginMsg = document.getElementById("loginMsg");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordPattern =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;


// Email Validation
email.addEventListener("input", () => {

    if (!emailPattern.test(email.value.trim())) {
        emailError.innerText = "❌ Enter a valid email address";
        emailError.style.color = "red";
    } else {
        emailError.innerText = "✅ Valid Email";
        emailError.style.color = "green";
    }

});


// Password Validation
password.addEventListener("input", () => {

    if (!passwordPattern.test(password.value.trim())) {
        passwordError.innerText =
            "❌ Password must contain uppercase, lowercase, number & special character";
        passwordError.style.color = "red";
    } else {
        passwordError.innerText = "✅ Strong Password";
        passwordError.style.color = "green";
    }

});


// Login
form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get registered user
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {

        loginMsg.innerText = "❌ No account found. Please Sign Up first.";
        loginMsg.style.color = "red";
        return;

    }

    if (
        email.value.trim() === storedUser.email &&
        password.value === storedUser.password
    ) {

        loginMsg.innerText = "✅ Login Successful! Redirecting...";
        loginMsg.style.color = "green";

        // Save login status
        localStorage.setItem("isLoggedIn", "true");

        form.reset();

        emailError.innerText = "";
        passwordError.innerText = "";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 2000);

    } else {

        loginMsg.innerText = "❌ Invalid Email or Password";
        loginMsg.style.color = "red";

    }

});