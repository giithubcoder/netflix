//api key from tmdb

const api="api_key=e9467c170554366642cd657580b152cf";

//base url of the website

const base_url="https://api.themoviedb.org/3";

const banner_url="https://image.tmdb.org/t/p/original";
const image_url="https://image.tmdb.org/t/p/w300";

//requests for movies data
const requests={

    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixorginals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionmovies:`${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies:`${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrormovies:`${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomancemovies:`${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentries:`${base_url}/discover/movie?${api}&with_genres=99`,
};

//used the truncate the string

function truncate(str, n){
    return str?.length > n ? str.substr(0,n-1)+"...": str;
}

//banner

fetch(requests.fetchNetflixorginals)
 .then((res)=> res.json())
 .then((data)=>{
    console.log(data.results);
    //every refresh the movie will change

    const setmovie =
     data.results[Math.floor(Math.random()*data.results.length-1)];

     var banner=document.getElementById("banner");
     var banner_title=document.getElementById("banner_title");
     var banner_desc=document.getElementById("banner_description");

     banner.style.backgroundImage = "url("+ banner_url + setmovie.backdrop_path+")";
     banner_desc.innerText = truncate(setmovie.overview, 150);
     banner_title.innerText = setmovie.name;
 })

 //movies row

 fetch(requests.fetchNetflixorginals)
  .then((data)=> res.json())

  .then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className="row";
    row.classList.add("netflixrow");

    headrow.appendChild(row);

    const title = document.createElement("h2");

    title.className="row_title";
    title.innerText="NETFLIX ORIGINALS";

    row.appendchild(title);

    const row_posters=document.createElement("div");
    row_posters.className = "row_posters";
    row.appendchild(row_posters);

    data.results.forEach((movie)=>{
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";

        var s = movie.name.replace(/\s+/g,"");

        poster.id = s;
        poster.src = image_url + movie.poster_path;
        row_posters.appendChild(poster);
    });

  });

  //top rated
  fetch(requests.fetchTrending)
   .then((res)=>res.json())

   .then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className="row_title";
    title.innerText="Top Rated";
    row.appendchild(title);
    const row_posters = document.createElement("div");
    row_posters.className="row_posters";
    row.appendchild(row_posters);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_posterLarge";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = image_url + movie.poster_path;
        row_posters.appendChild(poster);
    });
   });

   //action
   fetch(requests.fetchActionmovies)
   .then((res)=>res.json())
   .then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendchild(row);
    const title = document.createElement("h2");
    title.innerText = "Action Movies";
    row.appendchild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = image_url + movie.backdrop_path;
        row_posters.appendChild(poster);
    })
   })

   //comedy
   fetch(requests.fetchComedyMovies)
   .then((res)=>res.json())
   .then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className="row"
    headrow.appendchild(row);
    const title = document.createElement("h2")
    title.className = "row_title";
    title.innerText = "Comedy movies";
    row.appendchild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach((movie) =>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.id = s2;
        poster.src = image_url+movie.backdrop_path;
        row_posters.appendChild(poster);
    })
   })

   //horror
   fetch(requests.fetchHorrormovies)
   .then((res) => res.json())
   .then((data) => {
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Horror Movies";
    row.appendChild(title);
    const row_poster = document.createElement("div");
    row_poster.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = image_url+movie.backdrop_path;
        row_poster.appendChild(poster);

    })
   })

   //romance
   fetch(requests.fetchRomancemovies)
   .then((res) => res.join())
   .then((data)=>{
    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");
    row.className = "row";
    headrow.appendChild(row);
    
    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "Romance Movies";
    row.appendChild(title);
    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);
    data.results.forEach((movie)=>{
        console.log(movie);
        const poster = document.createElement("img");
        poster.className = "row_poster";
        var s2 = movie.id;
        poster.id = s2;
        poster.src = image_url+movie.backdrop_path;
        row_posters.appendchild(poster);
        
    })
   })
   
