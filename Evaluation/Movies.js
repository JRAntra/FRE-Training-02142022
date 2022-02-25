
function getList(){
    const baseUrl = "http://localhost:3000";
    const path = "movies";

    return fetch([baseUrl, path].join("/")).then((response) => response.json());
}


function render(start, end, movieList){
    let tmp = "";

    for(let i=start; i< end; i++){
        tmp += `
        <div id="slot">
            <div><img src="${movieList[i].imgUrl}" alt="Italian Trulli"></div>
            <div>${movieList[i].name}</div>
            <div>${movieList[i].outlineInfo}</div>
        </div>
        `;     
    }
    let word = document.querySelectorAll("movie_container");
    console.log(word);
    document.getElementById("movie_container").innerHTML = tmp;
}


getList().then((data) => {
    render(0,3,data);
});