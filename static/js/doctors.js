const doctors = [
    {
        name: "Dr. Priya Sharma",
        specialization: "Cardiologist",
        experience: "12 Years",
        image: "assets/images/doctor1.avif",
        fee: "₹800",
        page: "appointment.html"
    },
    {
        name: "Dr. Rahul Verma",
        specialization: "Neurologist",
        experience: "15 Years",
        image: "assets/images/doctor5.jpg",
        fee: "₹1000",
        page: "appointment.html"
    },
    {
        name: "Dr. Sneha Patel",
        specialization: "Dermatologist",
        experience: "10 Years",
        image: "assets/images/doctor2.jpg",
        fee: "₹700",
        page: "appointment.html"
    },
    {
        name: "Dr. Amit Das",
        specialization: "Dentist",
        experience: "8 Years",
        image: "assets/images/doctor6.jpg",
        fee: "₹500",
        page: "appointment.html"
    },
    {
        name: "Dr. Neha Singh",
        specialization: "Pediatrician",
        experience: "11 Years",
        image: "assets/images/doctor3.avif",
        fee: "₹650",
        page: "appointment.html"
    },
    {
        name: "Dr. Arjun Rao",
        specialization: "Orthopedic",
        experience: "13 Years",
        image: "assets/images/doctor4.jpg",
        fee: "₹900",
        page: "appointment.html"
    }
];

const doctorContainer = document.getElementById("doctorContainer");

function displayDoctors(data) {

    doctorContainer.innerHTML = "";

    data.forEach(doctor => {

        doctorContainer.innerHTML += `
            <div class="col-md-6 col-lg-4 doctor-card">

                <div class="card shadow border-0 h-100">

                    <img src="${doctor.image}" class="card-img-top">

                    <div class="card-body">

                        <h4>${doctor.name}</h4>

                        <p class="text-primary fw-semibold">${doctor.specialization}</p>

                        <p><i class="fa-solid fa-briefcase"></i> ${doctor.experience}</p>

                        <p><i class="fa-solid fa-indian-rupee-sign"></i> Consultation Fee: ${doctor.fee}</p>

                        <a href=${doctor.page}>
                            <button class="btn btn-primary button w-100">
                                Book Appointment
                            </button>
                        </a>

                    </div>

                </div>

            </div>
        `;

    });

}

displayDoctors(doctors);

const search = document.getElementById("doctorSearch");


search.addEventListener("input", () => {

    const value = search.value.toLowerCase();

    const filtered = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(value) ||
        doctor.specialization.toLowerCase().includes(value)
    );

    if (filtered.length === 0) {
        doctorContainer.innerHTML = `
            
            <div class="col-12 text-center py-5">
                <i class="bi bi-search fs-1 text-secondary"></i>
                <h3 class="mt-3">No Results Found</h3>
                <p class="text-muted">
                    We couldn't find any doctor matching your search.
                </p>
            </div>
        `;

    } else {
        displayDoctors(filtered);
    }

});