const form = document.getElementById("contactForm");
const cardsGrid = document.getElementById("cardsGrid");

const contacts = [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);

  const contact = { id: new Date() };

  for (let [key, value] of formData.entries()) {
    contact[key] = value;
  }

  contacts.push(contact);
  createCard(contact);
  this.reset();
});

function createCard(contact) {
  console.log(contact);
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
    <button class="delete-btn">Delete</button>
  `;

  cardsGrid.appendChild(card);
}
