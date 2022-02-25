```css
: root {
    /* Put CSS */
    --height-header: 50px;
    
    --height-todolist: 300px;
    --height-todolist-mobile: 200px;

    --width-todolist: 400px;

    --color-green: rgb(30, 255, 0);
    --color-red-button: rgb(187, 0, 0);
    --color-red-button-hover: rgb(255, 0, 0);
}

html, body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    /* You don't want to see the overflow.*/
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Lobster", cursive;
}

.header {
    posotion: fixed;
    top: 0;
    height: var(--height-header);
    line-height: var(--height-header);
    width: 100%;
    color: white;
    background: linear-gradient(to)
}

.container {
    background-color: beige;

}
```
*QuerySelector vs getElementByTagame*
- GetElementByTagName(): get HTML element by tag name
- QuerySelector(): get the NodeList. 


- QuerySelectorAll follows to rule 
*Tip: use QuerySelector because it increases the number of htmlcollection.*

*What is the difference between QuerySelector vs QuerySelectorAll?*


- Event Bubling and Event Capturing

    - Event bubling, you can add the event listener on the parent and it gets triggered on the child.

