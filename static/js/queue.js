const appointments=JSON.parse(localStorage.getItem("appointments")) || []

if(appointments.length===0){
    alert("No appointment found")
}

const appointment=appointments[appointments.length - 1]

document.getElementById("queuePatientName").innerText=appointment.name
document.getElementById("queueDepartment").innerText=appointment.department
document.getElementById("queueDoctor").innerText=appointment.doctor

document.getElementById("queueToken").innerText=appointment.token

const currentTokenNumber =Number(localStorage.getItem("currentToken")) || 1;
document.getElementById("currentToken").innerText =`HQ-${String(currentTokenNumber).padStart(4, "0")}`;

setInterval(() => {

    let current = Number(localStorage.getItem("currentToken")) || 1;

    current++;

    localStorage.setItem("currentToken", current);

    // location.reload();

}, 10000);

const userTokenNumber = Number(
    appointment.token.replace("HQ-", "")
);
const peopleAhead = Math.max(
    userTokenNumber - currentTokenNumber,
    0
);
document.getElementById("peopleAhead").innerText = peopleAhead;

const waitingTime = peopleAhead * 1;
document.getElementById("waitingTime").innerText = `${waitingTime} mins`;

const queueStatus = document.getElementById("queueStatus");

if (userTokenNumber > currentTokenNumber) {
    queueStatus.innerText="waiting"
}
else if (userTokenNumber === currentTokenNumber) {
    queueStatus.innerText="Now Serving"
    queueStatus.className = "badge bg-success fs-5 px-3 py-2";
}
else {
    queueStatus.innerText="completed"
    queueStatus.className = "badge bg-secondary fs-5 px-3 py-2";
}

document.getElementById("appointmentDoctor").innerText=appointment.doctor
document.getElementById("appointmentDepartment").innerText=appointment.department
document.getElementById("appointmentDate").innerText=appointment.date
document.getElementById("appointmentTime").innerText=appointment.time