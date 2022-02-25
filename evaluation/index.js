import { Api } from "api.js";

// ~~~~~~~~~~~~~View~~~~~~~~~~~~~
const View = (() => {
      const domstr = {
          pictureList: ".picture-Container",
          rightBtn: ".rightBtn",
          leftBtn: ".leftBtn"
      };

      const render = (ele, tmp) => {
            ele.innerHTML = tmp;
      };

      const createTmp = (arr) => {
          let tmp = "";
          arr.forEach((picture) => {
            tmp += `
                <li>
                <img  src="${picture.list}">
                </li>
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

    class Picture {
        constructor(title, name) {
            this.id = 2,
            this.imgUrl = title,
            this.name = name
        }
    }

    class State {
        #pictureList = [];

        get pictureList() {
            return this.#pictureList;
        }

        set pictureList(newPictureList) {
            this.#pictureList = newPictureList;

            const tmp = view.createTmp(this.#pictureList);
            const ele = document.querySelector(view.domstr.pictureList);
            view.render(ele, tmp);
        }
}

        const getPictures = api.getPictures;

})(Api, View);
// ~~~~~~~~~~~~~Controller~~~~~~~~~~~~~

const Controller = ((model, view) => {
    const state = new model.State();
    const pictureList = document.querySelector(view.domstr.pictureList);

    // const addPictures = () => {
    //     const pictureList = document.querySelector(view.domstr.pictureList);
    //     pictureList.addEventListener("click", (event) => {

    //     })
    // }

    const init = () => {
        model.getPictures().then((pictures) => {
            state.todolist = todos;
        });
    };

    const bootstrap = () => {
        init();
    };

  return {bootstrap};
})(Model, View);

Controller.bootstrap();