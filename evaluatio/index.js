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
const view = (() => {
    const domStr = {

        movieList: ".movielistContainer"
    };
    const render = (ele, tmp) => {
        ele.innerHTML = tmp
    };
    const createMovieTemp = (arr) => {
        let tmp = "";
        arr.forEach((movie) => {
            tmp += `
                <div>
                    <div>${movie.id}</div>    
                </div>
            `;
        });
        return tmp;
    };
    return {
        domStr
    };

})();
// ~~~~~~~~~~~~~Model~~~~~~~~~~~~~
const Model = ((api, view) => {
    class State {

        #movielist = [];

        get movielist() {
            return this.#movielist;
        }

        set movielist(newmovieList) {
            this.#movieList = newmovieList;

            const tmp = view.createMovieTemp(this.#movieList);
            const ele = document.querySelector(view.domstr.newtodolist);
            view.render(ele, tmp);

        }
    }

    const getMovie = api.getMovies;


    return {
        getMovie,
        State
    };
})(Api, view);
// ~~~~~~~~~~~~~Controller~~~~~~~~~~~~~
const Controller = ((model, view) => {

    const init = () => {
        model.getMovie.then((movies) => {
            state.todolist = movies;
        });
    };

    const bootstrap = () => {
        init();

    };

    return { bootstrap };
})(Model, view);

Controller.bootstrap();