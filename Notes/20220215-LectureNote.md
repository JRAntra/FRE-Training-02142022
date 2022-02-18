
Question:
What will happen if you open google.com to search something?
Steps: 

Answer:
1. Using the URL, the browser will contact DNS server to get the IP address of a web server. 
2. Then, it will send GET request to a server to get information required to display a web page.


1. DNS 
*What is DNS?*
- DNS stands for Domain Names System (DNS).
- The phonebook of the Internet. 
- Using the domain names, it will look up IP Address.
- Most of the websites use domain names instead of IP Address because it is easily understood by human.
   - IP address
   *What is IP Address?*
   IP Address is a a unique string of characters that identifies each computer using the Internet Protocol to communicate over a network.
   - DNS lookup:
   *Waht is DNS look up?*
   Domain name system (DNS) lookups are how end users obtain the websites they search for. 
2. HTTP request
- client send out HTTP request to the server to retrieve the web page.
- is the foundation of data communication for the World Wide Web.
- the Web’s application-layer protocol for transferring various forms of data between server and client like plaintext, hypertext, image, videos and sounds.
   - HTTP/HTTPS (stateless)
   *What is HTTP?*
   - HTTP stands for HyperText Transfer Protocol.
   - HTTP is a stateless protocol, because an HTTP server maintains no information about the clients. 
   *How does HTTP work?*
   - HTTP is implemented in both a client and a server programs.
   Steps:
   1. The HTTP client first initiate a TCP connection with the server. 
   2. Once the connection is established, the browser and the server process access TCP through their socket interfaces.

   *What is HTTPS?*
   - HTTPS : HTTPS consists of communication over Hypertext Transfer Protocol (HTTP) within a connection encrypted by Transport Layer Security, or its predecessor, Secure Sockets Layer.
   - HTTPS are secured HTTP
   - Common protocols: FTP, SMTP, UDP, etc.
   *What are protocols?*
   Protocol:  A Protocol is a standard procedure for defining and regulating communication. For example TCP, UDP, HTTP etc.
   *What is TCP?*
   TCP stands for Transmission Control Protocol a communications standard that enables application programs and computing devices to exchange messages over a network. It is designed to send packets across the internet and ensure the successful delivery of data and messages over networks.
   *What is UDP?*
   User Datagram Protocol (UDP) is a communications protocol that is primarily used to establish low-latency and loss-tolerating connections between applications on the internet.
   
   UDP speeds up transmissions by enabling the transfer of data before an agreement is provided by the receiving party. 
   
   As a result, UDP is beneficial in time-sensitive communications, including voice over IP (VoIP), domain name system (DNS) lookup, and video or audio playback.

	*What are the difference between persistent and Non-persistent Connection?*
	- In non-persistent connection each request/response pair are sent over a separate TCP connection. 
	- In persistent connections all of the requests and their corresponding responses are sent over the same TCP connection.
	*What are commonly used HTTP methods?*
	POST, GET, PUT, PATCH, and DELETE.
	*What are number next to the ip address?*
	- ex: 142.250.217.129:443 - Those are a port number
	- Default port number for HTTP is 80.
	
3. Cookie vs. Local Storage vs. Session Storage
	*What are cookies?*
	- A cookie is a small piece of text sent to your browser by a website you visit. 
	- HTTP cookies are small blocks of data created by a web server while a user is browsing a website.
	- Cookies are placed on the user's computer or devices by user's web browser. 
	- Cookies are comprised of key and value.
	- Different domain has different cookies.
	- Stores a sensitive data.
	- Size of the cookie is ver limited; lesser than Local Storage.
	*What is a local storage?*
	- Local Storage is a feature of HTML5 that allows you to store data locally on a user's computer. 
	*What is a session storage?*
	- Session storage and local storage can be defined together since they both store data in the local storage of a user.
	- localStorage and sessionStorage are perfect for persisting non-sensitive data needed within client scripts between pages (for example: preferences, scores in games). The data stored in localStorage and sessionStorage can easily be read or changed from within the client/browser so should not be relied upon for storage of sensitive or security-related data within applications.
	- Session storage will generally allow you to store any primitives or objects supported by your Server Side language/framework.
	*How do you access Local Storage or Cookies?*
	- You can use JavaScript to manipulate or change data inside a local storage and a cookie.
	
	*What are the differences in a nutshell then?*
	Cookies (for a Server)
	- Stores sensitive user information about the login information.
	- Given by a server to validate a user.
	- Lesser size than the local storage
	- Cookies have an expiration date (this is for a server. cookies might still be in the user's PC)
	Local Storage (for a Client)
	- Stores less sensitive information.
	- Usually stores client's personal information that helps navigate the website.
	- Larger size than the cookies.
   - Difference: size, purpose, structure
4. Response
   - DOM: Document Object Model
	*What is DOM?*
	- The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. 
	- DOM is a programming interface for HTML and XML documents.
	
   - CSSOM: CSS Object Model.
5. CRUD: Create, Read, Update, Delete
   - Get: Retrieve
   - Delete: Delete
   - Put: Update
   - Post: Create
   - PatchL Create
   - Best practices of CRUD
	1. Don't use GET to update information because it shows data in URL. This is not optimal and secure because URL is visible.
	2. Instead use POST or PATCH to update information because it updates the body.
	- If you are working with RestfulAPI, you have to follow the best practices and procedures.
6. Status code
   - Common Status code:
    - 200: OK - Request succeeded and the information is returned in the response.
    - 201: Created
	- 204: No Content
	- 301: Moved Permanently - Requested object has been permanently moved; the new URL is specified in Location: header of the response message. The client software will automatically retrieve the new URL.
    - 400: Bad Request - This is a generic error code indicating that the request could not be understood by the server.
    - 401: Unauthorized
    - 403: Forbidden
    - 404: Not Found - The requested document does not exist on this server.
    - 500: Internal Server Error - : The requested HTTP protocol version is not supported by the server.
   - Status code is sent from the server, if you type gibberish, no status code is sent.

*Exploring HTML*:
```html
<!DOCTYPE html>
<html lang="en">
<!-- head contains meta variables that are hidden from the user. It is for -->
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

7. i18n, L10n, g11n, L12y
*what is i18n?*
- i18n stands for Internationalization.
- It is a set of rules that specify how to translate text from one language to another.
- (additional) Internationalization is the process of designing and developing your software or mobile application product so it can be adapted and localized to different cultures, regions, and languages. 
*What is L10n?*
- Localization: Make the website more user friendly.
-  Localization is the adaptation of your software or mobile application product to meet the language, culture, and other requirements of each locale.
- g11n: Globalization.
- L12y: Localizability.

*How do you link CSS?*
```html
<link rel="stylesheet" href="/styles.css">
```
*How do you link JavaScrip file?*
```html
<script src="/app.js"></script>
```

*Where do you put the script?*
- The best practice is to put the script at the `<head>` tag. and give defer attribute.
```html
<script src="demo_defer.js" defer></script>
```

8. defer vs. async
- Defer is recommended for industry-level project.

*What is defer attribute?*
- The defer attribute is a boolean attribute.
- If the defer attribute is set, it specifies that the script is downloaded in parallel to parsing the page, and *executed after the page has finished parsing.*

*What is async attribute?*
- The async attribute is a boolean attribute.
- If the async attribute is set, the script is downloaded in parallel to parsing the page, and executed as soon as it is available. The parsing of the page is interrupted once the script is downloaded completely, and then the script is executed, before the parsing of the rest of the page continues.
- Basically, async runs in the background and executed immediately as it is available.

*What does below code returns?*
```js
function foo() {
   console.log(this);
}
foo();
// Output: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// returns a Window object which is the object offered by the Web API.
```

*What is the keyword called 'this'?*
- 'this' is the keyword that refers to the current object.

*How do you look at DOM?*
```js
console.log(document);
// this will return the whole HTML document that contains tags to render the current web page.
```
*What will happen in the node?*
- If you run the below code, you will see the global object, not a document object.
```js
function foo() {
   console.log(this);
}
foo();
```

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
9. JavaScript vs. Node
   - JS: ECMAScript + WebAPI
   - Node: ECMAScript + NodeAPI
*What is ECMAScript?*
- ECMAScript is a specification of the javascript language.

10. block vs. inline vs. inline-block
*What is inline?*
- Inline is a style that is used to display text or images in a single line.
- top and bottom padding or margin won't be respected.
*What is a block?*
- A block-level element always takes up the full width available (stretches otu to the left and right as far as it can.)
- top and bottom padding or margin will be respected.
*What is inline-block?*
- Inline-block is a style that is used to display text or images in a single line.
- top and bottom padding or margin will be respected.
- with and height will be adjustable.

11. Semantic HTML
*What is symantic HTML?*
- A semantic element clearly describes its meaning to both the browser and the developer.
- Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.
- Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

*What else does it do?*
- It also helps the accessiblity. User and how they are going to access the website. 
- If there are disabled person or people who are blind, they can still read the content.
- They are going to use the screen reader, and it makes the screen reader easier to understand the content. 

12. ARIA attributes

- We can also use an aria attribute improve the accessibility.
- ARIA is a standard for accessibility.

