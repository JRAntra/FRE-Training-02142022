# Bootstrap

# CSS

# Grid

- In order to explore the grid concept, you look at how bootstrap uses the grid system.
URL: https://getbootstrap.com/docs/4.0/layout/grid/

ex: general example.
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

## 1. Column

- In a grid system, you can create columns.
- `<div class="col">` will create the column.
ex: class 'col'
```html
<div class="container">
  <div class="row">
    <div class="col">
      1 of 2
    </div>
    <div class="col">
      2 of 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 of 3
    </div>
    <div class="col">
      2 of 3
    </div>
    <div class="col">
      3 of 3
    </div>
  </div>
</div>
```

- If you want to make it responive, you can add the devices(`-sm`, `-md`, `-lg`, `-xl`) or the size of a screen that you want to adjust to.

![grid system](./img/Grid_options.jpg)

*How do you size the column?*
- You can size the column by setting the number next to the column. 
- Assuming that all columns are consist of 12 columns, you can size the column by setting the number next to the column.

![grid system](./img/grid_with_rows_example.jpg)

```html
<div class="row">
  <div class="col-sm-8">col-sm-8</div>
  <div class="col-sm-4">col-sm-4</div>
</div>
<div class="row">
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
  <div class="col-sm">col-sm</div>
</div>
```


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

- *`width:100%` is related to a parent. NOT a view port. Enclosing parent.*

1. Responsive design
    - units: %, px, em, rem
    *How doe % work?*
    - %: Defines the height/width in percent of the containing block.
    *How does px work?*
    - px: Defines the height/width in pixels.
    *How does em work?*
    - em: The em unit allows setting the font size of an element relative to the font size of its parent. 
    ex:
    ```html
    !DOCTYPE html>
    <html>
    
    <head>
        <title>Em vs Rem</title>
    </head>
    
    <style>
        .parent {
            font-size: 20px;
        }
        /* Font Size of a child becomes 20px*2 = 40px*/
        .child-em {
            font-size: 2em;
            margin: 1.5em;
        }
    </style>
    
    <body>
        <div class="parent">
            This is parent
            <div class="child-em">
                This is Child in em unit system
            </div>
        </div>
    </body>
    
    </html>
    ```
    *How does rem work?*
    - The rem is based upon the font-size value of the root element, which is the <html> element. 
    - And if the <html> element doesn’t have a specified font-size, the browser default value of 16px is used.
2. Mobile first vs. Desktop first. 
    - Mobile first: the website is designed for mobile first.
        - functional approach
        - mobile audience oriented.
        - content-first
    - Desktop first: the website is designed for desktop first.
        - traditional
        - office audience oriented.
        - feature-rich.
    ex) depends on the app. Instagram is mobile first.

3. BEM naming methodology.
    - BEM: Block Element Modifier
    - *Block__Element--Modifier.*
    - BEM is a methodology for naming CSS classes.
    - In industry settings, it is important to properly name your elements. 
    - It is designed to start with a top level abraction to low level details.

    ## Make the HW better with BEM. 
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

    *Tips:*
    - Put the mediaQuery at the end. 
    - put the variables(css) at the top. 
    `flex: 1 1 100%`:This is a short-hand property.

# JavaScript

4. Primitive data type
    - number: number primitive (integers)
    - undefined: undefined primitive
    - string: string primitive (text)
    - boolean: boolean primitive (true/false)
    - null: Object primitive (this shouldn't be but it is in javascript)
    - symbol: Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol that’s guaranteed to be unique.
    - bigint: BigInt is a primitive wrapper object used to represent and manipulate primitive bigint values — which are too large to be represented by the number primitive.

5. keyword to declare a variable
    - var
    *How do we use var?*
    - modifiable variable.
    - var is a keyword that is used to declare a variable.
    - var is function scoped.
    *What is function Scope?*
    - *Function Scope*: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.
    - let
    *How do we use let?*
    - modifiable variable.
    - const
    *How do we use const?*
    - not modifiable variable.
    - let and const are block scoped.
    *What is block scope?*
    - *Block Scope*: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop. To be consise the variables declared inside the curly braces are called as within block scope.

- Passing by value: we are making a copy memory space.
```js
var c = 3;
// input not modified.
function foo(input) {
    input = 6;
    console.log(input);
}
foo(c);
console.log(c);
// 6
// 3
```
- If you want to pass the exact value with the same memory location, you would use a reference var.

*What is the difference between '==' and '==='?*
- == will compare different data type and assume it is same if the value is same, which means, it will perform coercion.
*What is coercion?*
- JS will try to convert the value to the same data type without being instructed.

ex:
```js
console.log(1 == '1'); // true perform coersion
console.log(1 === '1'); // false

var result = true + false;
console.log(result); // 1
```

6. Truthy and Falsy
*What is truthy?*
- In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context.
ex: Truthy values
```js
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity)
// all return true
```
*What is falsey?*
- By the same token, all the things that are not truthy are considered falsey.
- A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.
```js
if (false)
if (null)
if (undefined)
if (0)
if (-0)
if (0n)
if (NaN)
if ("")
// all are false.
```

Things that are coming:

HW1: HTML - create a Signup page.
1. Use CSS var.
2. Use BEM
3. Use flex box. 
4. Use media query.

HW2: CSS - Create a blog using grid

Final evaulation:
1. Project evauluation
2. Interview: how you implemented the method why you are doing that. 



