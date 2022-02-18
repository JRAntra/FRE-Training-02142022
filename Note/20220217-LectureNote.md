# Bootstrap

# CSS

- Bootstrap grid systems. 
    - URL: https://getbootstrap.com/docs/4.0/layout/grid/

```html
<div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div>
```

- col: column
- row: row
- number afterward: size

style.css
```css
div[class^='col'] {
    border:
}

```
- Make it responsive
```css
/* Make it responsive buy using a mediaquery*/
@media (min-width: 768px) {
    .col-sm {
        border: 1px solid red;
    }
}
@media (max-width: 576px) {
    .col-12 {
        width: calc(12 / 12*100%);
    }
    .col-6 {
        width: calc(6 / 12*100%);
    }
}
/* Use the flex wrap.*/


```

- `width:100%` is related to a parent. NOT a view port. Enclosing parent. 

1. Responsive design
    - units: %, px, em, rem
    - em: relative to the font-size of the root element or a parent element.

2. Mobile first vs. Desktop first. 
    - Mobile first: the website is designed for mobile first.
        - functional approach
        - mobile audience oriented.
        - content-first
    - Desktop first: the website is designed for desktop first.
        - traditional
        - office audience
        - feature-rich.
    ex) depends on the app. Instagram is mobile first.

3. BEM naming methodology.
    - BEM: Block Element Modifier
    - *Block__Element--Modifier.*
    - BEM is a methodology for naming CSS classes.
    - In an industry setting, it is important to properly name your elements. 
    - top level abraction to the low level details.

4. Make the HW better with BEM. 
    - div.form__container.
    - *form action by default, the webpage (single-page application) will be refreshed.*
    - If you want to partially refresh, you can avaid refreshing by resettting the default. 

    -`<header class="form__signup>`
    -`<div class="form__signup>`
        -`<div class="form__row">`
            -`<div class="form__item">`

    *What is the difference between input type submit and type button?*
    - Be default, type submit will submit the form with onsubmit event.

    *Why do you use var() in css instead of naming color each time?*
    - var() is a function that can be used to create a variable. We can use it over and over.

    ```css
    html {
        /*  */
        font-size: 62.25%;

    }
    body{
        font-size: 1.6rem;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;

    }
    .form_container{
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    /* Other ways 
    1. Flex box - align-items: center;
    2. Grid - justify-content: center;
    3. Text-align: center;
    */
    

    ```
- put the media query at the end. 
- put the variables at the top. 
`What is flex: 1 1 100%`
- This is a short-hand property.

# JavaScript

4. Primitive data type
    - number
    - undefined
    - string
    - boolean
    - null
    - symbol
    - bigint

5. keyword to declare a variable
    - let
    - const
    - var

- Passing by value: we are making a copy memory space.

```js
var c = 3;
function foo(input) {
    input = 6;
    console.log(input);
}
foo(c);
console.log(c);
// 6
// 3
```

```js
var a = 5;
var b = a;
a = 10;
console.log('a:', a, 'b:', b);
// a: 10 b: 5
```

*What is the difference between '==' and '==='?*
- the difference is coercion. 
- === will convert the string into 

```js
console.log(1 == '1'); // true perform coersion
console.log(1 === '1'); // false

var result = true + false;
console.log(result); // 1
```

HW
1. Use CSS var.
2. Use BEM
3. Use flex box. 
4. Use media query.

Final evaulation:
1. Project evauluation
2. Interview: how you implemented the method why you are doing that. 

New assignment:
- Create a blog using CSS. 

