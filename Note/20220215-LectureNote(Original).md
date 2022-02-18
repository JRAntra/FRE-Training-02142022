Question based learning.

1. What will happen if you open google.com to search somthing?

    - Before we send GET request to a web server, we need to know the address of the web server. 
    - Basically URL contains the address of the web server and the path to the file on the server. 
    - You use URL to check up the IP address from DNS.

    - IP Address:
    - DNS: Domain Name Service
    - HTTP: Hypertext Transfer Protocol

- DNS lookup.
    - 
    - If you enter the URL, the browser checks the DNS server to find the IP address of the web server.
    - If nothing is found, the browser will show the page from the cache.


2. HTTP requests
    - HTTPS: secure HTTP.
    - Common Protocols: FTP, SMTP, UDP, etc.

*How do you check HTTP request: use Chrome dev tools: click Netwrok?*
1. Click Network
2. Disable Check
3. 

- The primary or most commonly-used HTTP methods are POST, GET, PUT, PATCH, and DELETE.

- Remote Address: 142.250.217.129:443 (tHREE digit at the end is the port number)

- Default port number for  HTTP is 80..
- Status Code: 200 (success), 404 (not found), 500, etc.

*What is cookie?*
- HTTP cookies are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user’s web browser.
- Key value pairs super long strands.
- Different domain has different cookies.
- Cookies are stored on the user’s computer.
- Local Storage is a feature of HTML5 that allows you to store data locally on a user’s computer.

*What is the differnce between cookie and local storage?*
https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies
Similarity:
- Local storage is a feature of HTML5 that allows you to store data locally on a user’s computer.
- Cookies are stored on the user’s computer.

Difference:
- Size of the cookie is very limited.
- Local storage is much larger.
- Purpose
- How we use to store data.

- By default, we can manipulate the cookie. You can use JavaScript to manipulate the cookie.

```js
Cookies are smaller and send server information back with every HTTP request, while LocalStorage is larger and can hold information on the client side.
```

- Session Storage: 

- Local Storage: retrieve local

- Cookie Storage: Change cookie. 

- Cookie has an expiration date. 
- Expiration date: notify the server that the information is obsolete but the date remains.

*Examples of sample:*

- DOM: Document Object Model. 
- DOM is a programming interface for HTML and XML documents.

- Response from the server comes in DOM. 

- The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.

- CSSOM: CSS Object Model.

- HTML is stateless protocol.
*What is stateless?*
- once time communication.

Example: Amazon visit the website.

- A cookie contains user information and remember. 

CRUD: Create, Read, Update, Delete
    - GET: Retrieve.
    - DELETE: Delete.
    - PUT: Update.
    - POST: Create.
    - PATCH: Update - NOT really common. 

PATCH and PUT are the same.
What is the differencbe between PATCH and PUT?
- PATCH is used to update the information.
- PUT is used to create the information.
- Difference is that how they are going to update things. 

*Not Recommended:*
- You can use GET to create resources. This is not optimal and secure because the URL is visible. The space is very limited. 

- Best Practice of CRUD. (Used in many interviews)
- GET: Retrieve.
    - Security: POST is more secured. 

- You can also use POST to update. This is not the best practice. 

- working with RestFUL API, you have to follow the best practices.

Status code:
- Common Status code:
    - 200: OK
    - 201: Created
    - 204: No Content
    - 400: Bad Request
    - 401: Unauthorized
    - 403: Forbidden
    - 404: Not Found
    - 500: Internal Server Error

- Status code is sent from the server, if you type gibberish, no status code is sent.

HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

- We are using html5 when we choose html.
- Xhtml used to be used. It is a previous version.


i18n and, L10n
*What is i18n?*
- Internationalization: 
    - superset of locatlization.
    - It is a set of rules that specify how to translate text from one language to another.

*What is L10n?*
- Localization: Make the website more user friendly.

- Internationalization is the process of designing and developing your software or mobile application product so it can be adapted and localized to different cultures, regions, and languages. 
- Localization is the adaptation of your software or mobile application product to meet the language, culture, and other requirements of each locale.
- g11n: Globalization.
- L12y: Localizability.

`<head>` tag is for meta information.
- Meta information is information that describes the document.
- Meta data is about HTML document. It is not for display. It is for search engine.

*How do you link the css?*
- use the link tag

```js
    <link rel="stylesheet" href="/styles.css" />
    
```

*Where do you put the script?*
- Ideally, at the end because you want to have all the HTML tags ready before you want to manipulate with a javascript.
```html
<script src="/app.js"></script>
<!-- Deferr attribute would allow you to put it at top.-->
```
- Industry level project - if you put the script at the bottom, the user will see the page loading slowly.

- The best practice is to put the attribute 'defer' at the top in the head.

- defer attribute, it lets the script run after the page is loaded.

- The defer attribute is a boolean attribute.

- If the defer attribute is set, it specifies that the script is downloaded in parallel to parsing the page, and executed after the page has finished parsing.

- async: run in the background. It won't wait for DOM to finish loading. It is better like stand alone add and counter. 

- We can use defer to regulate the sequence of the script. 

- If the async attribute is set, the script is downloaded in parallel to parsing the page, and executed as soon as it is available. The parsing of the page is interrupted once the script is downloaded completely, and then the script is executed, before the parsing of the rest of the page continues.

```js
function foo() {
    console.log(this)
}
foo();
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
```

*What is the keyword called "this"?*
- this is a keyword that refers to the current object.

*How do you look at the DOM?*
```js
console.log(document);
// you can get the document in the console..
```

- If you run the code in the node, you can see the global object not document. 

*What if you call the function?*
```js
function foo() {
    console.log("called");
}
console.log(foo);
console.log(foo());
/*
called
undefined
*/
```

*What is inline?*
- - top and bottom padding margin won't be respected.
*Difference between the node.js and web?*

- The first thing that we need to be clear about is the ECMAScript.
- ECMAScript is a specification of the JavaScript language.

- JavaScript: ECMAScript web API.
- NodeJS: ECMAScript + node API.
- node API has its own methods, filesystem, and others.

*What is the difference between `<div>` and `<span>`?*

div has diplay: block. Get the full length. 

*What is the block element?*
- A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.

- A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

- Two commonly used block elements are: <p> and <div>.

*What is in-line block?*


- Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.
- Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.


*What is symantic HTML?*
- A semantic element clearly describes its meaning to both the browser and the developer.

- Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.

- Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

- It also helps the accessiblity. User and how they are going to access the website. 
- If there are disabled person or people who are blind, they can still read the content.
- They are going to use the screen reader, and it makes the screen reader easier to understand the content. 

- 5O8 policy that you ahve the right accessbility in the website.

We can ALSO USE ARIA ATTRIBUTE TO improve the accessibility.

- In general, it makes the non-semantic elements more semantic. 
