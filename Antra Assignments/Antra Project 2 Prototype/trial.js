/*
let url = 'https://jsonplaceholder.typicode.com/todos';


fetch(url).then((response) => {
     console.log(response.json())
}); */

 

/*//blocks are the curly braces {}

let string = "bye";
console.log(string);

{
    //this is a block
    let string = "hi there";
    console.log(string);
}

{
    let string = "hello world";
    console.log(string);
}

console.log(string);

//these are block scopes, and let only works in block scope
//IIFE (Immediately Invoked Function Expression)

const name = ((name) => {
    return ('joel garcia');
})(); 

console.log(name);

--> this is a syntax of an imediately invoke function. the double parenthesis signifies the call of the function which comes after the function declaration and its arguments.

//String in ES2020 match() matchALL()

const str = "hi hithere hitherethere hitheretherethere";
for (const match of str.match("hi")) console.log(match);*/

/*
function myString (main, match){
    console.log(main.match(match));
};



(function(){
    myString ("hello", "hello");
})(); 
*/

//Arrow Functions

const simpleFunction = function(){
    document.getElementById("task").innerHTML += this;
};

const arrowFunction = () => {
    document.getElementById("task").innerHTML += "hello";
};

document.getElementById("clicker").addEventListener("click",arrowFunction);




