# CSS Concepts

1. 3 ways to implement CSS rules
   - External style sheet
   - Using style tag
   - Using inline attribute
     - Priority
     - Specificity
2. Pseudo class vs. Pseudo elements
3. CSS reset vs CSS normalization
   - CSS box model
   - box-sizing
4. Common CSS selectors
   - class
   - id
   - element
   - universal selector
   - attribute selector: Regex can be used
   - Descendent selector vs. child selector/combinator
5. Margin collapsing
6. CSS positions (positioned elements)
   - static
   - relative
   - absolute (normal document flow)
   - fixed
   - sticky
   - inherit
7. z-index
8. Flexbox
9. CSS grid

# Explore CSS concepts

## 1. 3 ways to implement CSS rules
*What are 3 ways to implement CSS rules?*

1. External style sheet
```html
/* After creating an file calle style.css, whcih include styles*/
<link rel="stylesheet" href="style.css">
```
2. Using style tag
```html
<style>
    body {
        background-color: #f0f0f0;
    }
</style>
```
3. Using inline attribute
```html
<body style="background-color: #f0f0f0">
```
*If all the styles were included, which style gets executed first?*
- The ones with the most *specificity* has the highest priority which is an inline attribute.
*What is specificity?*
- The specificity of a style is determined by the number of classes, id and element name.

- Then, the ones that were written first starting from the top of the document will be executed.

*Order of execution:*
1. inline attribute
2. style tag or external style sheet depending on which one was executed first.
*WARNING1: however, ones that gets executed first will probably be overrided which means it will not take effect.*

*WARNING2: inline is not recommended because it makes your code hard to maintain. It will override other styles.*

2. Pseudo class vs. Pseudo elements
Reference:

MDN Docs:
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

- A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, `::first-line` can be used to change the font of the first line of a paragraph.

- A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, `:hover` can be used to change a button's color when the user's pointer hovers over it.

ex: pseudo element hover
```css
div {
    color: red;
}

div:hover{
    background-color: aqua;
}

/* Modify the text or content*/
p::before {
    content: 'This is a new element--';
}
p::after {
    content: '--and this is the end.';
}
```

3. CSS reset vs CSS normalization
*How do you reset CSS?*
```css
/* CSS Reset*/
*, 
*::before, 
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
} 
```
- We use before and after because pesudo elements are not included with `*` (universal CSS).

*Why do we reset CSS?*
-  If we inspect from Developer Mode, different browsers may have different CSS rules. These rules can be referred to as user agent stylesheets.

*What is user aagent stylesheets?*
- User agent stylesheets are the stylesheets that are applied to the HTML elements by the browser.

- Therefore, you need to reset the CSS so that everything may start from 0, and no unnessary CSS rules will be included.
- Also, In order to avoid cross-device compatibility issues, you should always reset the CSS.
   - CSS box model
   *What is box model?*
    - Box model is the way that a browser determines the size and position of an element.
   - By default in the CSS box model, the width and height you assign to an element is applied only to the element's content box. (margins, paddings and border will be added to the height and width)
   - CSS basic box model shows how the width and height is applied to a box. 
    - Border edge
    - Margin edge
    - Padding edge
   - box-sizing
   *What is box-sizing?*
    - Box-sizing is a CSS property that specifies how the width and height of an element are determined.

    BitDegree: https://www.bitdegree.org/learn/css-box-sizing#:~:text=CSS%20border%2Dbox%20is%20the,borders%20fit%20in%20this%20number.
    - CSS border-box is the most popular choice for setting box-sizing. It guarantees that the content box shrinks to make space for the padding and borders.

    - Therefore, if you set your element width to 200 pixels, border-box makes sure that the content, padding, and borders fit in this number.

4. Common CSS selectors
*What are common CSS selectors?*   
   - class
   ```css
   .container {
       width: 200px;
       height: 200px;
   }
   ```
   - id
   ```css
   #container {
       width: 200px;
       height: 200px;
   }
   ```
   - element
   ```css
    p {
         width: 200px;
         height: 200px;
    }
   ```
   - universal selector
   ```css
   * {
         width: 200px;
         height: 200px;
    }
   ```
   - attribute selector: Regex can be used
   ```css
    [href^='http://'] {
         color: red;
    }
    /* You can use regex to get or filter the specific value of an attribute.*/
   ```
   ex: select two elements 
   ```css
    .container, #container {
         width: 200px;
         height: 200px;
    }
   ```
   *- root of the webpage will be HTML element.*
   - Descendent selector vs. child selector/combinator
   *Waht is descendent selector?*
   - A descendent selector is a selector that matches all the descendants of the element that matches the selector.
   ```css
    .container > p {
         color: red;
    }
   ```
    *What is child selector?*
    - A child selector is a selector that matches all the direct children of the element that matches the selector.
    ```css
    .container p {
         color: red;
    }
    ```
5. Margin collapsing
- The top and bottom margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as margin collapsing.
ex:
```css
h1 {
  margin: 0 0 50px 0;
}

h2 {
  margin: 20px 0 0 0;
}
/*
In the example above, the <h1> element has a bottom margin of 50px and the <h2> element has a top margin set to 20px.

Common sense would seem to suggest that the vertical margin between the <h1> and the <h2> would be a total of 70px (50px + 20px). But due to margin collapse, the actual margin ends up being 50px.
*/
```
6. CSS positions (positioned elements)
- The position property is used to position an element relative to its normal position.
   - static: default position value; It is not a position element and it is not affected by the flow of the page.
   - relative: It is a position element and it is affected by the flow of the page. It makes a reference to the current position of the element.
   - absolute (normal document flow): 
    *What is normal document flow?*
    - The normal document flow is the flow of the page or the way the block or the inline element is displayed on the page.
   *What happen with absolut position?*
   - you are out of normal document flow, which means other element will not recognize this element.
   *How do you implement absolute position?*
   - you need an offset or set top and bottom to 0.
   - fixed: 
    *What is fixed position?*
    - It is a position element and it is affected by the flow of the page. It makes a reference to the viewport/browser window.
   - sticky
    *What is sticky position?*
    - - A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
    - while it is relative, it will not be extracted from the normal document flow.
   - inherit: 
    *What is inherit position?*
    - inherit will inherit properties or cascade from the parent element.
    *what is cascade?*
    - The cascade is an algorithm that defines how to combine property values originating from different sources. 
7. z-index
*What is z-index?*
- z-index is a CSS property that specifies the stack order of an element.
8. Flexbox
*What is flexbox?*
- Flexbox is a layout method that allows you to display items in a flexible manner. (one-dimensional layout)
- You can make it into two dimensional by using nested divs.
9. CSS grid
*What is CSS grid?*
- CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.

- Like tables, grid layout enables an author to align elements into columns and rows. However, many more layouts are either possible or easier with CSS grid than they were with tables.

*WARNING: some browsers won't support CSS grid layout.*

