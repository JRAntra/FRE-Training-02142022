# JavaScript

## 1. Class
*What is JavaScript?*
- JavaScript is a scripting or programming language that makes the web page dynamic.
- It is used to create interactive effects on web pages.
- It was originally developed by Netscape in 1995 for a front-end modification.

*What is ECMAScript?*
- ECMAScript is a specification for JavaScript.
- It is a standard that defines the JavaScript language.

*What are the differences between javascript, nodejs and ECMAScript?*
- JavaScript is used in the browser, which is the front-end. 
- Node.js is used in the server, which is the back-end.
- ECMAScript is a standard that defines the JavaScript language.
- ECMAScript is included in both JavaScript and NodeJS.
    - JavaScript: ECMAScript + Web API
    - NodeJS: ECMAScript + Node API.
 
*What is primitive data?*
- In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.


*What is Object Data or reference Data?*
- Javascript has 3 data types that are passed by reference: Array, Function, and Object. These are all technically Objects, so we’ll refer to them collectively as Objects.

*What is coercion?*
- Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). 

*What are the difference between == and ===?*
- == is the equality operator.
- === is the strict equality operator.
- == compares the value of two variables, but === compares the value and type of two variables.
- which means === performs a type conversion or coercion before comparing the values.

*What are the difference between var, let, and const?*
|          | var      | let   | const |
|----------|----------|-------|-------|
| scope    | function | block | block |
| hoisting | yes      | yes   | yes   |
| redeclare| yes      | no    | no    |
| reassign | yes      | yes    | no   |

*What is OOP?*
- Object-Oriented Programming (OOP) is a programming paradigm that uses objects and methods to model real-world things.
- OOP (Object-Oriented Programming) is an approach in programming in which data is *encapsulated* within objects and the object itself is operated on, rather than its component parts.

*What is encapsulation?*
- Encapsulation is the packing of data and functions into one component (for example, a class) and then controlling access to that component to make a "blackbox" out of the object. 

*What is inheritance?*
- Inheritance is the process of copying all the properties and methods from one class to another.
- Constructor and Methods are inherited.

*What is Poly-morph-ism?*
- Polymorphism is the ability of an object to take on many forms.
- The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects. 
- I feel like it involves in changing the constructor and methods inherited from the parent class, which outputs different results for a same method.
ex:
```js
// Poly-morph-ism : Many Forms
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log('move');
    }
}
class Fish extends Animal {
    constructor(name) {
        super(name);
    }
    move(test) {
        return console.log(this.name + ' can swim');
    }
}
class Bird extends Animal {
    constructor(name) {
        super(name);
    }
    move() {
        return console.log(this.name + ' can fly');
    }
}
```

*What is abstrction?*
- Abstraction is the process of hiding the implementation details of a program.

*What is constructor function?*
- A constructor function is a special type of function that is used to create and initialize an object.

*What is prototype chain?*

- A prototype chain is a chain of objects that contains a reference to the prototype of the object.
- Each object has a private property which holds a link to another object called its prototype.

*What are loops in JS?*
- In array, you store multiple values in a single variable, mostly store single data type.
- In object, you store multiple values with key and values, can store multiple data types.

*How do you create your own Array.prototype.forEach(), Array.prototype.map(), Array.prototype.filter(), Array.prototype.reduce()?*
* MyForeach, MyMap, MyFilter, MyReduce

*What is destructure?*
- The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
    -  rest parameters --> collect ->
    - spread operator --> spread or drop in (a function)->

*What is object copy?*
1. Shallow Copy
- Create a new obj and assign the original to it. (only copy the reference.). It will pass the equal test ===.

2. Deep Copy
- Use destructoring to copy the original object.- It will copy all the contents. 

- JSON.stringify() to convert to string and then convert it to an object. 

- .clondDeep() and lodash make it work 100%

 *What is IIFE?*
- Immediately Invoked Function Expression (IIFE) is a function that is automatically invoked when it is created.

*What is closure?*
- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In


*What is currying?*
- Currying is the process of converting a function that takes multiple arguments into a chain of functions, each of which takes a single argument.
```js
function curry(f) { // curry(f) does the currying transform
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}
```

*what is `this`?
- `this` is a keyword that refers to the object that is executing the current function.


 *What are call, apply, bind?*
- call: call a function with arguments.
    - The call() method calls a function with a given this value and arguments provided individually.

- apply: call a function with arguments.
    - The apply() method calls a function with a given this value and arguments provided as an array.

- Call and Apply are the same, but apply is more efficient.

    - bind: - The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

 * arrow function
    - const add = (a, b) => a + b;

 * event loop
 - event loop is a loop that runs in the background, and is responsible for scheduling and running tasks.
 - - The event loop is the process that runs the JavaScript code.

 * @class
 * XHR
 - - All modern browsers have a built-in XMLHttpRequest object to request data from a server.
- XHR is a class that provides an easy way to make HTTP requests.

 * callback function; callback hell
 - **Callback functions** are functions that are passed into another function as a parameter, and called inside the outer function.
 - **Callback hell** is a pattern where a function is called inside another function, which in turn is called inside another function, which in turn is called inside another function, and so on.
- You can't get out of callback hell. Also, this is not a good design.

 * Promise
 * MyPromise
 * MyFetch
 *
 * @class
 * todolist:
 *   MVC
    - Model: data
    - View: UI
    - Controller: logic

 *   NodeList vs. HTMLCollection
    *   DOM traversal
    *   DOM manipulation

 *   Event bubbling
 - - Event bubbling is a mechanism that allows events to propagate up the DOM tree until they reach the top.
 * @class
 * JQuery
 */
