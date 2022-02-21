//          var           vs. let vs. const vs. function
// scope    function          block   block
// hoisting yes               yes     yes       yes

// console.log(foo());

// let foo = function() {
//     return 5;
// }

// function foo() {
//     return 5;
// }

// const a = [1, 2, 3];
// console.log(a);

// function foo(a) {
//     var a = undefined;

//     console.log(a);
//     var a = 0;
// }

// foo();

// // coercion
// console.log(true + false);
// console.log(typeof NaN); // 1test

// console.log(1 === '1');  // 1. compare
// console.log(1 == '1');   // 1. coercion 2. compare

// oop // ES6
// // encapsulation
// class Person {
//     #name;
//     #age;

//     constructor(name, age) {
//         this.#name = name;
//         this.#age = age;
//     }

//     get show() {
//         return this.#name;
//     }
//     set show(newname) {
//         this.#name = newname;
//         console.log(`${this.#name} is ${this.#age} years old`);
//     }

//     who() {
//         console.log(`${this.#name} is ${this.#age} years old`);
//         // console.log(this.name + ' is ' + this.age + ' years old');
//         // console.log(this.name, 'is', this.age, 'years old');
//     }
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.who = function() {
//     console.log(this.name, 'is', this.age, 'years old');
// }

// const p = new Person('Jojo', 18);

// // p.show = 'hello';

// // // inheritance
// class Employee extends Person {
//     constructor(name, age, company = "Jump") {
//         super(name, age);
//         this.company = "Jump";
//     }
// }

// function Employee(name, age, company) {
//     Person.call(this, name, age);
//     this.company = "Jump";
// }
// Employee.prototype = Person.prototype;

// const e = new Employee("Dio", 200, "Antra");
// e.who();

// // Poly-morph-ism : Many Forms
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     move() {
//         console.log('move');
//     }
// }
// class Fash extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move(test) {
//         return console.log(this.name + ' can swim');
//     }
// }
// class Bird extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can fly');
//     }
// }
// class Monkey extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     move() {
//         return console.log(this.name + ' can run');
//     }
// }
// const fish = new Fash('fish');
// const bird = new Bird('bird');
// const monkey = new Monkey('monkey');
// fish.move();
// bird.move();
// monkey.move();

// const arr = [];

// Array.prototype.myForEach = function() {
//     console.log('this is myforeach!');
// }


