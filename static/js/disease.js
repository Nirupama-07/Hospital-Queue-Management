const department = document.body.dataset.department;

async function loadCardiology() {

    const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${department}`);

    const data = await response.json();

    document.getElementById("title").textContent = data.title;

    document.getElementById("description").textContent = data.extract;

    document.getElementById("departmentImage").src = data.thumbnail.source;

    document.getElementById("learnMore").href =
        data.content_urls.desktop.page;
}

loadCardiology();



const diseases={

    Cardiology:[
        "Coronary_artery_disease",
        "Heart_failure",
        "Cardiac_arrhythmia",
        "Cardiomyopathy",
        "Hypertension"
    ],

    Neurology: [
        "Stroke",
        "Epilepsy",
        "Parkinson's_disease",
        "Alzheimer's_disease",
        "Migraine"
    ],
    Orthopedics:[
        "Osteoarthritis",
        "Osteoporosis",
        "Bone_fracture",
        "Scoliosis",
        "Rheumatoid_arthritis",
        "Tendonitis"
    ],
    Pediatrics:[
        "Common_cold",
        "Asthma",
        "Chickenpox",
        "Measles",
        "Otitis_media",
        "Pneumonia"
    ],
    Dermatology:[
        "Acne",
        "Eczema",
        "Psoriasis",
        "Vitiligo",
        "Rosacea",
        "Skin_cancer"
    ],
    Dentistry: [
        "Halitosis",
        "Gingivitis",
        "Periodontitis",
        "Tooth_decay",
        "Tooth_abscess",
        "Malocclusion"
    ]
    
}

const diseaseContainer=document.getElementById("diseaseContainer")

async function displayDisease() {

    for(const disease of diseases[department]){
        const response=await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${disease}`)
        const result=await response.json()

       diseaseContainer.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100 shadow-sm">
                <img src="${result.thumbnail?.source || ''}" class="card-img-top">
                <div class="card-body">
                    <h5>${result.title}</h5>
                    <p>${result.extract}</p>
                </div>
            </div>
        </div>
        `;
    }
    
}
displayDisease()