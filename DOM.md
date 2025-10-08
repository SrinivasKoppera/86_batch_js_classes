1. Introduction to the DOM
   What is the DOM?

The Document Object Model is a programming interface for web documents. It represents the page so that programs can manipulate its structure, style, and content.
It allows scripts to update the content, structure, and style of a document dynamically.

DOM Tree Structure:

The DOM represents the HTML document as a tree structure where each node is an object representing a part of the page.

Example:

The <html> element is the root of the tree.

The <body> element is a child of the <html> element.

All elements like <h1>, <p>, etc., are nodes within this structure.

2. Selecting Elements in the DOM

---> document.getElementById():

Selects an element by its ID.

Example:

let element = document.getElementById('myElement');

---> document.getElementsByClassName():

Selects all elements with a specific class name.

Example:

let elements = document.getElementsByClassName('myClass');

---> document.getElementsByTagName():

Selects all elements with a specific tag name.

Example:

let paragraphs = document.getElementsByTagName('p');

---> document.querySelector():

Selects the first element that matches a CSS selector.

Example:

let firstDiv = document.querySelector('.myClass');

---> document.querySelectorAll():

Selects all elements that match a CSS selector.

Example:

let divs = document.querySelectorAll('div');

3. Manipulating Elements

Changing Text Content:

element.textContent: Changes the text inside an element.

Example:

document.getElementById('myElement').textContent = 'Hello, World!';

Changing HTML Content:

element.innerHTML: Changes the HTML content inside an element.

Example:

document.getElementById('myElement').innerHTML = '<strong>Bold Text</strong>';

Changing Styles:

element.style: Modifies the CSS styles of an element directly.

Example:

document.getElementById('myElement').style.color = 'red';

Adding/Removing Classes:

element.classList.add(): Adds a class to an element.

Example:

document.getElementById('myElement').classList.add('active');

element.classList.remove(): Removes a class from an element.

Example:

document.getElementById('myElement').classList.remove('active');

4. Creating and Removing Elements

Creating a New Element:

document.createElement(): Creates a new element.

Example:

let newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div!';

Appending the New Element:

parentElement.appendChild(): Adds the new element to a parent element.

Example:

document.body.appendChild(newDiv);

Removing an Element:

element.remove(): Removes an element from the DOM.

Example:

document.getElementById('myElement').remove();

5. Event Handling

Adding an Event Listener:

element.addEventListener(): Adds an event listener to an element.

Example (Click Event):

document.getElementById('myButton').addEventListener('click', function() {
alert('Button clicked!');
});

Removing an Event Listener:

element.removeEventListener(): Removes an event listener from an element.

Example:

document.getElementById('myButton').removeEventListener('click', myFunction);

Common Events:

click, mouseover, mouseout, keydown, keyup, submit, etc.

6. DOM Traversing

Navigating to Parent Elements:

element.parentNode: Accesses the parent of the element.

Example:

let parent = document.getElementById('myElement').parentNode;

Accessing Child Elements:

element.childNodes: Accesses all child nodes.

element.children: Accesses all child elements.

Example:

let children = document.getElementById('myElement').children;

Accessing Siblings:

element.previousElementSibling: Gets the previous sibling.

element.nextElementSibling: Gets the next sibling.

Example:

let previous = document.getElementById('myElement').previousElementSibling;
