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
let firstIndex = 0;

const View = (movies, firstIndex) => {
    
    
    if (firstIndex > movies.length-4) {
         firstIndex = movies.length-4;  
    } 
    let batch = movies.slice(firstIndex, firstIndex+4);
    console.log(batch);
    
    // template
    for (let i = 0; i < batch.length; i++) {
        let movieList = document.querySelector('.movies__container');
        let section = movieList.children.item(i);
        section.innerHTML = `
        <img src="${batch[i].imgUrl}" onerror="this.src='./img/No-image-found.jpg'" alt="${movies[i].name}">
        <h3>${batch[i].name}</h3>
        <p>${batch[i].outlineInfo}</p>
        `;
        console.log(section.innerHTML);
    }
        // Buttons show/hide
    let nextBtn = document.querySelector('.movies__next');
    let prevBtn = document.querySelector('.movies__prev');

     if (firstIndex === movies.length - 4) {
        nextBtn.style.display = 'none';
        prevBtn.style.display = '';
    } else if (firstIndex === 0) {
        nextBtn.style.display = '';
        prevBtn.style.display = 'none';
    } else {
        nextBtn.style.display = '';
        prevBtn.style.display = '';

    }
}

// // ~~~~~~~~~~~ View ~~~~~~~~~~~~~

// // const View = (movies, batchArr) => {  
    
// //     // Render page
// //     if (movies.length < 4) {
// //         // clean sections
// //         for (let j = 0; j < 4; j++) {
// //         let movieList = document.querySelector('.movies__container');
// //         let section = movieList.children.item(j);
// //         section.innerHTML = '';
// //         }


// //         for (let i = 0; i < movies.length; i++) {
// //             let movieList = document.querySelector('.movies__container');
// //             let section = movieList.children.item(i);
// //             section.innerHTML = `
// //             <img src="${movies[i].imgUrl}" onerror="this.src='./img/No-image-found.jpg'" alt="${movies[i].name}">
// //             <h3>${movies[i].name}</h3>
// //             <p>${movies[i].outlineInfo}</p>
// //             `;
// //         }
// //     } else {

// //         for (let i = 0; i < movies.length; i++) {
// //             let movieList = document.querySelector('.movies__container');
// //             let section = movieList.children.item(i);
// //             section.innerHTML = `
// //             <img src="${movies[i].imgUrl}" onerror="this.src='./img/No-image-found.jpg'" alt="${movies[i].name}">
// //             <h3>${movies[i].name}</h3>
// //             <p>${movies[i].outlineInfo}</p>
// //             `;
// //         }
// //     }

// //     // Buttons show/hide
// //     let nextBtn = document.querySelector('.movies__next');
// //     let prevBtn = document.querySelector('.movies__prev');

// //      if (currentBatch === batchArr.length - 1) {
// //         nextBtn.style.display = 'none';
// //         prevBtn.style.display = 'block';
// //     } else if (currentBatch === 0) {
// //         nextBtn.style.display = 'block';
// //         prevBtn.style.display = 'none';
// //     } else {
// //         nextBtn.style.display = 'block';
// //         prevBtn.style.display = 'block';

// //     }

// //     /* plan:
// //     1. the whole array of movies
// //     2. use split (i, i+4)
// //     - start index

// //     */
// // };

// // ~~~~~~~~~~~ Controller ~~~~~~~~~~~

const Controller = () => {
    let nextBtn = document.querySelector('.movies__next');
    let prevBtn = document.querySelector('.movies__prev');


    nextBtn.addEventListener('click', () => {
        firstIndex++;
        View(movies, firstIndex);
   
    });
    prevBtn.addEventListener('click', () => {
        firstIndex--;
        View(movies, firstIndex);
    });
}
Controller();
View(movies, firstIndex);
// View(batchArr[currentBatch]);

