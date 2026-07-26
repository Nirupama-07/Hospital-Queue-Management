const container = document.getElementById("upcomingContainer");

const patientName = localStorage.getItem("patientName");
const department = localStorage.getItem("department");
const doctor = localStorage.getItem("doctor");
const date = localStorage.getItem("date");
const time = localStorage.getItem("time");
const token = localStorage.getItem("token");

if (!token) {

    container.innerHTML = `
        <div class="alert alert-warning text-center">

            <h4>No Upcoming Appointment</h4>

            <p>You haven't booked any appointment yet.</p>

            <a href="appointment.html" class="btn btn-primary">
                Book Appointment
            </a>

        </div>
    `;

} else {

    container.innerHTML = `
        <div class="card shadow-lg border-0">

            <div class="card-header bg-success text-white">
                <h4 class="mb-0">Your Upcoming Appointment</h4>
            </div>

            <div class="card-body">

                <div class="row">

                    <div class="col-md-6">

                        <p><strong>Patient Name:</strong> ${patientName}</p>

                        <p><strong>Department:</strong> ${department}</p>

                        <p><strong>Doctor:</strong> ${doctor}</p>

                    </div>

                    <div class="col-md-6">

                        <p><strong>Appointment Date:</strong> ${date}</p>

                        <p><strong>Time:</strong> ${time}</p>

                        <p><strong>Token Number:</strong> ${token}</p>

                    </div>

                </div>

                <hr>

                <div class="alert alert-info mb-0">
                    📅 Please arrive at least <strong>15 minutes before</strong> your scheduled appointment.
                </div>

            </div>

        </div>
    `;
}