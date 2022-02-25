
import { Api } from "./api.js";
// ~~~~~~~~~~~~~View~~~~~~~~~~~~~
const View = (() => {
    const domstr = {
        movielist: ".movie-container",
        leftbtn: ".button-left",
        rightbtn: '.button-right'
    };
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((movie) => {
            tmp += `
            <div class="movie-card">
                <image src="${movie.imgUrl}"></image>
                <h4>${movie.name}</h4>
                <p>${movie.outlineInfo}</p>
            </div>
            `;
        });
        return tmp;
    };

    return {
        domstr,
        render,
        createTmp,
    };
})();
// ~~~~~~~~~~~~~Model~~~~~~~~~~~~~
const Model = ((api, view) => {

    class Movie {
        constructor(name) {
            this.id = id,
            this.imgUrl = imgUrl,
            this.name = name,
            this.outlineInfo = outlineInfo
        }
    }
    class State {
        #movielist = [];

        get movielist() {
            return this.#movielist;
        }
        set movielist(newmovielist) {
            this.#movielist = newmovielist;

            const tmp = view.createTmp(this.#movielist);
            const ele = document.querySelector(view.domstr.movielist);
            view.render(ele, tmp);

        }
    }

    const getMovies = api.getMovies;
    const rightMovies = api.rightMovies;
    const leftMovies = api.leftMovies;

    return {
        getMovies,
        rightMovies,
        leftMovies,
        State,
        Movie
    };
})(Api, View);
// ~~~~~~~~~~~~~Controller~~~~~~~~~~~~~
let x = 0;
let y = 4;
const Controller = ((model, view) => {
    const state = new model.State();
    const movielist = document.querySelector(view.domstr.movielist);

    const leftMovies = () => {

        const leftbtn = document.querySelector(view.domstr.leftbtn);
        leftbtn.addEventListener('click', event => {
            if (x >0){
                model.getMovies().then((movie) => {
                    x -= 1;
                    y -= 1;
                    state.movielist = movie.slice(x,y);
                    console.log(state.movielist);
                });
            }
            else if(x == 0){
                document.getElementsById("btn").style.display = "none";
                //try to not show the btn at the most left position but have error
            }
            
        });
    }

    

    const rightMovies = () => {

        const rightbtn = document.querySelector(view.domstr.rightbtn);
        rightbtn.addEventListener('click', event => {
            if (y < 9){
                x += 1;
                y += 1;
                model.getMovies().then((movie) => {
                    state.movielist = movie.slice(x,y);
                    console.log(state.movielist);
                    console.log(x,y);
                });
            }
            if(y == 9){
                document.getElementsById("btn").style.display = "none";
                //try to not show the btn at the most right position but have error
            }
        });
    }


    const init = () => {
        model.getMovies().then((movie) => {
            state.movielist = movie.slice(x,y);
            console.log(state.movielist);
        });
    };

    const bootstrap = () => {
        init();
        leftMovies();
        rightMovies();
    };

    return { bootstrap };
})(Model, View);

Controller.bootstrap();