// const btnElement = document.getElementById("myBtn");

// const showAlert = () => {
//   alert("Button clicked!");
//   console.log("Button clicked!");
// };

// btnElement.addEventListener("click", () => {
//   alert("Button clicked!");
//   console.log("Button clicked!");
// });
// btnElement.addEventListener("click", showAlert);
// btnElement.addEventListener("mouseover", showAlert);
// btnElement.addEventListener("mouseout", showAlert);

const inputElement = document.getElementById("myInput");

// inputElement.addEventListener("keydown", (event) => {
//   console.log("Key down event:", event.key);
// });

// inputElement.addEventListener("keyup", (event) => {
//   console.log("Key down event:", event.target.value);
// });

// inputElement.addEventListener("change", (event) => {
//   console.log("Key down event:", event.target.value);
// });

// setInterval(() => {
//   console.log("Interval event");
// }, 2000);

// setTimeout(() => {
//   console.log("Timeout event");
// }, 5000);

// function onClick() {
//   alert("Button Clicked!");
// }

// const button = document.getElementById("myBtn");
// button.addEventListener("click", onClick);

// // Remove the event after 3 seconds
// setTimeout(() => {
//   button.removeEventListener("click", onClick);
//   alert("Event listener removed");
// }, 3000);

// document.getElementById("outerDiv").addEventListener("click", function () {
//   alert("Clicked outer div!");
// });

// document.getElementById("innerDiv").addEventListener("click", function (event) {
//   alert("Clicked inner div!");
//   console.log(event);
//   event.stopPropagation();
// });

// document.getElementById("myButton").addEventListener("click", function () {
//   alert("Button clicked!");
//   event.stopPropagation();
// });

// Attach a single event listener to the parent (ul)
// document.getElementById("list").addEventListener("click", function (event) {
//   // Check if a list item was clicked
//   if (event.target.tagName.toLowerCase() === "li") {
//     alert("You clicked: " + event.target.textContent);
//   }
// });

/////////////////////// Related portions of strings.js: //////////////////////

// Array to store all contacts
// let contacts = [];
// let cardCounter = 1;

// // Get DOM elements
// const form = document.getElementById("contactForm");
// const cardsGrid = document.getElementById("cardsGrid");

// // Basic form event handling
// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   // Get form data using FormData object
//   const formData = new FormData(this);

//   // Convert FormData to regular object using loop
//   const contact = { id: Date.now() };

//   for (let [key, value] of formData.entries()) {
//     contact[key] = value;
//   }

//   // Simple validation
//   if (!contact.firstName || !contact.lastName || !contact.email) {
//     alert("Please fill required fields!");
//     return;
//   }

//   // Add to array and create card
//   contacts.push(contact);
//   createCard(contact);

//   // Clear form
//   this.reset();
// });

// // Simple function to create a card
// function createCard(contact) {
//   // Remove "no cards" message
//   const noCards = document.querySelector(".no-cards");
//   if (noCards) noCards.remove();

//   // Create simple card
//   const card = document.createElement("div");
//   card.className = "contact-card";
//   card.dataset.contactId = contact.id;

//   card.innerHTML = `
//           <h3>${contact.firstName} ${contact.lastName}</h3>
//           <p>📧 ${contact.email}</p>
//           ${contact.phone ? `<p>📞 ${contact.phone}</p>` : ""}
//           <button onclick="deleteCard(${contact.id})">Delete</button>
//         `;

//   cardsGrid.appendChild(card);
// }

// // Simple delete function
// function deleteCard(id) {
//   // Remove from array
//   contacts = contacts.filter((c) => c.id !== id);

//   // Remove from page
//   document.querySelector(`[data-contact-id="${id}"]`).remove();

//   // Show message if empty
//   if (contacts.length === 0) {
//     cardsGrid.innerHTML = '<div class="no-cards"><p>No contacts yet!</p></div>';
//   }
// }
