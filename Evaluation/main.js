const View = (()=>{

    const documentStrings = {
        movieArea : ".movieArea",
        movieAreaCard: ".movieArea-card",
        leftbtnArea:"buttonarealeft",
        rightbtnArea:"buttonarearight",
        leftbtn: ".buttonArealeft-btn",
        rightbtn:".buttonArearight-btn"
    }

    const createInnerHTML = (arr)=>{
        let innerHTMLArr = [];
        arr.forEach(element => {
            innerHTMLArr.push(`<div class="movieArea-card">
            <div class="movieArea-card_image">
                <img src="${element.imgUrl}" alt="">
                <div class="movieArea-card_text">
                    <p>Movie:${element.name}</p>
                    <p>info:${element.outlineInfo}</p>
                </div>
            </div>
        </div>`)
        });
        console.log(innerHTMLArr)
        return innerHTMLArr;
    }

    const render = (arr,currentStart)=>{
        let innerHTMLString = ``;
        let innerHTMLArr = createInnerHTML(arr);
        for(let i=currentStart;i<currentStart+4;i++)
        {
            innerHTMLString += innerHTMLArr[i];
        }
        const movieArea = document.querySelector(documentStrings.movieArea);
        movieArea.innerHTML = innerHTMLString;
    }

    const hideleftbtn =()=>{
        const btnarea = document.getElementById('buttonArearight-btn_left');
        btnarea.style.visibility ='hidden';
    }

    const hiderightbtn =()=>{
        const btnarea = document.getElementById('buttonArearight-btn_right')
        btnarea.style.visibility ='hidden';
    }

    const showleftbtn =()=>{
        const btnarea = document.getElementById('buttonArearight-btn_left')
        btnarea.style.visibility ='visible';
    }

    const showrightbtn =()=>{
        const btnarea = document.getElementById('buttonArearight-btn_right')
        btnarea.style.visibility ='visible';
    }

    return{
        documentStrings,
        createInnerHTML,
        render,
        hideleftbtn,
        hiderightbtn,
        showrightbtn,
        showleftbtn
    }
})();




const Model = ((view)=>{
    class State{
        #currentStart = 0;
        #movieList = [];


        get currentStart(){
            return this.#currentStart;
        }

        set currentStart(num){
            this.#currentStart = num;
        }

        get movieList(){
            return this.#movieList
        }

        set movieList(newmovielist){
            this.#movieList = newmovielist;
            view.render(this.#movieList,this.#currentStart);
            view.hideleftbtn();
        }

        toLeft(){
            if(this.#currentStart>0)
            {
                this.#currentStart = this.#currentStart-1;
                view.render(this.#movieList, this.#currentStart);
                if((this.#currentStart + 4)<this.#movieList.length)
                {
                    view.showrightbtn();
                }
                if(this.#currentStart==0)
                {
                view.hideleftbtn();
                }
            }

            else {
                console.log("Index at 0, no more movie in left")
                view.hideleftbtn();
            }
            console.log(this.#currentStart);
        }

        toRight(){
            if((this.#currentStart + 4)<this.#movieList.length)
            {
                this.#currentStart += 1;
                view.render(this.#movieList, this.#currentStart);
                if(this.#currentStart>0)
                {
                    view.showleftbtn();
                }
            }
            else{
                console.log(`Right Index at ${this.#movieList.length}, no more movie in right`)
                view.hiderightbtn();
            } 
        }
    }


    const getmovies =()=>fetch('http://localhost:3000/movies')
                    .then(response => response.json());

    return{
        getmovies,
        State
    }
})(View);

const Controller = ((model,view)=>{

    const state = new model.State();

    const leftbutton = document.querySelector(view.documentStrings.leftbtn);
    const rightbutton = document.querySelector(view.documentStrings.rightbtn);

    const init = () => {
        model.getmovies().then((movies)=>{
            state.currentStart = 0;
            state.movieList = movies;
        });
    };

    const goleft = ()=>{
        state.toLeft();
    };

    const goright = ()=>{
        state.toRight();
    }

    const startListen =()=>{
        leftbutton.addEventListener('click', goleft);
        rightbutton.addEventListener('click', goright);
    }



    const bootstrap = () => {
        init();
        startListen()
    };

    return { 
        bootstrap
     }
})(Model,View);

Controller.bootstrap();
