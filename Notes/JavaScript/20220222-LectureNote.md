# HW Review

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


# 1. Destructor
- The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

ex 1: destructoring an array and a object.
```js
const [a, b] = [1, 2];
console.log(a,b);
const {name, age} = {name: 'John', age: 30};
console.log(name, age);
/*
Output: 
1 2
John 30
*/
```

ex 2: destructoring a non-existing variable.
- If you try to destructor a non-existing variable, it will return undefined value.
```js
const { element, company, name, age } = {
    name: 'Jojo',
    age: 18,
    company: 'Jump'
}

console.log(name, age, element, company);
// Output: Jojo 18 undefined Jump
```

ex 3: destructoring nested object - practical example.

```js
const user = {
  id: 339,
  name: 'Fred',
  age: 42,
  education: {
    degree: 'Masters'
  }
};
const {education: 
        {degree}
        } = user;
console.log(degree); //prints: Masters
```

*Tip: Please check Angular document for developers compoased by Google.*
URL: https://angular.io/api/common/DOCUMENT

ex 4: Real world scenario.

```js
const { links } = {
    id: 1,
    name: 'David Dong',
    links: [
        { name: 'wechat',       link: 'wechat.com'      },
        { name: 'apple',        link: 'apple.com'       },
        { name: 'cnn',          link: 'cnn.com'         },
        { name: 'fox',          link: 'fox.com'         },
        { name: 'hbo',          link: 'hbo.com'         },
    ]
};
console.log(links.find(({ name }) => name === 'cnn').link);
// You can search the links array and find the link of cnn. In the process name was destructored.
```

ex 5: Angular import examples

```js
import {MatDividerModule} from '@angular/material/divider';
const {MatDividerModule} = '@angular/material/divider';
```

# 2. Object Copy
- There are many ways to copy an object.

## 2.1 Shallow copy

- Shallow copy will create a new variable and reference the same object.
```js
const obj = {name: 'D', age: 18};
const obj1 = obj;
console.log(obj === obj1); 
// true
// In memory location, it is pointing to the same memory location, which holds the same value.
```

## 2. Deep copy

- You can copy exactly same data. 
- This can be verified by using the `===` operator. If false, it means you have made a deep copy of the object.

*It means === is comparing the memory location too.*
```js
const obj2 = {...obj};
console.log(obj === obj2);
// false
// They are different because you create a new memory location. You have the exactly same but different address.
```

```js
let arr = [1, 2];
arr.push(3);
console.log(arr);
// Output: [1, 2, 3]
```
*What is going on here?*

```js
class A {
    #arr = [];

    get arr() {
        return this.#arr;
    }
    set arr(newarr) {
        this.#arr = newarr;

        console.log('hello from class'); // rerender
    }
}
const a = new A(); 
console.log(a);
console.log(a.arr);
a.arr = [1, 2, 3];
console.log()
console.log('arr after init: ', a.arr);
// Output: arr after init:  (3) [1, 2, 3]
a.arr.push(4);
console.log('arr after push: ', a.arr);
// Output:  after push:  (4) [1, 2, 3, 4]
a.arr = [...a.arr, 5];
console.log('arr after push: ', a.arr);
// Output: arr after push:  (5) [1, 2, 3, 4, 5]
```

## 2.1 Deep copy with JSON.stringify()

*How do you create a deep copy with JSON.stringify()?*
- You first need to convert the object to string. Then, you can convert the string back to object.

```js
const obj = {
    name: 'Dio',
    arr: [1, 2, 3],
    date: new Date(),
    foo: function () {}
};
console.log(JSON.stringify(obj));

const obj3 = JSON.parse(JSON.stringify(obj));
console.log(obj, obj3);
```
*Side Effect: This won't work if the object contains a function or an obj.*

*How do you make a perfect copy then?*
- You can use the library lodash..
- _.cloneDeep(obj)


## 3. Mutable data, immutable data

*What is Mutable data?*
- A mutable object is an object whose state can be modified after it is created.

*What are examples of mutable data?*
- Mutable data:
    - Array
    - Object

ex 1: Changing object's state

```js
const obj = {
    name: 'Jojo'
}

console.log(obj.name);

obj.age = 3;
console.log(obj);
// {name: 'Jojo', age: 3}
```

ex 2: Iterate over an array and create a new object
```js

const strarr = ['a', 'b', 'c'];

for (let d of strarr) {
    obj[d] = 3;
}
console.log(obj);
// {name: 'Jojo', age: 3, a: 3, b: 3, c: 3}
```

ex 3: When creating a new object, use (.)to access the property because [] requires a string.

```js

function foo(arr) {
    const obj = {};
    for (let cur of arr) {
        // obj.cur.name = cur.age; // Give an error: Uncaught TypeError: Cannot set properties of undefined (setting 'name')
        obj[cur.name] = cur.age;
        // This one works! Will return {Jojo: 18, Dio: 1, Jill: 148, Tom: 128}Dio: 1Jill: 148Jojo: 18Tom: 128[[Prototype]]: Object

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

```

*Tip (implied): it is always better to create a deep copy because you might change the original data and never be able to know what it was previously.*

ex: Adding one more value using a deep copy concept:
```js
let arr = [1, 2];
arr.push(3);

arr = [...arr, 3];

```

*Interview question about mutable data and rest operator.*
```js

// Given rist and second array, merge two objs in the array if they have the same userid. If not, add the add the value null to the key.
const first = [
    { userid: 2, name: 'Velen' },
    { userid: 56, name: 'Illidan' },
    { userid: 23, name: 'Muradin' },
    { userid: 12, name: 'Sylvanas' },
    { userid: 44, name: 'Cenarius' },
    { userid: 4, name: 'Gul\'Dan' }
];
const second = [
    { userid: 2, role: 'Mage' },
    { userid: 4, role: 'Worlock' },
    { userid: 56, role: 'Demon Hunter' },
    { userid: 66, role: 'Druid' },
    { userid: 87, role: 'Shaman' },
    { userid: 12, role: 'Hunter' },
];
 
function solution(fir, sec) {
    const arr = [...fir, ...sec];
    const map = {};

    arr.forEach(ele => {
        map[ele.userid] = {
            ...{ userid: null, name: null, role: null },
            ...map[ele.userid],
            ...ele
        }
    });

    return Object.values(map);
}

console.log(solution(first, second));

// should return below result:
[
    { userid: 2, name: 'Velen', role: 'Mage' },
    { userid: 56, name: 'Illidan', role: 'Demon Hunter' },
    { userid: 23, name: 'Muradin', role: null },
    { userid: 12, name: 'Sylvanas', role: 'Hunter' },
    { userid: 44, name: 'Cenarius', role: null },
    { userid: 4, name: 'Gul\'Dan', role: 'Worlock' },
    { userid: 66, name: null, role: 'Druid' },
    { userid: 87, name: null, role: 'Shaman' },
]
```



- Immutable data:
    - String
    - Number
    - Boolean
    - Symbol

- When you try to push something, you cannot trigger the data inside the setter. 

- A mutable object is an object whose state can be modified after it is created.
- Immutables are the objects whose state cannot be changed once the object is created.
- Strings and Numbers are Immutable. 

# 3.1 Deep copy by JSON.stringify();

```js
const obj = {
    name: 'Dio',
    arr:[1, 2, 3],
    date: new Date(),
}
console.log(JSON.stringify(arr));
// make it into string.
const obj3 = JSON.parse(JSON.stringify(arr));
// make it into object.
console.log(obj.arr === obj3.arr);
```

- This is a tricky way. 
*Vulnerability: if you change it to the string for date it will not do that.*

- Front and back end we mostly have time so this is not a good method to use. 

# We have a famous library to make deep copy.
- Lodash - .cloneDeep().
- This is very powerful. 
- You can manipulate array and object.

- The most powerful way to copy an obj is using stringify. 

- What is the difference between obj.name and obj[name]?
- for bracket, the key needs to be a string.
```js

```

- you cannot use obj.c to create an object. 
```js
for (let d of starr) {

}
```

- Practical application.
```js
// for (let d of strarr) {
//     obj[d] = 3;
// }

// ~~~~~~interview question~~~~~~~~~~~~
const first = [
    { userid: 2, name: 'Velen' },
    { userid: 56, name: 'Illidan' },
    { userid: 23, name: 'Muradin' },
    { userid: 12, name: 'Sylvanas' },
    { userid: 44, name: 'Cenarius' },
    { userid: 4, name: 'Gul\'Dan' }
];
const second = [
    { userid: 2, role: 'Mage' },
    { userid: 4, role: 'Worlock' },
    { userid: 56, role: 'Demon Hunter' },
    { userid: 66, role: 'Druid' },
    { userid: 87, role: 'Shaman' },
    { userid: 12, role: 'Hunter' },
];
 
function solution(fir, sec) {
    const arr =[...fir, ...sec];
    const map = {};

    arr.forEach(ele => {
        if (map[ele.userid] === undefined) {
            map[ele.userid] = ele;
             if(ele.role){
            map[ele.userid].role = ele.role;
            map[ele.userid].name = null;
            } else {
            map[ele.userid].name = ele.name;
            map[ele.userid].role = null;
            }
        } else {
            if(ele.role){
            map[ele.userid].role = ele.role;
            map[ele.userid].name = null;
            } else {
            map[ele.userid].name = ele.name;
            map[ele.userid].role = null;
            }
        }
    });
    return map;
}
console.log(solution(first, second));

[
    { userid: 2, name: 'Velen', role: 'Mage' },
    { userid: 56, name: 'Illidan', role: 'Demon Hunter' },
    { userid: 23, name: 'Muradin', role: null },
    { userid: 12, name: 'Sylvanas', role: 'Hunter' },
    { userid: 44, name: 'Cenarius', role: null },
    { userid: 4, name: 'Gul\'Dan', role: 'Worlock' },
    { userid: 66, name: null, role: 'Druid' },
    { userid: 87, name: null, role: 'Shaman' },
]
```

# 4. Closure
*What is closure?*
- It is a function that has access to the variables in its scope.

*MDN Definition:*
- A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)- In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

ex:
```js

function foo() {
// ------Clsure ------
    const a = 10;

    function print(data) {
        console.log(data);
    }
// -------------------
    return {print, a};
}
console.log(foo());
// {a: 10, print: ƒ}
console.log(foo().print(10));
// 10
```

*What is the difference between rest parameters and spread operator?*
- Rest parameters help to collect something.
- Spread operator help you to dorp them

ex 2: Interview question for closure.
```js
// ~~~~~~~~~~~~~~~~ interview question ~~~~~~~~~~~~~~~~~~~~

const target = (a, b) => console.log(a + b);
// const t0 = (a, b, c, d) => console.log(a + b + c + d);

let fn = limitedFunction(5, target);

function limitedFunction(num, cb) {
    let counter = num;

    return function(...args) { // rest parameters --> collect -> []
        console.log(...args);
        if (counter > 0) {
            counter--;
            cb(...args); // spread operator ---> drop
            console.log("Counter:",counter);
        } else {
            console.log('over limited!')
        }
    }
}

fn(6, 2); 
fn(2, 6); 
fn(6, 3); 
fn(9, 4); 
fn(5, 1); 
fn(2, 9); 
/* Output:
If initial counter is set to 2,

8
Counter: 2
8
Counter: 1
9
Counter: 0
over limited!
over limited!
over limited!

If initial counter is set to 5,
*/

```
*Wierd syntax:*
- This is odd beacuse when you actually fn(6,2) the arguments will be called when you call the function as below
```js
let fn = limitedFunction(5, target);

function limitedFunction(num, cb) {
    let counter = num;

    return function(...args) { // rest parameters --> collect -> []
        console.log(...args);
    }
}
```

*Review for closure:*
```js
function makeFunc() {
  var name = 'Mozilla';
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
// Alert "Mozilla" initialited as myFunc() is called. 
// myFunc() > call makeFunc() > call displayName() > call alert()
```


# 5. Curring
*What is curring?*
- It is a function that returns a function.

ex 1: 
```js
function outer() {
    let a = 1;
    function inner() {
        console.log(a);
    }
    return inner;
}
outer();
/* 
ƒ inner() {
        console.log(a);
    }
*/
outer()();
// returns 1.
```
- *Impression: This is like a russian doll.*

ex 2:
```js

// curring
const foo = (a) => {
//
    let c = a;
//
    return function(b) {
        return c + b;
    }
}
console.log( foo(4)(5) ); // sum = 9
```

ex 3: Interview Question
```js

// ~~~~~~~~~~~~~~~~ interview question ~~~~~~~~~~~~~~~~~~~~

const callback1 = (a) => a + 2; // 5
const callback2 = (b) => b * 2; // 10
const callback3 = (c) => c - 2; // 8

console.log( runAll(callback1, callback2, callback3)(5) ); // 8

function runAll(...rest) {
    // let resnum = undefined;
    return function(num) {
        // resnum = num;
        // while (rest.length) {
        //     const cb = rest.shift();
        //     resnum = cb(resnum);
        // }
        // return resnum;
        return rest.reduce((acc, cur) => cur(acc), num);
    }
}
// Output: 12
// callback 1 > callback 2 > callback 3 > 12

```
# 6. IIFE

- Look at the MDN reference: https://developer.mozilla.org/en-US/docs/Glossary/IIFE

Three main IIFEs:
1. IIFE
```js
(function () {
  /* ... */
})();
```
2. Arrow function IIFE
```js
(() => {
  /* ... */
})();
```
3. Async IIFE
```js
(async () => {
  /* ... */
})();
```

- It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

- Imeediately invoked function expression
```js
(function() {
    console.log('Hello');
})();
// first part is a function and second you are trying to run it.
```

- Javascript: ECMAScript + Web API
- NodeJS: ECMAScript + Node API.

```js
const test = (function () {
    function print(data) {
        console.log(data);
    }
    return {
        print
    }
})();

test.print(5);
```