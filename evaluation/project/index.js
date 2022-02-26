import { Api } from "./api.js";

// ~~~~~~~~~~~~~View~~~~~~~~~~~~~
const View = (() => {
      const domstr = {
          pictureList: ".picture-container",
          rightBtn: ".right-Btn",
          leftBtn: ".left-Btn"
      };

      const render = (ele, tmp) => {
            ele.innerHTML = tmp;
      };

      const createTmp = (arr) => {
          let tmp = "";
          arr.forEach((picture) => {
              console.log(picture);
            tmp += `
                <li>
                <img  src="${picture.imgUrl}">
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
        #leftNumber = 0;
        #rightNumber = 5;

        get pictureList() {
            return this.#pictureList;
        }

        get leftNumber(){
            return this.#leftNumber
        }

        get rightNumber(){
            return this.#rightNumber
        }

        set leftNumber(num) {
            this.#leftNumber = num 
        }

        set rightNumber(num) {
            this.#rightNumber = num 
        }


        set pictureList(newPictureList) {
            this.#pictureList = newPictureList;

            if(this.#pictureList.length-1 == this.#rightNumber){
                document.getElementsByClassName("right-Btn")[0].style.display="none";
            } else {
                document.getElementsByClassName("right-Btn")[0].style.display="flex";
            }

            if(this.#leftNumber == 0){
                document.getElementsByClassName("left-Btn")[0].style.display="none";
            } else {
                document.getElementsByClassName("left-Btn")[0].style.display="flex";
            }
            
            this.#pictureList = this.#pictureList.filter(
                (picture) => +picture.id < this.#rightNumber && +picture.id > this.#leftNumber
                
                
             );

            const tmp = view.createTmp(this.#pictureList);
            const ele = document.querySelector(view.domstr.pictureList);
            
            view.render(ele, tmp);

            
        }
}

        const getPictures = api.getPictures;

        return {
            getPictures,
            State
        };

})(Api, View);
// ~~~~~~~~~~~~~Controller~~~~~~~~~~~~~

const Controller = ((model, view) => {
    const state = new model.State();
    const pictureList = document.querySelector(view.domstr.pictureList);
    const leftBtn = document.querySelector(view.domstr.leftBtn);
    const rightBtn = document.querySelector(view.domstr.rightBtn);

    const clickRight = () => {
        rightBtn.addEventListener("click", (event) => {
            state.rightNumber ++ ;
            state.leftNumber ++ ;
            model.getPictures().then((pictures) => {
                state.pictureList = pictures;
            });
        });
    };

    const clickLeft = () => {
        leftBtn.addEventListener("click", (event) => {
            state.leftNumber -- ;
            state.rightNumber -- ;
            model.getPictures().then((pictures) => {
                state.pictureList = pictures;
            });
        });
    };

   

    const init = () => {
        model.getPictures().then((pictures) => {
            state.pictureList = pictures;
        });
    };

    const bootstrap = () => {
        init();
        clickLeft();
        clickRight();
    };

  return {bootstrap};
})(Model, View);

Controller.bootstrap();

