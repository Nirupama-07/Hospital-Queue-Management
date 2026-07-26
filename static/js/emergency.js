const reportContainer = document.getElementById("reportContainer");

const reports = JSON.parse(localStorage.getItem("medicalReports")) || [];

if (reports.length === 0) {

    reportContainer.innerHTML = `
        <div class="alert alert-warning text-center">

            <h4>No Emergency Contacts Available</h4>

            <p>Your Emergency Contacts will appear here after consultation.</p>

            <img src="https://cdn-icons-png.flaticon.com/512/2966/2966488.png"
                 width="120"
                 class="my-3">

            <br>

            <a href="appointment.html" class="btn btn-primary">
                Book an Appointment
            </a>

        </div>
    `;

} else {

    let html = "";

    reports.forEach((report, index) => {

        html += `
            <div class="card shadow mb-4">

                <div class="card-body">

                    <h5>${report.title}</h5>

                    <p><strong>Doctor:</strong> ${report.doctor}</p>

                    <p><strong>Date:</strong> ${report.date}</p>

                    <p><strong>Status:</strong>
                        <span class="badge bg-success">
                            Available
                        </span>
                    </p>

                    <button class="btn btn-outline-primary">
                        Download Report
                    </button>

                </div>

            </div>
        `;

    });

    reportContainer.innerHTML = html;
}