// ~~~~~~~~~~~~ API fetch ~~~~~~~~~~~~
// Fetch to-do list from API
async function Api() {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    let data = await response.json();
    return data;
}

// ~~~~~~~~~~~~~Controller~~~~~~~~~~~~~

// data is retrieved from API; It is an array of to-do list items
let data = await Api(); // fake DB


// // ~~~~~~~~~~~~~View~~~~~~~~~~~~~
// const View = (data) => {
//     // Form - prevent default
//     function removeDefault(event) {
//         // enter does not refresh
//         event.preventDefault();
//     }

//     const todolistForm = document.querySelector('.todolist__form');
//     todolistForm.addEventListener("submit", removeDefault);

//     // Form - submit
//     function handletoDoSubmit(event) { 
//         const todolistInput = document.querySelector('.todolist__input');
//         render(todolistInput.value);
//         todolistInput.value = '';
//     };

//     // Form - button to submit
//     const todolistButton = document.querySelector('.todolist__button');
//     todolistButton.addEventListener("click", handletoDoSubmit);
    
//     // Form - input - enter to submit
//     const todolistInput = document.querySelector('.todolist__input');
//     todolistInput.addEventListener("keyup", ({key}) => {
//         if (key === "Enter") {
//             handletoDoSubmit();
//         }
//     })

//     // render to-do list to DOM
//     const render = (todo) =>{
//         // create HTML elements
//         const todoList = document.createElement('li');
//         // const todoId = document.createElement('span');
//         const titleSpan = document.createElement('span');
//         const deleteButton = document.createElement('button');

//         // Put data into HTML elements.
//         // todoId.innerText = todo.id;
//         if (todo.title) {
//         titleSpan.innerText = todo.title; //data.title;
//         deleteButton.innerText = 'Done';
//         } else {
//         titleSpan.innerText = todo;
//         deleteButton.innerText = 'Done';
//         }
//         // Add event listener to delete button.
//         deleteButton.addEventListener('click',(event) => {
//             const li = event.target.parentElement;
//             console.log(li.todoId);
//             li.remove();
//         });

//         // Append HTML elements to DOM.
//         // todoList.appendChild(todoId);
//         todoList.appendChild(titleSpan);
//         todoList.appendChild(deleteButton);
//         if (todo.title) {
//         document.querySelector('.todolist__container').appendChild(todoList);
//         } else {
//         document.querySelector('.todolist__container').prepend(todoList);
        
//         }
//         };

//     // render to-do list to DOM
//     data.forEach(todo => {
//         render(todo);
//     })
// }
// View(data);


// ~~~~~~~~~~~~~~~Controller ~~~~~~~~~~~
const Controller = (()=>{
    // Add event listener to delete button.
    
    const deleteButtonEvent = (htmltag) => {
        htmltag.addEventListener('click',(event) => {
            const li = event.target.parentElement;
            console.log(li.todoId);
            li.remove();
        });
    };
})();

const View = ((data, controller) => {
    const render = (todo) =>{
        // create HTML elements
        const todoList = document.createElement('li');
        // const todoId = document.createElement('span');
        const titleSpan = document.createElement('span');
        const deleteButton = document.createElement('button');

        // Put data into HTML elements.
        // todoId.innerText = todo.id;
        if (todo.title) {
        titleSpan.innerText = todo.title; //data.title;
        deleteButton.innerText = 'Done';
        } else {
        titleSpan.innerText = todo;
        deleteButton.innerText = 'Done';
        }

        // Add event listners
        controller.deleteButtonEvent(deleteButton);

        // Append HTML elements to DOM.
        // todoList.appendChild(todoId);
        todoList.appendChild(titleSpan);
        todoList.appendChild(deleteButton);
        if (todo.title) {
        document.querySelector('.todolist__container').appendChild(todoList);
        } else {
        document.querySelector('.todolist__container').prepend(todoList);
        
        }
    };
    // render to-do list to DOM
    data.forEach(todo => {
        render(todo);
    })
})(data, Controller);

const test2 = (() => {
    const value2 = "heyheyhey";
    return {
        value2
    }
})();

const test = ((test2) => {
    const value = "hhh";
    const render = () => {
        console.log("rendered");
        console.log(test2.value2);
    }
    return {
        render,
        value
    }

})(test2);

console.log(test.render());