const Api = (() => {
    const baseUrl = "http://localhost:3000";
    const path = "movies";

    const getMovies = () =>
        fetch([baseUrl, path].join("/")).then((response) => response.json());

    return {
        getMovies
    };
})();

// ~~~~~~~~~~~~~View~~~~~~~~~~~~~
const View = (() => {
    const domstr = {
        movie: ".movie__carousel"
    };
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((movie) => {
            tmp += `
                <div>
                    <img src="${movie.imgUrl}"}/>
                    <p>${movie.name}</p>
                    <p>${movie.outlineInfo}</p>
                </div>
            `;
        });
        return tmp;
    };

    return {
        domstr,
        render,
        createTmp
    };
})();

// ~~~~~~~~~~~~~Model~~~~~~~~~~~~~
const Model = ((api, view) => {

    class Movie {
        constructor(name) {
            this.id = 2,
            this.name = name
        }
    }
    class State {
        #movie = [];

        get movie() {
            return this.#movie;
        }
        set movie(newmovie) {
            this.#movie = newmovie;

            const tmp = view.createTmp(this.#movie);
            const ele = document.querySelector(view.domstr.movie);
            view.render(ele, tmp);
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
    const state = new model.State();
    const movie = document.querySelector(view.domstr.movie);

    const init = () => {
        model.getMovies().then((movies) => {
            state.movie = movies;
        });
    };

    const bootstrap = () => {
        init();
    };

    return { bootstrap };
})(Model, View);

Controller.bootstrap();

var movieCarousel = document.getElementById("movie__right--left");
var movie = movieCarousel.getElementsByClassName("movie");
  
const next = (() => {
    movieCarousel.append(movie[0]);
})();