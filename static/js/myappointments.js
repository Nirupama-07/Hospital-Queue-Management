const container = document.getElementById("appointmentContainer");

const patientName = localStorage.getItem("patientName");
const department = localStorage.getItem("department");
const doctor = localStorage.getItem("doctor");
const date = localStorage.getItem("date");
const time = localStorage.getItem("time");
const token = localStorage.getItem("token");

if (!token) {

    container.innerHTML = `
        <div class="alert alert-warning text-center">

            <h4>No Appointments Found</h4>

            <p>You haven't booked any appointment yet.</p>

            <a href="appointment.html" class="btn btn-primary">
                Book Appointment
            </a>

        </div>
    `;

} else {

    container.innerHTML = `

        <div class="card shadow border-0">

            <div class="card-header bg-primary text-white">

                <h4>Appointment Details</h4>

            </div>

            <div class="card-body">

                <p><strong>Token Number:</strong> ${token}</p>

                <p><strong>Patient Name:</strong> ${patientName}</p>

                <p><strong>Department:</strong> ${department}</p>

                <p><strong>Doctor:</strong> ${doctor}</p>

                <p><strong>Date:</strong> ${date}</p>

                <p><strong>Time:</strong> ${time}</p>

                <p>
                    <strong>Status:</strong>
                    <span class="badge bg-success">
                        Confirmed
                    </span>
                </p>

                <button class="btn btn-danger mt-3" id="cancelAppointment">
                    Cancel Appointment
                </button>

            </div>

        </div>

    `;

    document
        .getElementById("cancelAppointment")
        .addEventListener("click", function () {

            if (confirm("Are you sure you want to cancel this appointment?")) {

                localStorage.removeItem("patientName");
                localStorage.removeItem("department");
                localStorage.removeItem("doctor");
                localStorage.removeItem("date");
                localStorage.removeItem("time");
                localStorage.removeItem("token");

                alert("Appointment Cancelled Successfully.");

                location.reload();

            }

        });

}