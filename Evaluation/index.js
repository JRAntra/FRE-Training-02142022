import { Api } from "./api.js";
// ~~~~~~~~~~~~~View~~~~~~~~~~~~~
const View = (() => {
    const domstr = {
        movielist: ".movie-container",
        leftbtn: ".lbtn",
        rightbtn: '.rbtn'
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
        #wholelist = [];

        get movielist() {
            return this.#movielist;
        }
        set movielist(newmovielist) {
            this.#movielist = newmovielist;

            const tmp = view.createTmp(this.#movielist);
            const ele = document.querySelector(view.domstr.movielist);
            view.render(ele, tmp);

        }

        get wholelist(){
            return this.#wholelist;
        }
        set wholelist(newwholelist) {
            this.#wholelist = newwholelist;
        }

    }

    const getMovies = api.getMovies;

    return {
        getMovies,
        State,
        Movie
    };
})(Api, View);
// ~~~~~~~~~~~~~Controller~~~~~~~~~~~~~

const Controller = ((model, view) => {
    let x = 0;
    let y = 4;
    const state = new model.State();

    const leftMovies = () => {
        const rightbtn = document.querySelector(view.domstr.rightbtn);
        const leftbtn = document.querySelector(view.domstr.leftbtn);
        leftbtn.addEventListener('click', event => {
            if (x >0){
                rightbtn.style.display = "initial";
                x--; y--;
                state.movielist = state.wholelist.slice(x,y);
                console.log(x);
            }
            if(x == 0){
                leftbtn.style.display = "none";
            } 
        });
    }

    

    const rightMovies = () => {
        const leftbtn = document.querySelector(view.domstr.leftbtn);
        const rightbtn = document.querySelector(view.domstr.rightbtn);
        rightbtn.addEventListener('click', event => {
            if (y < 9){
                leftbtn.style.display = "initial";
                x++; y++;   
                state.movielist = state.wholelist.slice(x,y);
            }
            if(y == 9){
                rightbtn.style.display = "none";
            }
        });
    }


    const init = () => {
        model.getMovies().then((movie) => {
            state.movielist = movie.slice(x,y);
            state.wholelist = movie;
            
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