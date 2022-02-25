const url = "https://raw.githubusercontent.com/Show3567/json-server/master/db.json";



const getMovies = () => {
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            
            extractMovies(data.movies);
            
            
        });
};

const img = [];
let movieName = [];
const outline = [];


function extractMovies (movie) {

    for (let x = 0; x < movie.length; x++){
        
        img.push(movie[x].imgUrl);
        movieName.push(movie[x].name);
        outline.push(movie[x].outlineInfo);
    }
    
}

const printMovieDirectory = () =>{
    for (let a = 0; a < movieName.length; a++){
        document.getElementsByClassName("movie__box").innerHTML="hello";
    }
}



document.getElementsByClassName("movie_box").innerHTML = "hello";







