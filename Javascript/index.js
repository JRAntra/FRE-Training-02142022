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

// // loop
// const arr = [1, 2, 3];
// const obj = {
//     name: 'Jojo',
//     age: 18
// }
// for (const key in obj) {
//     console.log(typeof key);
// }
// for (const num of arr) {
//     console.log(num);
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 2) {
//        break;
//     }
//     console.log(arr[i]);
// }

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

// arr.myForEach((num, i, array) => {
//     array[i] = num + 1;
// });

// const arr123 = [true, 1, 'test'];
// arr123.myForEach();

// const arr = [1, 2, 3];

// Array.prototype.myMap = function (callback) {
//     const res = [];
//     for (let i = 0; i < this.length; i++) {
//         res.push(callback(this[i], i, this));
//     }
//     return res;
// };

// const arr1 = arr.myMap((num, i, array) => {
//     return num + 2 * 4 - 213;
// });
// console.log(arr1);

// const arr = [1, 2, 32];

// Array.prototype.myFilter = function (callback) {
//     const res = [];
//     for (let i = 0; i < this.length; i++) {
//         if (callback(this[i], i, this)) {
//             res.push(this[i]);
//         }
//     }
//     return res;
// };

// const arr1 = arr.myFilter((num, i, array) => {
//     return num < 4;
// });

// console.log(arr1);

// // myReduce

// const str = 'abc';
// // ['a', 'b', 'c']
// console.log(str.split('').reduce((acc, cur, i, array) => acc + cur + cur, '')) // 'aabbcc';

// const arr = [1, 2, 3];
// let acc = 0;
// for (let cur of arr) {
//     acc += cur;
// }
// console.log(acc);
// console.log(arr.reduce((acc, cur) => acc + cur, 0));

// function foo(arr) {
//     // const obj = {};
//     // for (let cur of arr) {
//     //     obj[cur.name] = cur.age;
//     // }
//     // return obj;

//     // return arr.reduce((acc, cur) => {
//     //     acc[cur.name] = cur.age;
//     //     return acc;
//     // }, {});

//     return arr.reduce((acc, cur) => ({...acc, [cur.name]: cur.age}));
// }
// const foo = arr => arr.reduce((acc, cur) => ({...acc, [cur.name]: cur.age}));

// const arr = [
//     { name: "Jojo", age: 18 },
//     { name: "Dio", age: 1 },
//     { name: "Jill", age: 148 },
//     { name: "Tom", age: 128 },
// ];

// console.log(foo(arr));
// console.log({ name: "Jojo", age: 18, Dio: 1, Jill: 148, Tom: 128 });

// console.log({ Jojo: 18, Dio: 1, Jill: 148, Tom: 128 });

// const numbers = [175, 50, 25]; // 3

// numbers.reduce(myFunc); // 100

// function myFunc(total, num) {

//     console.log(num);
//     return total - num;
// }

// // spread operator && rest parameters

// const arr = [1, 2, 3];

// const arr1 = [0, ...arr, 4, 5];

// console.log(arr1);

// const foo = (num, ...args, num2) => {
//     console.log(args);
// }

// foo(1, 2, 3, 4, 5);

// const target = (a, b, c) => {
//     return a + b + c;
// }

// function reptarget(callback) {
//     return function(...args) {
//         return callback(...args);
//     }
// }

// const myfn = reptarget(target);

// console.log(myfn(1, 2, 3));