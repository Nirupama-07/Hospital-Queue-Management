
//counter
function counter(id,end,speed,symbol="+"){
    let count=0

    const element=document.getElementById(id);

    const interval=setInterval(()=>{
        count++;

        element.textContent=count + symbol

        if(count>=end){
            clearInterval(interval)
        }
    },speed)
}

counter("doctorCount",50,40);
counter("patientCount",1000,1);
counter("experienceCount",25,80);




const newsContainer=document.getElementById("newsContainer")
const loader=document.getElementById("loader")
const API_KEY="WAaO1nlmno5QHMay2w77r1tf4w77Jl5GsYUjXtMDitgFYHOT";

loader.style.display = "block";

fetch(`https://api.currentsapi.services/v1/latest-news?language=en&category=health&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        if (!data.news) {
            newsContainer.innerHTML = `
                <div class="col-12 text-center">
                    <h4>No news available.</h4>
                </div>
            `;
            return;
        }

        newsContainer.innerHTML = "";

        data.news.slice(0, 9).forEach(news => {

            const imageUrl =
        news.image &&
        news.image !== "None" &&
        news.image !== "null"
            ? news.image
            : "./assets/images/placeholder.jpg";

            newsContainer.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow">

                    <img src="${imageUrl}" class="card-img-top h-[250px]" alt="News Image">

                    <div class="card-body">
                        <h5>${news.title}</h5>

                        <p>${news.description || "No description available."}</p>

                        <a href="${news.url}"
                           target="_blank"
                           class="btn btn-primary">
                           Read More
                        </a>
                    </div>

                </div>
            </div>
            `;
        });

    })
    .catch(error => {
        console.error(error);

        newsContainer.innerHTML = `
            <div class="col-12 text-center text-danger">
                Failed to load latest health news.
            </div>
        `;
    })
    .finally(() => {
        loader.style.display = "none";
    });