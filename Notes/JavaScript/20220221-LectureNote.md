# JavaScript

- David is presenting possible interview questions that we might need to prepare. 

## 1. Var vs. Let vs. Const
*What is the difference between var, let and const?*

|          | var      | let   | const |
|----------|----------|-------|-------|
| scope    | function | block | block |
| hoisting | yes      | yes   | yes   |
| redeclare| yes      | no    | no    |
| reassign | yes      | yes    | no   |


*What is hoisting?*
- JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
- Hoisting works with variables too, so you can use a variable in code before it is declared and/or initialized.

```js
console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.
```
*Tip: Download liveshare so that the instructor can share his/her code with students*

ex 1: variable hoisting with var and let.
```js
function foo() {
    console.log(a);
    var a = 0;
}
foo();
// undefined: data type.

function foo() {
    console.log(a);
    let a = 0;
}
foo();
// ReferenceError: Cannot access 'a' before initialization
```
ex 2: functional/block scope for var and let.
var:
```js
function foo() {
    if (true){
        var a=0;
    }
    console.log(a);
}
foo();
// output will be 0; because var has a functional scope, which means it is  accessible anywhere within the function.
```
let:
```js
function foo() {
    if (true){
        let a=0;
    }
    console.log(a);
}
foo();
// error: Uncaught ReferenceError: a is not defined
```

*Tip: Highly suggest to use let and const because var breaks the block scope.*
- ES6 introduced const and let so that it would act like other programming languages. Other programming languages have below rules:
    1. inner scope can access outer scope.
    2. outer scope can't access inner scope.

# 2. Coersion

*what is coercion?*
- Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers)

ex 1: coercion with +
```js
const value1 = '5';
const value2 = 9;
let sum = value1 + value2;

console.log(sum);
```

ex 2: 
```js
console.log(true + false);
// true converted to 1 and false converted to 0. Therefore, output is 1.
console.log(1 - '12');
// '12' converted to number 12. Therefore, output is -11.
console.log(typeof NaN);
// NaN is a special value that represents an error. Therefore, output is 'number'.

console.log(1 + 'test');
// Output: '1test' because 1 is converted to string '1'.
console.log(1 - 'test');
// Output: NaN (javascript tries to change 'test' to a number)
```

ex 3: coercion with == and ===
```js
console.log( 1=== '1'); // false
console.log( 1=='1'); // true (coersion happens, which means it first change the type first and compare).

// == will compare the value without coercion. === will compare the value and type by performing coercion.
```

# 3. OOP
*What is OOP?*
- Object Oriented Programming (OOP) is a programming paradigm that uses objects as the primary way of representing data and functionality in a computer program.

*What is OOP in JavaScript?*
- OOP (Object-Oriented Programming) is an approach in programming in which data is encapsulated within objects and the object itself is operated on, rather than its component parts.

*What happened after ES6?*
- JavaScript is a functional programming. This is originally designed for functional programming.
- ES6 introduced class and object.
- Therefore, OOP representation with class and object is possible with ES6.

## 3.1 Encapsulation
*What is encapsulation?*
- Encapsulation is the packing of data and functions into one component (for example, a class) and then controlling access to that component to make a "blackbox" out of the object. 
- Because of this, a user of that class only needs to know its interface (that is, the data and functions exposed outside the class), not the hidden implementation.

- encapsulation variables:
    - private: only accessible within the class.
    - public: accessible from outside the class. (represented with # in front of a variable name)

ex 1: console.log(class object)
```js
class Person {

}
const p = new Person();
console.log(p);
/*
Person {}
[[Prototype]]: Object
constructor: class Person
length: 0
name: "Person"
prototype: {constructor: ƒ}
arguments: (...)
caller: (...)
[[FunctionLocation]]: VM180:1
[[Prototype]]: ƒ ()
[[Scopes]]: Scopes[2]
[[Prototype]]: Object
*/

``` 


ex 2: class example

*What is a consturctor?*
- A constructor in Java is a special method that is used to initialize objects. The constructor is called when an object of a class is created. It can be used to set initial values for object attributes:
- A Method that is used to initialize an object. It dcan also be used to set initial values for object attributes.

*What are getters and setters?*
- For each instance variable, a getter method returns its value while a setter method sets or updates its value. Given this, getters and setters are also known as accessors and mutators, respectively.
```js
class Person {
    #name;
    #age;

    // constructor
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    // getter and setter.
    get show() {
        return this.#name;
    }
    set show(newname) {
        this.#name = newname;
        console.log(`${this.#name} is ${this.#age} years old`);
    }

    who() {
        console.log(`${this.#name} is ${this.#age} years old`);
        // console.log(this.name + ' is ' + this.age + ' years old');
        // console.log(this.name, 'is', this.age, 'years old');
    }
}

```

ex 3: functional programming example
```js
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.who = function() {
    console.log(this.name, 'is', this.age, 'years old');
}

const p = new Person('Jojo', 18);

// p.show = 'hello';
```

## 3.2 Inheritance
*What is inheritance?*
- Inheritance is the process of copying all or part of the code of a parent class to a child class.

- With Inheritance: 
    - you can inherit from other class.
    - you can override the method.
    - you can override the property.
    - you have method that you can call from the parent class.

ex 1: Inheritance between Person and Student
```js
// parent class
class Person { 
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

}

let student1 = new Student('Jack');
student1.greet();
// Hello Jack
// Though there is no greet method in Student class, it can call the greet method from the parent class.
```

Child
```js
function Employee(name,age, company) {
    Person.call(this, name, age);
    this.company = "jump";
}

Employee.prototype = Person.prototype;
```

ex 2: 
```js

class Person {
    #name;
    #age;

    // constructor
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    // getter and setter.
    get show() {
        return this.#name;
    }
    set show(newname) {
        this.#name = newname;
        console.log(`${this.#name} is ${this.#age} years old`);
    }

    who() {
        console.log(`${this.#name} is ${this.#age} years old`);
        // console.log(this.name + ' is ' + this.age + ' years old');
        // console.log(this.name, 'is', this.age, 'years old');
    }
}
class Employee extends Person {
    constructor(name, age, company = "Jump") {
        super(name, age);
        this.company = "Jump";
    }
}

const employee1 = new Employee('Jojo', 18);\
console.log(employee1)
/*
Employee {company: 'Jump', #name: 'Jojo', #age: 18}
company: "Jump"
#age: 18
#name: "Jojo"
show: (...)
[[Prototype]]: Person
*/
```
- Using super(), you can inherit constructors, methods, and properties from the parent class.

ex 3: Inheritance with functional programming
```js
class Person {
    #name;
    #age;

    // constructor
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    // getter and setter.
    get show() {
        return this.#name;
    }
    set show(newname) {
        this.#name = newname;
        console.log(`${this.#name} is ${this.#age} years old`);
    }

    who() {
        console.log(`${this.#name} is ${this.#age} years old`);
        // console.log(this.name + ' is ' + this.age + ' years old');
        // console.log(this.name, 'is', this.age, 'years old');
    }
}
function Employee(name, age, company) {
    Person.call(this, name, age);
    this.company = "Jump";
}
Employee.prototype = Person.prototype;

const e = new Employee("Dio", 200, "Antra");
e.who();
```
- Instead of inheriting using super(), you can use call() and apply() to inherit constructors, methods, and properties from the parent class.
- You don't have to know the details but know that prototype is a property of the constructor function.

## 3.3 Polymorphism
*What is polymorphism?*
- Polymorphism is the ability of an object to take on many forms.
- Polymorphism is the presentation of one interface for multiple data types.

*For example, integers, floats, and doubles are implicitly polymorphic: regardless of their different types, they can all be added, subtracted, multiplied, and so on.*


ex 1: Polymorphism displayed using Animal class 
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
class Monkey extends Animal {
    constructor(name) {
        super(name);
    }
    move() {
        return console.log(this.name + ' can run');
    }
}
const fish = new Fish('fish');
const bird = new Bird('bird');
const monkey = new Monkey('monkey');
fish.move();
bird.move();
monkey.move();
// move() methods are modified for different kinds of animals.
```

# 4. Loop

- JavaScript loops are used to repeatedly run a block of code

# 4.1 For loop

ex 1: Traditional for loop
```js
const arr = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
       break;
    }
    console.log(arr[i]);
}
```
- Traditional for loop is powerful because you can use break and continue. Also, you can work with index.

# 4.2 For in

```js
const arr = [1, 2, 3];
const obj = {
    name: 'Jojo',
    age: 18
}
for (const key in obj) {
    console.log(typeof key);
    console.log(key);
}
for (const num of arr) {
    console.log(typeof num);
    console.log(num);
}
/*
string
name
string
age
number
1
number
2
number
3
*/
```
*Can you use const inside for in?* 
```js
const arr = [1, 2, 3];
 for (const i in arr) {
     console.log(typeof i);
 }
    // string
```
- Yes, you can use const inside for in.

*Is array declared with const an array?*
```js
const arr = [1, 2, 3, 4, 5];
console.log(typeof arr);
// array declared is an object.
```
- It is an object.

## 4.3 create your own array.prototype.forEach() and map()

*What is forEach?*
- forEach is a method that can be used to iterate over an array.


*You can't use break and conitnue in the forEach*
```js
const arr= [1,2,3];
arr.forEach((num) => {
    console.log(num);
    if (num ==2) {
        break;
    }
});
Uncaught SyntaxError: Illegal break statement
```
*What is callback?*
- A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
```js
// callback function as an argument. Therefore, when someone invoke myForEach, it will invoke callback function (user's input and modification within the code block).

Array.prototype.myForEach = function (callback) {
    // this refers to the array.
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
const arr = [1, 2, 3];
arr.myForEach((num, i, array) => {
    array[i] = num + 1;
});

/*
(3) [2, 2, 3]
(3) [2, 3, 3]
(3) [2, 3, 4]
*/

```

*Tip: train yourself to write your code as senior developer.*
ex 1: good convention to write for loop.
```js
const arr= [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

*Tip: Use CanIuse.com to check whether you can use certain features or function or not.*

*Fact: Typescript will show more detail than Vanilla JS when the error occurs*

## 4.4 Array.prototype.map()
*What is .map()?*
- The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

ex 1: using .map() to create a new array.
```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

```

ex 2: Understand .map() by creating your own Array.prototype.myMap()
```js

Array.prototype.myMap = function (callback) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, this));
    }
    return res;
};

const arr1 = arr.myMap((num, i, array) => {
    return num + 2 * 4 - 213;
});
console.log(arr1);
```

## 4.5 Array.prototype.filter()
*What is prototype.filter()?*
- The filter() method creates a new array with all elements that pass the test implemented by the provided function.

ex 1: using .filter() to create a new array.
```js
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

```

ex 2: your own Array.prototype.myFilter()
```js

const arr = [1, 2, 32];

Array.prototype.myFilter = function (callback) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            res.push(this[i]);
        }
    }
    return res;
};

const arr1 = arr.myFilter((num, i, array) => {
    return num < 4;
});

console.log(arr1);
// Output: (2) [1, 2]
```

## 4.6 Array.prototype.reduce()
*What is .reduce()?*
- The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

*How do you use .reduce()?*

ex 1: using .reduce() to create a new array.
```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
 
);

console.log(sumWithInitial);
// expected output: 10

```
ex 2: alphabet reduce
```js
const str = 'abc';
// ['a', 'b', 'c']
console.log(str.split('').reduce((acc, cur, i, array) => acc + cur + cur, '')) 
// Output: 'aabbcc';
// acc = '', cur = 'a', i = 0, array = ['a', 'b', 'c']

```

ex 3: Easy version > make it .reduce version
```js

const arr = [1, 2, 3];
let acc = 0;
for (let cur of arr) {
    acc += cur;
}
console.log(acc);
console.log(arr.reduce((acc, cur) => acc + cur, 0));
/* Output: 
6
6
*/ 

```
ex 4: Object iteration using .reduce()
```js

function foo(arr) {
    const obj = {};
    for (let cur of arr) {
        obj[cur.name] = cur.age;
    }
    return obj;
    // alternative
    // return arr.reduce((acc, cur) => {
    //     acc[cur.name] = cur.age;
    //     return acc;
    // }, {});

    // return arr.reduce((acc, cur) => ({...acc, [cur.name]: cur.age}));
}

// or rewrite as below using ES6 and spread operator
/*
const foo = arr => arr.reduce((acc, cur) => ({...acc, [cur.name]: cur.age}));
*/
const arr = [
    { name: "Jojo", age: 18 },
    { name: "Dio", age: 1 },
    { name: "Jill", age: 148 },
    { name: "Tom", age: 128 },
];

console.log(foo(arr));
//{Jojo: 18, Dio: 1, Jill: 148, Tom: 128}
// becomes a key:value patterned object.
```

*Interview question: Make the object key:value?*
```js
function foo(arr){
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i].name] = arr[i].age;
    }
    return obj;
}

const arr = [
    { name: "Jojo", age: 18 },
    { name: "Dio", age: 1 },
    { name: "Jill", age: 148 },
    { name: "Tom", age: 128 },
];

console.log(foo(arr));
// Works!
```


*What happen if you do not have an initial accumulator?*
- first element of the array will be used as the initial value.
```js

const numbers = [175, 50, 25]; // 3

numbers.reduce(myFunc); // 100

function myFunc(total, num) {

    console.log(num);
    console.log(total);
    return total - num;
}
```


# 5. Spread Operator
*What is spread operator?*
- pread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
- The spread operator is used to expand the elements of an array into a list of arguments.

ex 1: MDN example
```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

```

ex 2: Spread operator in a Number array
```js

const arr = [1, 2, 3];

const arr1 = [0, ...arr, 4, 5];

console.log(arr1);
// Output: [0, 1, 2, 3, 4, 5]
```

*What is rest parameter*
- The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.


ex 3: Spread operator to create a rest parameter
```js

const foo = (num, ...args) => {
    console.log(args);
}

foo(1, 2, 3, 4, 5);
// Output: [2, 3, 4, 5]
```

ex 4: Create your own rest parameter
```js

const target = (a, b, c) => {
    return a + b + c;
}

function reptarget(callback) {
    // function and arguments are defined as if you are giving a model. 
    return function(...args) {
        console.log(...args);
        console.log(args);
        return callback(...args);
    }
}

const myfn = reptarget(target);

console.log(myfn(1, 2, 3));
```

HW: Create my own reducer

```js
Array.prototype.myReduce = function (fn, initacc) {
    let a = initacc;
    for (let i = 0; i < this.length; i++) {
        a = fn(a, this[i], i, this);
    }
    return a;
}
```

*Tip: Create your own reducer to handle 4 variables. Then, it will take less than 4 by itself.*

