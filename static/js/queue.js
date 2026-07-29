
const patientName = localStorage.getItem("patientName");
const department = localStorage.getItem("department");
const doctor = localStorage.getItem("doctor");
const token = localStorage.getItem("token");

document.getElementById("queuePatientName").textContent = patientName;
document.getElementById("queueDepartment").textContent = department;
document.getElementById("queueDoctor").textContent = doctor;
document.getElementById("queueToken").textContent = token;

// Patient Details
document.getElementById("queuePatientName").textContent =
    localStorage.getItem("patientName");

document.getElementById("queueDepartment").textContent =
    localStorage.getItem("department");

document.getElementById("queueDoctor").textContent =
    localStorage.getItem("doctor");

const patientToken = localStorage.getItem("token");

document.getElementById("queueToken").textContent = patientToken;


// -------------------------
// Queue Simulation
// -------------------------

// Convert "HQ-1007" → 1007
let patientNumber = parseInt(patientToken.split("-")[1]);

// Queue starts 5 patients before yours
let currentNumber = patientNumber - 5;

let peopleAhead = patientNumber - currentNumber;

document.getElementById("currentToken").textContent =
    "HQ-" + currentNumber;

document.getElementById("peopleAhead").textContent =
    peopleAhead;

document.getElementById("waitingTime").textContent =
    peopleAhead * 5 + " mins";

const status = document.getElementById("queueStatus");

let interval = setInterval(function () {

    currentNumber++;

    peopleAhead = patientNumber - currentNumber;

    document.getElementById("currentToken").textContent =
        "HQ-" + currentNumber;

    document.getElementById("peopleAhead").textContent =
        Math.max(peopleAhead, 0);

    document.getElementById("waitingTime").textContent =
        Math.max(peopleAhead * 5, 0) + " mins";

    if (currentNumber < patientNumber) {

        status.textContent = "Waiting";
        status.className = "badge bg-warning fs-5 px-3 py-2";

    }

    else if (currentNumber === patientNumber) {

        status.textContent = "Your Turn";
        status.className = "badge bg-success fs-5 px-3 py-2";

    }

    else {

        status.textContent = "Consultation Completed";
        status.className = "badge bg-primary fs-5 px-3 py-2";

        clearInterval(interval);

    }

}, 8000);

document.getElementById("appointmentDoctor").textContent =
    localStorage.getItem("doctor");

document.getElementById("appointmentDepartment").textContent =
    localStorage.getItem("department");

document.getElementById("appointmentDate").textContent =
    localStorage.getItem("date");

document.getElementById("appointmentTime").textContent =
    localStorage.getItem("time");