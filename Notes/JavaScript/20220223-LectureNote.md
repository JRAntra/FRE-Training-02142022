# 1. This

- In most cases, the value of this is determined by how a function is called (runtime binding). 
- It can't be set by assignment during execution, and it may be different each time the function is called. 
- ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, and 
- ES2015 introduced arrow functions which don't provide their own this binding (it retains the this value of the enclosing lexical context).

ex 1: This
```js
const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());
// expected output: 42
// Order of execution: test.func() -> return this.prop which is test.prop.
```

ex 2: 
```js
class Person {
    name ='Jojo';

    constructor(name) {
        this.name = name;
    }

    foo() {
        console.log(this.name);
    }
}
const p = new Person('Dio');
p.foo();
// Output: Dio
// Refers to one previous layer.
```

ex 3: No binding
```js
(function foo() {
    console.log(this);
})();
// If there is no function invocation context, this refers to the global object.
```
- By default, this refers to the global object.

# 2. bind, call, apply

Useful resources:
1. https://www.taniarascia.com/this-bind-call-apply-javascript/#:~:text=call%20and%20apply%20are%20very,the%20arguments%20as%20an%20array.
2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

*What is bind?*
- The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

ex 1: Deafult this refers to a global object.
```js
const obj = {
    pi: 3.1415926,
    foo() {
        console.log('foo: ', this); // obj

        function bar() {
            console.log('bar: ', this); // --> don't know
        }
        bar();
    }
}
obj.foo();
/*
foo:  {pi: 3.1415926, foo: ƒ}
bar:  Window {0: global, window: Window, self: Window, document: document, name: '', location: Location, …}
*/
```

ex 2: bind() in action
```js
const obj = {
    pi: 3.1415926,
    foo: function () {
        console.log('foo: ', this); // ---> obj

        function baz() {
            console.log('bar: ', this);
        }
        const boo = baz.bind(this); // ---> obj
        // baz.bing(this) will bind baz() to obj.
        boo();
        // when called baz() will be called, returning console.log('bar:', this);

        const bar = () => {
            console.log('bar: ', this);
        }
        bar();
    }
}
obj.foo();
/*
foo:  {pi: 3.1415926, foo: ƒ}
bar:  {pi: 3.1415926, foo: ƒ}
bar:  {pi: 3.1415926, foo: ƒ}
*/
```

*What is .call()?*

- The call() method calls a function with a given this value and arguments provided individually.

ex 3: call() in action
```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
console.log(new Food('salas', 10).category);
/* 
expected output: "cheese"

*/
```
*What is apply?*
- The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7
// Math function was called with null as this, and an array as the only argument.

const min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2

```

ex 2: person object
```js
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]); 
// apply person prototype to person1 object then call fullName function with city and country.
// expected output: "John Doe,Oslo,Norway"
```


# 3. Arrow function


ex 1: Arrow function vs normal function.
```js
const baz = () => {

}
function baz() {

}
```

ex 2: Call and apply more examples
```js

function bar(num1, num2) { // 2
    console.log(this.pi, num1, num2);
}

const baz = bar.bind(this); // lazy
baz(2, 3);

bar.call(this, 2, 3); // 3 // eager
bar.apply(obj, [2, 3]); // obj + [2] // eager
```

*What is .call?*
- The call() method calls a function with a given this value and arguments provided individually.

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"

```


# 4. Event loop
- The event loop is the process that runs the JavaScript code.

- **MDN Definition:**JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.


ex 1: event loop for for loop
```js

for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), (5 - i) * 1000);
}
/*
Event loop - holds the i in the counter.
console.log(v) [0]
console.log(v) [1]
console.log(v) [2]

Output:
8
4
3
2
1
0


Behind the scene

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
 * Execution from tasks queue:
 * () => console.log(i) [4]
 * () => console.log(i) [3]
 * () => console.log(i) [2]
 * () => console.log(i) [1]
 * () => console.log(i) [0]
 * 
 * 
 */

```
- If var was used to create i, it will not hold i in the counter which will not work properly for the for loop. Evey execution will start from the i = 5.

*Tip: always use let and keep it block scope to avoid unnecessary errors.*

*This is a classical interview quetsion.*
```js

for (var i = 0; i < 5; i++) {
    console.log(i);
}

```

# 5. Callback hell
*What is Callback hell?*
- Callback hell is a pattern where a function is called inside another function, which in turn is called inside another function, which in turn is called inside another function, and so on.
- You can't get out of callback hell. Also, this is not a good design.

```js

const foo = () => console.log('foo');
const random = () => Math.floor(Math.random() * 6);

const callFnRandomTime = (callback) => {
    const timer = random();
    console.log(`${timer}s`);

    setTimeout(callback, timer * 1000);
}
// this way is not developer friendly.
callFnRandomTime(() => {
    callFnRandomTime(() => {
        callFnRandomTime(() => {
            callFnRandomTime(() => {
                callFnRandomTime(() => {
                    callFnRandomTime(() => {
                        callFnRandomTime(() => {
                            callFnRandomTime(() => {
                                callFnRandomTime(() => {
                                    foo();
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

```

*What is the solution to not use the callback hell?*
- Use promises.

## 5.1 XHR
- All modern browsers have a built-in XMLHttpRequest object to request data from a server.
- XHR is a class that provides an easy way to make HTTP requests.
```js
const url = 'https://jsonplaceholder.typicode.com/todos/'

function getTodo(url) {
    return new Promise((resolve, reject) => {
        // perform an AJAX request
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               // Typical action to be performed when the document is ready:
               resolve(JSON.parse(xhttp.response));
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    });
}

// start with the id 5, then 12, then 46
getTodo(url + 5)
    .then((data) => {
        console.log(data);
        return getTodo(url + 12);
    })
    .then((data) => {
        console.log(data);
        return getTodo(url + 46);
    })
    .then(console.log);
/*
Output:
- data was retrieved as below from the API.
{userId: 1, id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum', completed: false}
{userId: 1, id: 12, title: 'ipsa repellendus fugit nisi', completed: true}
{userId: 3, id: 46, title: 'vel voluptatem repellat nihil placeat corporis', completed: false}
*/

```
*What is the difference between synchronous and asynchronous.*
- **Synchronous:** after you get the result, you start HTTP request. 
- **Asynchronous:** you start the HTTP request, and then you get the result.

- There are several ways to make asynchronous requests.
1. Promise...then()
```js
getTodo(url + 5)
    .then((data) => {
        console.log(data);
        return getTodo(url + 12);
    })
    .then((data) => {
        console.log(data);
        return getTodo(url + 46);
    })
    .then(console.log);

```
2. PromiseAll(): wait for all promises to resolve.
*What is proimiseAll()?*
- The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
*Notable characteristics:*
- Takes bulks of promises as an input.
- Returns a single promise with an array of results.
- One of the promises rejects, the returned promise rejects.
```js
Promise.all([getTodo(url + 5), getTodo(url + 12), getTodo(url + 46),])
    .then(data => {
        console.log(data);
    })
/*
returned in an array of objects for this particular case.
(3) [{…}, {…}, {…}]
0: {userId: 1, id: 5, title: 'laboriosam mollitia et enim quasi adipisci quia provident illum', completed: false}
1: {userId: 1, id: 12, title: 'ipsa repellendus fugit nisi', completed: true}
2: {userId: 3, id: 46, title: 'vel voluptatem repellat nihil placeat corporis', completed: false}
length: 3
[[Prototype]]: Array(0)
*/
```

3. Async/await: wait for all promises to resolve.
```js
(async () => {
    try {
        const data5 = await getTodo(url + 5);
        console.log(data5);

        const data12 = await getTodo(url + 12);
        console.log(data12);

        const data46 = await getTodo(url + 46);
        console.log(data46);
    } catch (error) {

    }
})();
```

4. Alternative: nested callbacks.
```js
getTodo((data) => {
    print(data);
    getTodo((data) => {
        print(data);
        getTodo((data) => {
            print(data);
        }, 46);
    }, 12);
}, 5);
```
# 6. promise
*What is promise?*
- encapsulate a long logic. You can see the source code from the Google Documentation.
- Promise is a constructor function.
- The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

*How do you create your own promise called myPromise*

```js

class MyPromise {
    #thenCallbackQueue = [];
    #currentData = undefined;
    #catchCallbackQueue = [];

    constructor(executor) {
        try {
            executor(this.#resolve, this.#reject.bind(this));
        } catch (error) {
            this.#reject(error);
        }
    }

    #resolve = (resdata) => {
        setTimeout(() => {
            try {
                this.#currentData = resdata;

                while (this.#thenCallbackQueue.length) {
                    const cb = this.#thenCallbackQueue.shift();

                    if (this.#currentData instanceof MyPromise) {
                        this.#currentData.then((data) => {
                            this.#currentData = cb(data);
                        });
                    } else {
                        this.#currentData = cb(this.#currentData);
                    }
                }
            } catch (error) {
                this.#reject(error);
            }
        }, 0);
    };
    #reject() {}

    then(thencb) {
        this.#thenCallbackQueue.push(thencb);
        return this;
    }
    catch(catchcb) {
        this.#catchCallbackQueue.push(catchcb);
        return this;
    }

    static resolve(resdata) {
        return new MyPromise((res, _) => {
            res(resdata);
        });
    }
    static reject(rejdata) {
        return new MyPromise((_, rej) => {
            rej(rejdata);
        });
    }
    static all(promiseArr) {
        return new MyPromise((res, rej) => {
            const returnArr = [];
            let counter = 0;

            promiseArr.forEach((promise, i) => {
                if (promise instanceof MyPromise) {
                    promise.then((resData) => {
                        returnArr[i] = resData;
                        counter++;
                        if (counter === promiseArr.length) {
                            res(returnArr);
                        }
                    });
                } else {
                    returnArr[i] = promise;
                    counter++;
                    if (counter === promiseArr.length) {
                        res(returnArr);
                    }
                }
            });
        });
    }
}
// test code

const promise1 = MyPromise.resolve(3);
const promise2 = 42;
const promise3 = new MyPromise((resolve, reject) => {
    // resolve('foo');
    setTimeout(resolve, 100, "foo");
});

MyPromise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});

new MyPromise((res, rej) => {
    res();
});

new MyPromise((resolve, reject) => {
    resolve("hello");
})
    .then((data) => {
        console.log(data);
        return new MyPromise((res, rej) => {
            res("world");
        });
    })
    .then(console.log)
    .catch((err) => console.log(err));

hello [thencb,...]
```

```js
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

myPromise
  .then(handleResolvedA, handleRejectedA)
  .then(handleResolvedB, handleRejectedB)
  .then(handleResolvedC, handleRejectedC);
```

ex 1: 
```js

getTodo(url + 5)
    .then((data) => {
        console.log(data);
        return getTodo(url + 12);
    })
    .then((data) => {
        console.log(data);
        return getTodo(url + 46);
    })
    .then(console.log) 
```

ex 2: Promise > then > catch pattern.
```js
// Promise.
promise1
.then(value => { return value + ' and bar'; })
.then(value => { return value + ' and bar again'; })
.then(value => { return value + ' and again'; })
.then(value => { return value + ' and again'; })
.then(value => { console.log(value) })
.catch(err => { console.log(err) });
```

# 7. Async await
- An async function is a function declared with the `async` keyword, and the `await` keyword is permitted within it. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.
ex 1: 
```js
// Statement - Async
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}
asyncCall();
```
*What is the difference between Async/Await and Promise?*
- Promise is an object representing intermediate state of operation which is guaranteed to complete its execution at some point in future.	
- Meanwhile, Async/Await is a syntactic sugar for promises, a wrapper making the code execute more synchronously.

**Async/Await is a new feature in ES8.** 

- You can use promise.all() to wait for all promises to resolve.
- You have to create all promises method such as .then() and .catch(), .resolve() and .reject(), .all().

- *Promise all() will be on the interview question*. If you are sending data to the backend and wait, you can use Promise.all() to wait for all promises to resolve.

# 8. Fetch

*What is fetch?*
- Fetch is a function that is used to make HTTP requests.
*What is axios?*
- Axios is a library that is used to make HTTP requests.

*How does the fetch work?*
- Fetch is a function that is used to make HTTP requests.
```js
// fetch(url) > .then convert to json() > .then console.log or use the data or transfer the data for use
fetch('https://api.github.com/users/github')
    .then(response => response.json())
    .then(data => console.log(data));
```

- Create your own fetch called myFetch().
```js

// myFetch was created using XHR.
function myFetch(url, option) {
    return new Promise((resolve, reject) => {
        const method = option && option.method ? option.method : "GET";
        const xhttp = new XMLHttpRequest();
        xhttp.open(method, url, true);

        if (option && option.headers) {
            Object.keys(option.headers).forEach((key) => {
                xhttp.setRequestHeader(key, option.headers[key]);
            });
        }

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status >= 200 && this.status < 300) {
                // Typical action to be performed when the document is ready:

                resolve({
                    json: function () {
                        return JSON.parse(xhttp.response);
                    },
                });
            }
        };
        option && option.body ? xhttp.send(option.body) : xhttp.send();
    });
}
// Test myFetch


myFetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1,
    }),
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
})
    .then((response) => response.json())
    .then((json) => console.log(json));

myFetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((json) => console.log(json));


```
- you can check the source code to see how it was created.



HW: Project
- Evaluation after to-do-list
- To-Do-list example from the W3School.
- JSON placeholder .com
https://jsonplaceholder.typicode.com/
- appendChild(txt) - use inner HTML. 

- Friday: evaluation - to-do-list.
- Saturday: 
    - Interview or communication 
    - Discuss the evaluation project that you completed.
    - Discuss concepts that you learned.


- Know *Critical render path*:
- *Critical render path* is the path that is rendered when the component is first mounted.
https://developers.google.com/web/fundamentals/performance/critical-rendering-path

- You’ll learn about the Critical Rendering Path, or the set of steps browsers must take to convert HTML, CSS and JavaScript into living, breathing websites. 

https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path
- The Critical Rendering Path is the sequence of steps the browser goes through to convert the HTML, CSS, and JavaScript into pixels on the screen. Optimizing the critical render path improves render performance.The critical rendering path includes the Document Object Model (DOM), CSS Object Model (CSSOM), render tree and layout.