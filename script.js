let movieNameSearched= document.getElementById("inp");
let btn= document.getElementById("btn");

async function movies(NameMovie){
    const apiKey = '5e04bb4e';
    const movieName = NameMovie;
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`;

    try {
        const fetchUrl = await fetch(url);
        const data = await fetchUrl.json();
        console.log(data);

    if (data.Response === "True") {
    document.getElementById("movieName").innerHTML=data.Title;
    document.getElementById("rating").innerHTML="⭐"+ data.imdbRating;
    document.getElementById("plot").innerHTML=data.Plot;
    document.getElementById("cast").innerHTML=data.Actors;
    document.getElementById("time").innerHTML=data.Runtime;
    document.getElementById("Year").innerHTML=data.Year;
    document.getElementById("Rated").innerHTML=data.Rated;
    document.getElementById("langs").innerHTML=data.Language;
    let img= document.getElementById("img");
    img.src=data.Poster;

      // Clear existing genres
    const genreContainer = document.querySelector('.genre');
    genreContainer.innerHTML = '';
      // Update genres
    const genres = data.Genre.split(', ');
    genres.forEach(genre => {
        const span = document.createElement('span');
          span.textContent = genre.trim(); // Update text content of each span
          span.classList.add('genre-span'); // Add a CSS class for styling
        genreContainer.appendChild(span);
    });
}   
else {
    alert("Movie not found!");
}
} catch (error) {
console.error("Error fetching data:", error);
}

document.getElementsByClassName("show")[0].classList.remove("hide")

};
// btn.addEventListener("click",()=>{
//     movies(movieNameSearched.value);
// });

btn.onclick = () => {
    movies(movieNameSearched.value);
}