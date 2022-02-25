
// const Api = (() => {
//   const baseUrl = "http://localhost:3000/posts";

//   const path = "movies";

//   const getMovies = () =>
//     fetch([baseUrl, path].join("/")).then((response) => response.json());

//   return {
//     getMovies,
//   };
// })();

// // ~~~~~~~~~~~~~View~~~~~~~~~~~~~
// const View = (() => {
//   const domstr = {
//     movieList: ".carousel_box",
   
//   };
//   const render = (ele, tmp) => {
//     ele.innerHTML = tmp;
//   };
//   const createTmp = (arr) => {
//     let tmp = "";
//     arr.forEach((movie) => {
//       tmp += `
//       "id": 1,
//       "imgUrl": "https://static-wmwm.warnermediacdn.com/styles/img_342_width/s3/2021-12/Untitled%20design%20%2821%29_2.png?itok=w_EnPK-m",
//       "name": "All Elite Wrestling: Rampage",
//       "outlineInfo": "New episode Friday at 10 p.m. ET on TNT"    
//             `;
//     });
//     return tmp;
//   };

//   return {
//     domstr,
//     render,
//     createTmp,
//   };
// })();

// const Model = ((api, view) => {
//   class Todo {
//     constructor(title) {
//       (this.userId = 2), (this.title = title), (this.completed = false);
//     }
//   }
//   class State {
//     #movieList = [];

//     get movieList() {
//       return this.#movieList;
//     }
//     set movieList(newtodolist) {
//       this.#todolist = newtodolist;

//       const tmp = view.createTmp(this.#movieList);
//       const ele = document.querySelector(view.domstr.movieList);
//       view.render(ele, tmp);
    
//       const getMovies = api.getMovies;

//       return {
//         getMovies,
        
//       };
//     })(Api, View);

//     // ~~~~~~~~~~~~~Controller~~~~~~~~~~~~~
//     const Controller = ((model, view) => {
//       const state = new model.State();
//       const movieList = document.querySelector(view.domstr.movieList);
    
//         });
      
    
    
    
//       const init = () => {
//         model.getMovies().then((movies) => {
//           state.movieList = movies;
//         });
//       };
    
//       const bootstrap = () => {
//         init();
        
//       };
    
//       return { bootstrap };
//     })(Model, View);
    
//     Controller.bootstrap();

//   }