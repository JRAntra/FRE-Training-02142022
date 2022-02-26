// ~~~~~~~~~Fetch~~~~~~~~~~ 

// Fetch from json-server
async function Api() {
    const URL = 'http://localhost:3000/movies'
    let response = await fetch(URL);
    let data = await response.json();
    return data;
}


// fake DB with movies information
let movies = await Api();

//~~~~~~~~~ Model ~~~~~~~~~~
const Model = () => {

    // Divide movies into batch of 4 movies
    let batchArr = [];
    let batch = [];
    
    movies.forEach((movie, index) => {
        // divide movies into 4 each
        if (index !== 0 && index % 4 === 0) {
            batchArr.push(batch);
            batch = [];
        } 
        
        batch.push(movie);

        if (index === movies.length - 1) {
            batchArr.push(batch);
        }
    });
    return batchArr;
}

let batchArr = Model(movies);
// shows a batch number of a current page.
let currentBatch = 0;

// ~~~~~~~~~~~ View ~~~~~~~~~~~~~

const View = (movies, batchArr) => {  
    
    // Render page
    if (movies.length < 4) {
        // clean sections
        for (let j = 0; j < 4; j++) {
        let movieList = document.querySelector('.movies__container');
        let section = movieList.children.item(j);
        section.innerHTML = '';
        }


        for (let i = 0; i < movies.length; i++) {
            let movieList = document.querySelector('.movies__container');
            let section = movieList.children.item(i);
            section.innerHTML = `
            <img src="${movies[i].imgUrl}" onerror="this.src='./img/No-image-found.jpg'" alt="${movies[i].name}">
            <h3>${movies[i].name}</h3>
            <p>${movies[i].outlineInfo}</p>
            `;
        }
    } else {

        for (let i = 0; i < movies.length; i++) {
            let movieList = document.querySelector('.movies__container');
            let section = movieList.children.item(i);
            section.innerHTML = `
            <img src="${movies[i].imgUrl}" onerror="this.src='./img/No-image-found.jpg'" alt="${movies[i].name}">
            <h3>${movies[i].name}</h3>
            <p>${movies[i].outlineInfo}</p>
            `;
        }
    }

    // Buttons show/hide
    let nextBtn = document.querySelector('.movies__next');
    let prevBtn = document.querySelector('.movies__prev');

     if (currentBatch === batchArr.length - 1) {
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'block';
    } else if (currentBatch === 0) {
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
        prevBtn.style.display = 'block';

    }
};

// ~~~~~~~~~~~ Controller ~~~~~~~~~~~

const Controller = () => {
    let nextBtn = document.querySelector('.movies__next');
    let prevBtn = document.querySelector('.movies__prev');


    nextBtn.addEventListener('click', () => {
        currentBatch++;
        View(batchArr[currentBatch]);

    });
    prevBtn.addEventListener('click', () => {
        currentBatch--;
        View(batchArr[currentBatch]);
    });
}
Controller();

View(batchArr[currentBatch]);

