const Api = (() => {
  const baseUrl = "http://localhost:3000";

  const path = "movies";

  const getMovies = () =>
    fetch([baseUrl, path].join("/")).then((response) => response.json());

  return {
    getMovies,
  };
})();

// ~~~~~~~~~~~~~View~~~~~~~~~~~~~
const View = (() => {
  const domstr = {
    movie: ".carousel_box",
   
  };
  const render = (ele, tmp) => {
    ele.innerHTML = tmp;
  };
  const createTmp = (arr) => {
    let tmp = "";
    arr.forEach((movie) => {
      tmp += `
      <div class="movie">
              
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

//~~~~~~~~model~~~~~~~~~~~~~~~~~~~~

const Model = ((api, view) => {
  class Movie {
    constructor(name) {
      (this.userId = 2), (this.name = name)
    }
  }
  class State {
    #movie = [];

    get movie() {
      return this.#movie;
    }
    set movie(newMovie) {
      this.#movie = newMovie;

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


