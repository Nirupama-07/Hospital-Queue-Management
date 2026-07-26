//Departments
const departments=[
    {
        id:1,
        name:"❤️ Cardiology",
        image:"assets/images/cardiology2.jpg",
        description:"Expert treatment for heart-related diseases with modern diagnostic facilities.",
        page:"cardiology.html"
    },
    {
        id:2,
        name:"🧠 Neurology",
        image:"assets/images/neurology2.avif",
        description:"Diagnosis and treatment of brain, spine, and nervous system disorders..",
        page:"neurology.html"
    },
    {
        id:3,
        name:"🦴 Orthopedics",
        image:"assets/images/orthopedics2.jpg",
        description:"Comprehensive care for bones, joints, muscles, and sports injuries.",
        page:"orthopedics.html"
    },
    {
        id:4,
        name:"👶 Pediatrics",
        image:"assets/images/pediatrics2.jpeg",
        description:"Specialized healthcare for infants, children,and teenagers.",
        page:"pediatrics.html"
    },
    {
        id:5,
        name:"🌿 Dermatology",
        image:"assets/images/dermatology2.jpg",
        description:"Advanced skin, hair, and nail care with modern treatment options.",
        page:"dermatology.html"
    },
    {
        id:6,
        name:"🦷 Dentistry",
        image:"assets/images/dentistry2.jpg",
        description:"Complete dental care including cleaning, braces, implants, and cosmetic dentistry.",
        page:"dentistry.html"
    }
]
const departmentContainer=document.getElementById("departmentContainer")


departments.forEach((department,index)=>{
    setTimeout(()=>{
        departmentContainer.innerHTML+=`
        
    `
    },index*1000)
})

