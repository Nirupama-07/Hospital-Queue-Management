const isLoggedIn = localStorage.getItem("isLoggedIn");

// =====================
// Protected Pages
// =====================

const protectedPages = [
    "appointment.html",
    "queue.html",
    "appointments.html",
    "upcoming.html",
    "emergency.html"
];

const currentPage = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();

if (protectedPages.includes(currentPage) && isLoggedIn !== "true") {
    alert("Please login first.");
    window.location.href = "login.html";
}
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

const authButtons = document.getElementById("authButtons");
const accountMenu = document.getElementById("accountMenu");

// const isLoggedIn = localStorage.getItem("isLoggedIn");

const user =  JSON.parse(localStorage.getItem("user"));

const accountLetter = document.getElementById("accountLetter");

if (user && accountLetter) {
    accountLetter.innerText = user.name.charAt(0).toUpperCase();
}

// =====================
// Login / Logout UI
// =====================

if (authButtons && accountMenu) {
    if (isLoggedIn === "true") {
        authButtons.classList.add("d-none");
        accountMenu.classList.remove("d-none");
    } else {
        authButtons.classList.remove("d-none");
        accountMenu.classList.add("d-none");
    }
}

// =====================
// Logout
// =====================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function (e) {

        e.preventDefault();

        localStorage.removeItem("isLoggedIn");
        localStorage.clear()
        sessionStorage.clear();

        alert("Logged out successfully!");

        window.location.href = "login.html";

    });

}
