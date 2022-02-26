but_status = {left_button:0, right_button:3};

function getList(){
    const baseUrl = "http://localhost:3000";
    const path = "movies";

    return fetch([baseUrl, path].join("/")).then((response) => response.json());
}


function render(start, end, movieList){
    let tmp = '';
    let id = "";

    if (but_status.left_button == 0){
        id = "hidden = hidden";
    }

    tmp = `<div class="button_sec"><button onclick = leftClick() type ="button" id = "left_button" ${id}><</button></div>`;

    id = "";
    for(let i=start; i< end; i++){
        tmp += `
        <div id="slot">
            <div><img src="${movieList[i].imgUrl}" alt="Italian Trulli"></div>
            <div>${movieList[i].name}</div>
            <div>${movieList[i].outlineInfo}</div>
        </div>
        `;     
    }

    if(but_status.right_button >= movieList.length-1){
        id = "hidden = hidden";
    }

    tmp += `<div class="button_sec"><button onclick = rightClick() type ="button" id = "right_button" ${id}>></button></div>`;

    document.getElementById("movie_container").innerHTML = tmp;
}

function rightClick(){
    getList().then((data) => {
        if(but_status.right_button + 1  < data.length){
            but_status.right_button += 1;
            but_status.left_button += 1;
            render(but_status.left_button, but_status.right_button, data);
        }
    });
}

function leftClick(){
    getList().then((data) => {
        if(but_status.left_button - 1  >= 0){
            but_status.right_button -= 1;
            but_status.left_button -= 1;
            render(but_status.left_button, but_status.right_button, data);
        }
    });
}


getList().then((data) => {
    render(0,3,data);
});

