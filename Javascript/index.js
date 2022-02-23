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
//     // Person.call(this, name, age);
//     Person.apply(this, [name, age]);
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

// Array.prototype.myForEach = function (callback) {
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// };

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

// const arr1 = arr.myFilter((cur, i, array) => {
//     return true;
// });

// console.log(arr1);

// let myarr = ["hello", "spicy", "random", "pickle"];

// // myReduce

// const str = "abc";
// // ['a', 'b', 'c']
// console.log(str.split("").myReduce((acc, cur) => acc + cur + cur, "")); // 'aabbcc';

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
// const foo = (arr) =>
//     arr.myReduce((acc, cur) => ({ ...acc, [cur.name]: cur.age }));

// const arr = [
//     { name: "Jojo", age: 18 },
//     { name: "Dio", age: 1 },
//     { name: "Jill", age: 148 },
//     { name: "Tom", age: 128 },
// ];

// console.log(foo(arr));
// console.log({ name: "Jojo", age: 18, Dio: 1, Jill: 148, Tom: 128 });

// console.log({ Jojo: 18, Dio: 1, Jill: 148, Tom: 128 });

// Array.prototype.myReduce = function (...args) { // cb, initacc
//     if (!args.length) return;

//     let callback = args[0];
//     let [index, acc] = args.length > 1 ? [0, args[1]] : [1, this[0]];

//     for (let i = index; i < this.length; i++) {
//         acc = callback(acc, this[i], i, this);
//     }

//     return acc;
// };

// const numbers = [175, 50, 25]; // 3

// console.log(numbers.myReduce(myFunc, 0)); // 100

// function myFunc(total, num) {
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

// // // destructure;

// const [a, b] = [1, 2];

// const { element, company, name, age } = {
//     name: 'Jojo',
//     age: 18,
//     company: 'Jump'
// }

// const { links } = {
//     id: 1,
//     name: 'David Dong',
//     links: [
//         { name: 'wechat',       link: 'wechat.com'      },
//         { name: 'apple',        link: 'apple.com'       },
//         { name: 'cnn',          link: 'cnn.com'         },
//         { name: 'fox',          link: 'fox.com'         },
//         { name: 'hbo',          link: 'hbo.com'         },
//     ]
// };

// import {MatDividerModule} from '@angular/material/divider';
// const {MatDividerModule} = '@angular/material/divider';

// console.log(links.find(({ name }) => name === 'cnn').link);

// // copy obj in js
// // shallow copy vs. deep copy

// const obj = {
//     name: 'Dio',
//     arr: 3
// };
// // const obj1 = obj;
// // console.log(obj === obj1);

// const obj2 = {...obj};
// // console.log(obj.arr === obj2.arr);

// let arr = [1, 2];
// arr.push(3);

// class A {
//     #arr = [];

//     get arr() {
//         return this.#arr;
//     }
//     set arr(newarr) {
//         this.#arr = newarr;

//         console.log('hello from class'); // rerender
//     }
// }
// const a = new A();

// a.arr = [1, 2, 3];

// console.log('arr after init: ', a.arr);

// a.arr.push(4);
// console.log('arr after push: ', a.arr);

// a.arr = [...a.arr, 5];
// console.log('arr after push: ', a.arr);

// mutable data, immutable data;

// // deep copy by JSON.stringify;
// const obj = {
//     name: 'Dio',
//     arr: [1, 2, 3],
//     date: new Date(),
//     foo: function () {}
// };
// console.log(JSON.stringify(obj));

// const obj3 = JSON.parse(JSON.stringify(obj));
// console.log(obj, obj3);

// _.cloneDeep()

// const obj = {
//     name: 'Jojo'
// }

// console.log(obj.name);

// obj.age = 3;

// const strarr = ['a', 'b', 'c'];

// for (let d of strarr) {
//     obj[d] = 3;
// }

// console.log(obj);

// function foo(arr) {
//     const obj = {};
//     for (let cur of arr) {
//         obj.cur.name = cur.age;
//     }
//     return obj;
// }

// const arr = [
//     { name: "Jojo", age: 18 },
//     { name: "Dio", age: 1 },
//     { name: "Jill", age: 148 },
//     { name: "Tom", age: 128 },
// ];

// console.log(foo(arr));

// // ~~~~~~interview question~~~~~~~~~~~~
// const first = [
//     { userid: 2, name: 'Velen' },
//     { userid: 56, name: 'Illidan' },
//     { userid: 23, name: 'Muradin' },
//     { userid: 12, name: 'Sylvanas' },
//     { userid: 44, name: 'Cenarius' },
//     { userid: 4, name: 'Gul\'Dan' }
// ];
// const second = [
//     { userid: 2, role: 'Mage' },
//     { userid: 4, role: 'Worlock' },
//     { userid: 56, role: 'Demon Hunter' },
//     { userid: 66, role: 'Druid' },
//     { userid: 87, role: 'Shaman' },
//     { userid: 12, role: 'Hunter' },
// ];

// function solution(fir, sec) {
//     const arr = [...fir, ...sec];
//     const map = {};

//     arr.forEach(ele => {
//         map[ele.userid] = {
//             ...{ userid: null, name: null, role: null },
//             ...map[ele.userid],
//             ...ele
//         }
//     });

//     return Object.values(map);
// }

// console.log(solution(first, second));

// [
//     { userid: 2, name: 'Velen', role: 'Mage' },
//     { userid: 56, name: 'Illidan', role: 'Demon Hunter' },
//     { userid: 23, name: 'Muradin', role: null },
//     { userid: 12, name: 'Sylvanas', role: 'Hunter' },
//     { userid: 44, name: 'Cenarius', role: null },
//     { userid: 4, name: 'Gul\'Dan', role: 'Worlock' },
//     { userid: 66, name: null, role: 'Druid' },
//     { userid: 87, name: null, role: 'Shaman' },
// ]

// // closure

// function foo() {
// // ------
//     const a = 10;

//     function print(data) {
//         console.log(data);
//     }
// // ------
//     return {print, a};
// }

// // ~~~~~~~~~~~~~~~~ interview question ~~~~~~~~~~~~~~~~~~~~

// const target = (a, b) => console.log(a + b);
// // const t0 = (a, b, c, d) => console.log(a + b + c + d);

// let fn = limitedFunction(1, target);

// function limitedFunction(num, cb) {
//     let counter = num;

//     return function(...args) { // rest parameters --> collect -> []
//         if (counter > 0) {
//             counter--;
//             cb(...args); // spread operator ---> drop
//         } else {
//             console.log('over limited!')
//         }
//     }
// }

// fn(6, 2); // 13  [counter = ]
// fn(2, 6); // 15
// fn(6, 3); // 9
// fn(9, 4); // 13
// fn(5, 1); // over limited!
// fn(2, 9); // over limited!

// console.log(foo()[0]);

// // curring
// const foo = (a) => {
// //
//     let c = a;
// //
//     return function(b) {
//         return c + b;
//     }
// }

// console.log( foo(4)(5) ); // sum = 9

// // ~~~~~~~~~~~~~~~~ interview question ~~~~~~~~~~~~~~~~~~~~

// const callback1 = (a) => a + 2; // 5
// const callback2 = (b) => b * 2; // 10
// const callback3 = (c) => c - 2; // 8

// console.log( runAll(5)(callback1, callback2, callback3) ); // 8

// function runAll(...rest) {
//     // let resnum = undefined;
//     return function(num) {
//         // resnum = num;
//         // while (rest.length) {
//         //     const cb = rest.shift();
//         //     resnum = cb(resnum);
//         // }
//         // return resnum;
//         return rest.reduce((acc, cur) => cur(acc), num);
//     }
// }

// // iife

// const test = (function () {
//     function print(data) {
//         console.log(data);
//     }
//     return {
//         print
//     }
// })();

// test.print(5);

// // this

// (function foo() {
//     console.log(this);
// })();

// class Person {
//     name ='Jojo';

//     constructor(name) {
//         this.name = name;
//     }

//     foo() {
//         console.log(this.name);
//     }
// }
// const p = new Person('Dio');
// p.foo();

// bind, call, apply

// const obj = {
//     pi: 3.1415926,
//     foo: function () {
//         console.log('foo: ', this); // ---> obj

//         function baz() {
//             console.log('bar: ', this);
//         }
//         const boo = baz.bind(this); // ---> obj
//         boo();

//         const bar = () => {
//             console.log('bar: ', this);
//         }
//         bar();
//     }
// }
// obj.foo();

// // arrow function
// const baz = () => {

// }
// function baz() {

// }

// function bar(num1, num2) { // 2
//     console.log(this.pi, num1, num2);
// }

// const baz = bar.bind(obj); // lazy
// baz(2, 3);

// bar.call(obj, 2, 3); // 3 // eager
// bar.apply(obj, [2, 3]); // obj + [2] // eager

// // event loop

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => console.log(i), (5 - i) * 1000);
// }
// console.log(v) [0]
// console.log(v) [1]
// console.log(v) [2]

// // call stack: [console.log]
/** web api : async api
 *  () => console.log(i), 5
 *  () => console.log(i), 4
 *  () => console.log(i), 3
 *  () => console.log(i), 2
 *  () => console.log(i), 1
 */
/** tasks queue : message queue
 *  [() => console.log(4), () => console.log(3) ...]
 */

// // callback hell

// const foo = () => console.log('foo');
// const random = () => Math.floor(Math.random() * 6);

// const callFnRandomTime = (callback) => {
//     const timer = random();
//     console.log(`${timer}s`);

//     setTimeout(callback, timer * 1000);
// }
// callFnRandomTime(() => {
//     callFnRandomTime(() => {
//         callFnRandomTime(() => {
//             callFnRandomTime(() => {
//                 callFnRandomTime(() => {
//                     callFnRandomTime(() => {
//                         callFnRandomTime(() => {
//                             callFnRandomTime(() => {
//                                 callFnRandomTime(() => {
//                                     foo();
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// // XHR

// const url = 'https://jsonplaceholder.typicode.com/todos/'

// function getTodo(url) {
//     return new Promise((resolve, reject) => {

//         const xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function() {
//             if (this.readyState == 4 && this.status == 200) {
//                // Typical action to be performed when the document is ready:
//                resolve(JSON.parse(xhttp.response));
//             }
//         };
//         xhttp.open("GET", url, true);
//         xhttp.send();
//     });
// }
// const print = (data) => console.log(data);

// // // // 5, 12, 46

// getTodo(url + 5)
//     .then((data) => {
//         console.log(data);
//         return getTodo(url + 12);
//     })
//     .then((data) => {
//         console.log(data);
//         return getTodo(url + 46);
//     })
//     .then(console.log);

// Promise.all([getTodo(url + 5), getTodo(url + 12), getTodo(url + 46),])
//     .then(data => {
//         console.log(data);
//     })

// // async await
// (async () => {
//     try {
//         const data5 = await getTodo(url + 5);
//         console.log(data5);

//         const data12 = await getTodo(url + 12);
//         console.log(data12);

//         const data46 = await getTodo(url + 46);
//         console.log(data46);
//     } catch (error) {

//     }
// })();

// getTodo((data) => {
//     print(data);
//     getTodo((data) => {
//         print(data);
//         getTodo((data) => {
//             print(data);
//         }, 46);
//     }, 12);
// }, 5);

// // promise

// class MyPromise {
//     #thenCallbackQueue = [];
//     #currentData = undefined;
//     #catchCallbackQueue = [];

//     constructor(executor) {
//         try {
//             executor(this.#resolve, this.#reject.bind(this));
//         } catch (error) {
//             this.#reject(error);
//         }
//     }

//     #resolve = (resdata) => {
//         setTimeout(() => {
//             try {
//                 this.#currentData = resdata;

//                 while (this.#thenCallbackQueue.length) {
//                     const cb = this.#thenCallbackQueue.shift();

//                     if (this.#currentData instanceof MyPromise) {
//                         this.#currentData.then((data) => {
//                             this.#currentData = cb(data);
//                         });
//                     } else {
//                         this.#currentData = cb(this.#currentData);
//                     }
//                 }
//             } catch (error) {
//                 this.#reject(error);
//             }
//         }, 0);
//     };
//     #reject() {}

//     then(thencb) {
//         this.#thenCallbackQueue.push(thencb);
//         return this;
//     }
//     catch(catchcb) {
//         this.#catchCallbackQueue.push(catchcb);
//         return this;
//     }

//     static resolve(resdata) {
//         return new MyPromise((res, _) => {
//             res(resdata);
//         });
//     }
//     static reject(rejdata) {
//         return new MyPromise((_, rej) => {
//             rej(rejdata);
//         });
//     }
//     static all(promiseArr) {
//         return new MyPromise((res, rej) => {
//             const returnArr = [];
//             let counter = 0;

//             promiseArr.forEach((promise, i) => {
//                 if (promise instanceof MyPromise) {
//                     promise.then((resData) => {
//                         returnArr[i] = resData;
//                         counter++;
//                         if (counter === promiseArr.length) {
//                             res(returnArr);
//                         }
//                     });
//                 } else {
//                     returnArr[i] = promise;
//                     counter++;
//                     if (counter === promiseArr.length) {
//                         res(returnArr);
//                     }
//                 }
//             });
//         });
//     }
// }

// const promise1 = MyPromise.resolve(3);
// const promise2 = 42;
// const promise3 = new MyPromise((resolve, reject) => {
//     // resolve('foo');
//     setTimeout(resolve, 100, "foo");
// });

// MyPromise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// });

// new MyPromise((res, rej) => {
//     res();
// });

// new MyPromise((resolve, reject) => {
//     resolve("hello");
// })
//     .then((data) => {
//         console.log(data);
//         return new MyPromise((res, rej) => {
//             res("world");
//         });
//     })
//     .then(console.log)
//     .catch((err) => console.log(err));

// hello [thencb,...]

// // myFetch

// function myFetch(url, option) {
//     return new Promise((resolve, reject) => {
//         const method = option && option.method ? option.method : "GET";
//         const xhttp = new XMLHttpRequest();
//         xhttp.open(method, url, true);

//         if (option && option.headers) {
//             Object.keys(option.headers).forEach((key) => {
//                 xhttp.setRequestHeader(key, option.headers[key]);
//             });
//         }

//         xhttp.onreadystatechange = function () {
//             if (this.readyState == 4 && this.status >= 200 && this.status < 300) {
//                 // Typical action to be performed when the document is ready:

//                 resolve({
//                     json: function () {
//                         return JSON.parse(xhttp.response);
//                     },
//                 });
//             }
//         };
//         option && option.body ? xhttp.send(option.body) : xhttp.send();
//     });
// }

// myFetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1,
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8",
//     },
// })
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// myFetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// // todolist
