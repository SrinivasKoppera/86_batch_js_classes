1. What is an Event?
   An event in JavaScript refers to any action that the browser or user takes, like clicking a button, typing in a text field, or moving the mouse.

2. What is an Event Handler?
   An event handler (or event listener) is a function in JavaScript that runs when a specific event occurs.

<button id="myButton">Click Me!</button>

<script>
  const button = document.getElementById('myButton');
  // Adding an event listener to the button
  button.addEventListener('click', function() {
    alert('Button Clicked!');
  });
</script>

3. Event Types

--> click: Triggered when an element is clicked.
--> mouseover / mouseout: Triggered when the mouse moves over or out of an element.
--> keydown / keyup: Triggered when a key is pressed or released.
--> submit: Triggered when a form is submitted.
--> focus / blur: Triggered when an element gains or loses focus.

4. Removing Event Listeners

<button id="removeBtn">Remove Click Event</button>

<script>
  function onClick() {
    alert('Button Clicked!');
  }

const button = document.getElementById('removeBtn');
button.addEventListener('click', onClick);

// Remove the event after 3 seconds
setTimeout(() => {
button.removeEventListener('click', onClick);
alert('Event listener removed');
}, 3000);
</script>

5. What is Event Bubbling?
   Event bubbling is the process by which an event starts at the most specific element (the target element) and then propagates (bubbles) up to its ancestors in the DOM hierarchy.

For example, if you click on a button inside a <div>, the click event on the button will bubble up to the parent <div>, then to the <body>, and finally to the <html> element.

How it Works:

    The event is first handled by the innermost element (the target).

    Then, the event moves to the next parent element and so on, until it reaches the root of the document.

<div id="outerDiv">
  <div id="innerDiv">
    <button id="myButton">Click Me!</button>
  </div>
</div>

<script>
  // Adding event listeners at different levels
  document.getElementById('outerDiv').addEventListener('click', function() {
    alert('Clicked outer div!');
  });

  document.getElementById('innerDiv').addEventListener('click', function() {
    alert('Clicked inner div!');
  });

  document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
  });
</script>

What happens:

    First, the button's click event fires.
    Then, the innerDiv's click event triggers.
    Finally, the outerDiv's click event fires.

To prevent the event from bubbling up, you can call event.stopPropagation() inside the event handler.

document.getElementById('myButton').addEventListener('click', function(event) {
alert('Button clicked!');
event.stopPropagation(); // Stops the event from bubbling up
});

6. What is Event Delegation?

Event delegation is a technique where you attach a single event listener to a parent element rather than multiple listeners to each child element. This is especially useful when working with dynamically created elements.

<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
  // Attach a single event listener to the parent (ul)
  document.getElementById('list').addEventListener('click', function(event) {
    // Check if a list item was clicked
    if (event.target.tagName.toLowerCase() === 'li') {
      alert('You clicked: ' + event.target.textContent);
    }
  });
</script>

Why is this useful?

This technique saves memory and processing time since you don’t need to attach individual event listeners to each <li>.
It’s especially effective when the list of items is dynamic (i.e., elements are added or removed from the DOM after the page loads).
