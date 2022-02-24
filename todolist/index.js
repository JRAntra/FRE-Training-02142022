const Api = (() => {
    const baseUrl = "https://jsonplaceholder.typicode.com";
    const path = "todos";

    const getTodos = () =>
        fetch([baseUrl, path].join("/")).then((response) => response.json());

    const deleteTodo = (id) =>
        fetch([baseUrl, path, id].join("/"), {
            method: "DELETE",
        });

    return {
        getTodos,
        deleteTodo,
    };
})();

// ~~~~~~~~~~~~~View~~~~~~~~~~~~~
const View = (() => {
    const domstr = {
        todolist: ".todolist-container",
        deletbtn: ".deletebtn",
    };
    const render = (ele, tmp) => {
        ele.innerHTML = tmp;
    };
    const createTmp = (arr) => {
        let tmp = "";
        arr.forEach((todo) => {
            tmp += `
                <li>
                    <span>${todo.title}</span>
                    <button id="${todo.id}" class="deletebtn">X</button>
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

            // const deletebtns = document.querySelectorAll(view.domstr.deletbtn);
            // deletebtns.forEach((btn) => {
            //     btn.addEventListener("click", (event) => {
            //         this.todolist = this.#todolist.filter(
            //             (todo) => +todo.id !== +event.target.id
            //         );
            //     });
            // });
        }
    }

    const getTodos = api.getTodos;
    const deleteTodo = api.deleteTodo;

    return {
        getTodos,
        deleteTodo,
        State,
    };
})(Api, View);
// ~~~~~~~~~~~~~Controller~~~~~~~~~~~~~
const Controller = ((model, view) => {
    const state = new model.State();
    const todolist = document.querySelector(view.domstr.todolist);

    const deletTodo = () => {
        todolist.addEventListener("click", (event) => {
            state.todolist = state.todolist.filter(
                (todo) => +todo.id !== +event.target.id
            );
            model.deleteTodo(event.target.id);
        });
    };

    const init = () => {
        model.getTodos().then((todos) => {
            state.todolist = todos;
        });
    };

    const bootstrap = () => {
        init();
        deletTodo();
    };

    return { bootstrap };
})(Model, View);

Controller.bootstrap();
