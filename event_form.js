const form = document.getElementById("contactForm");
const cardsGrid = document.getElementById("cardsGrid");

const contacts = loadContacts();

// Load contacts from localStorage on page load
function loadContacts() {
  const savedContacts = localStorage.getItem("contacts");
  return savedContacts ? JSON.parse(savedContacts) : [];
}

function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}

function initializePage() {
  if (contacts.length === 0) {
    return;
  } else {
    contacts.forEach((contact) => createCard(contact));
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  const contact = { id: Date.now() }; // Use timestamp for unique ID

  for (let [key, value] of formData.entries()) {
    contact[key] = value;
  }

  // Add to contacts array
  contacts.push(contact);

  saveContacts();

  // Create card and reset form
  createCard(contact);
  this.reset();
});

function createCard(contact) {
  //Remove "No contacts yet!" message if it exists
  const noCards = document.querySelector(".no-cards");
  if (noCards) {
    noCards.remove();
  }

  // Create a simple card
  const card = document.createElement("div");
  card.className = "contact-card";
  card.dataset.contactId = contact.id;

  card.innerHTML = `<h3>${contact.firstName} ${contact.lastName}</h3>
    <p><strong>Email:</strong> ${contact.email}</p>
    <p><strong>Phone:</strong> ${contact.phone}</p>
    <p><strong>Message:</strong> ${contact.message}</p>
    <button class="delete-btn" onclick="deleteContact(${contact.id})">Delete</button>
  `;

  cardsGrid.appendChild(card);
}

function deleteContact(contactId) {
  const index = contacts.findIndex((c) => c.id === contactId);

  if (index > -1) {
    contacts.splice(index, 1);
  }

  saveContacts();

  const cardElement = document.querySelector(
    `[data-contact-id='${contactId}']`
  );
  cardElement.remove();
}

document.addEventListener("DOMContentLoaded", initializePage);

////////////////////////////////////////////////
// client side Storage  mechanisms

// 1. localStorage
// 2. sessionStorage
// 3. cookies
// 4. Cache Storage

// CRUD

// localStorage.setItem("name", "John"); // Create
// // JSON --- javascript Object Notation

// const user = { name: "John", age: 30, isMarried: false };

// // console.log(typeof user);

// const jsonObj = JSON.stringify(user);

// // console.log(typeof jsonObj);

// localStorage.setItem("user", jsonObj);

// const userDta = localStorage.getItem("user");

// const userObj = JSON.parse(userDta);

// console.log(userObj);

// localStorage.removeItem("name"); // Delete

// localStorage.clear(); // Delete all
