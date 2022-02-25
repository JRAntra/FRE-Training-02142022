  const Api = (() => {
    const baseUrl = "http://localhost:3000/movies/";
  
    const getTodos = () =>
        fetch(baseUrl)
          .then((response) => response.json())

    return {
        getTodos
    };
  })();

Api.getTodos;

//view

const View = (() => {
  const domstr = {
      todolist: ".container",
  };
  const render = (ele, tmp) => {
      ele.innerHTML = tmp;
  };


  const createTmp = (arr) => {
      let tmp = "";
      arr.forEach((todo) => {
          tmp += `
            <div class="mySlides">
              <img src="${todo.imgUrl}">
              <div>${todo.name}</div>
              <div>${todo.outlineInfo}</div>
            </div>
          `;
      });
      return tmp;
  };

//   const createTmp = (arr) => {
//     let tmp = "";
//     arr.forEach((todo) => {
//         tmp += `
//            <img src="${todo.imgUrl}">
//         `;
//     });
//     return tmp;
// };

  return {
      domstr,
      render,
      createTmp,
  };
})();


//model

const Model = ((api, view) => {

  class Todo {
      constructor(name) {
          this.imgUrl = "https://static-wmwm.warnermediacdn.com/styles/img_342_width/s3/2021-12/Untitled%20design%20%2821%29_2.png?itok=w_EnPK-m",
          this.name = name,
          this.outlineInfo = 'test'
      }
  }
  class State {
      #todolist = [];

      get todolist() {
          return this.#todolist;
      }
      set todolist(newtodolist) {
          this.#todolist = newtodolist;

          const tmp = view.createTmp(this.#todolist);
          const ele = document.querySelector(view.domstr.todolist);
          view.render(ele, tmp);
      }
  }

  const getTodos = api.getTodos;

  return {
      getTodos,
      State,
      Todo
  };
})(Api, View);


//controller

const Controller = ((model, view) => {
  const state = new model.State();
  const todolist = document.querySelector(view.domstr.todolist);

  const init = () => {
      model.getTodos().then((todos) => {
          state.todolist = todos;
      });
  };

  const bootstrap = () => {
      init();

  };

  return { bootstrap };
})(Model, View);

Controller.bootstrap();

///////////////////

