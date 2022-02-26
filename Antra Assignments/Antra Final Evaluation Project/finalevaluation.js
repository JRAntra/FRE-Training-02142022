const url = "https://raw.githubusercontent.com/Show3567/json-server/master/db.json";

let mId = [];
let mImg = [];
let mName = [];
let mOutline = [];

function extractMovies(data) {
    for (let x = 0; x < data.length; x++){
        mId.push(data[x].id)
        mName.push(data[x].name);
        mImg.push(data[x].imgUrl);
        mOutline.push(data[x].outlineInfo);
    } 
}


function printMovies() {
    for (let a = 0; a < mImg.length; a++) {
        let newDiv = document.createElement("div");

        document.getElementById("movie__cont").appendChild(newDiv);
        newDiv.style.width = "100%";
        newDiv.style.margin = "0 auto";
        newDiv.style.padding= "0 1em";
        newDiv.setAttribute("id", "'" + mId[a] + "'");
        newDiv.innerHTML = "<img src=" + "'" + mImg[a] + "'" + ">" + "<p>" + mName[a] + "</p>" + "<p>" + mOutline[a] + "</p>";        
    }
}


const getMovies = () => {
    fetch(url)
        .then((response) => response.json())
        .then(data => {
            
             
            extractMovies(data.movies);
            printMovies();
        });
};

getMovies();

document.getElementById("previous").addEventListener("click", () => {
    document.getElementById("movie__cont").scrollLeft -= 500;
});

document.getElementById("next").addEventListener("click", () => {
    document.getElementById("movie__cont").scrollLeft += 500;
})




















