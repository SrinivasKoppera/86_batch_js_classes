// const h1El = (window.document.body.children[0].textContent = "Hello from DOM");
// console.log(h1El);

const h1Element = document.getElementsByTagName("h1")[0];
h1Element.textContent = "Hello from DOM";

// console.log(h1Element);

const createDiv = document.createElement("h4");
createDiv.textContent = "This is a new div created using JS";
createDiv.style.color = "blue";

document.body.appendChild(createDiv);

// console.log(createDiv);

const button = document.getElementsByClassName("btn")[0];
// console.log(button);

document.body.removeChild(button);

const para = document.getElementById("intro");
para.style.color = "red";

para.setAttribute("class", "text");

const spanEl = document.createElement("span");
spanEl.textContent = " - This is a span element";

para.appendChild(spanEl);

// console.log(para);

const allElements = document.querySelectorAll("p");

// console.log(allElements);

console.log(para.classList.toggle("text"));
