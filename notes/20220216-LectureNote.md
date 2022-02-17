*How many ways to apply the css file?*

1. Style tag: Use the style tag
2. External style sheet: Import using link tag
3. Inline attribute: You can use the style attribute from an html tag.


```styles.css
div {
    width: 100%;
    height: 100px;
    background-color: red;
}
```

```html
<style>
    div {
        width: 100%;
        height: 100px;
        background-color: red;
    }
</style>
```

*What if you are applying different ways to implement css at the same time?*

- One will override others. 
*Which one has more priority?*
- Priority:
    1. Inline: most specific.
    2. Whatever comes at top:
    External
    Style tag
- Specificity: the more specific the css, the higher the priority.
*WARNING: Inline is not recommended because it makes your code hard to maintain. It will override other styles.*

*What is specificity?*
- specificity means the more specific the css, the higher the priority.

*Psedo Element vs Psedo calss?*


MDN Web Docs: 

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements

https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes

- A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, `::first-line` can be used to change the font of the first line of a paragraph.

- A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, `:hover` can be used to change a button's color when the user's pointer hovers over it.

ex 1: pseudo element hover.
```js
div {
    color: red;
}

div:hover{
    background-color: aqua;
}

p::before {
    content: 'This is a new element--';
}
p::after {
    content: '--and this is the end.';
}

/* CSS Reset*/
*, 
*::before, 
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}   
```

- pseudo element: added more to the p tag. 

3. CSS Reset 

- Different browser may have different CSS rules. If we inspect. Therefore, you need to reset the CSS so that everything may start from 0.

- In order to avoid cross-device compatibility issues, you should always reset the CSS.

*Wha tis user agent: stylesheet?*
- something that is being applied by the browser. 
- For the universal CSS, it does not include psedo elements. Therefore, we need to add ::before, and after to the universal CSS.

*What is box-sizing?*
- The box-sizing CSS property sets how the total width and height of an element is calculated.

*CSS box-model?*
- By default in the CSS box model, the width and height you assign to an element is applied only to the element's content box. If the element has any border or padding, this is then added to the width and height to arrive at the size of the box that's rendered on the screen. This means that when you set width and height, you have to adjust the value you give to allow for any border or padding that may be added.

- CSS basic box model shows how the width and height is applied to a box. 
    - Border edge
    - Margin edge
    - Padding edge

*Tip: you can inspect the box model elements*

ex 1: explore the box model.
```css
/* CSS will add width and hieght from the border, mragin, and padding*/
div {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
}
```

*If you want to avoid this, you use the box-sizing: content-box*

*Please refer to the documentation below:*
https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing


- CSS normalization
*What is CSS normalization*
- CSS normalization is a process that makes it easier to read and write CSS.
- There are differnt ways to reset CSS rules. If you follow specific rules, it is called CSS normalization.

- examples of CSS Selectors:
```css
/* Select by class*/
.container {

}

```

- Class selector is more specific so it will override the element selector.

- inline > class > element (div{})

- id selector.
- attribute selecltor: 
```css
[attribute] {

}
div[class^='con'] {

}
```
- select two element at the same time
```css
.container, .container2 {
    /* CSS rules */
}
```

- root of the webpage will be HTML element. 

- You can use *descendent selector* to select only children from the parent. 

- We also have a child combinator, which is used to select all children from the parent.

*What is margin collapsing?*
- The top and bottom margins of blocks are sometimes combined (collapsed) into a single margin whose size is the largest of the individual margins (or just one of them, if they are equal), a behavior known as margin collapsing

- Margin collapse will be applied; the bigger margin takes over the small margin
https://www.w3schools.com/css/css_margin_collapse.asp

*What is CSS position?*
- static is the default position for all css positions. 


*What is poisition element?*
- static: It is not a poisition element.
- relative: the current position will be the reference if you want to change something. 
	*Change top and left?*
	- moved top and left from the original place.
- absoulte
	*The moment you apply the absoulte, it shrunk the element.*
	normal document folow need to know
	*What is normal document flow?*
	- way the block or the inline element is displayed on the page. 
	- When you apply the absoulte, it will be out of the normal document flow. Pretend it is not there. 
	- You need to set the offset if you want to move the (top and bottom)
- fixed
	- extract element from the normal document flow.
	- An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. 
	- viewport/browser window
- sticky
	- It will stick when the mouse is scrolled. 
	An element with position: sticky; is positioned based on the user's scroll position.
	- A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).
	- It will not be extracted from the normal document flow. 
	- 
	
- inherit: position of the element is inherited.
*When will you need to inherit?*
- cascading - inherit.

*What are practical uses?*

- Navbar: fixed position.
- Bootstrap carousel: slides - each slide is moved to its original place. 
- 

*What is z-index?*
- index that shows which one to override. 

*What is Flexbox?*

- One dimensional because it only cares about a line.  
- flex-wrap and flex-direction

*What is grid?*
- Becareful! Certain browser won't support CSS Grid. 
- display: grid > no changes are not applied. 
	- grid-template-columns: 1fr 1 fr 1fr;
	- gap: 50px 100px; (row and column gaps)
	
*Homework?*
- 