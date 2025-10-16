🌀 1. Event Loop
Definition:

The Event Loop is the mechanism that allows JavaScript — which is single-threaded — to handle asynchronous operations (like timers, API calls, or file reads) without blocking the main thread.

Explanation:

JavaScript runs code line by line (synchronously) in the Call Stack.

When an asynchronous task (e.g., setTimeout or fetch) is triggered, it’s sent to the Web APIs.

Once the async task finishes, its callback is moved to the Callback Queue.

The Event Loop constantly checks:
👉 “Is the Call Stack empty?”
If yes → it moves the next callback from the queue into the stack to be executed.

In short:

The Event Loop makes sure asynchronous code runs after the synchronous code has finished — without freezing the program.

🧩 2. Callback
Definition:

A callback is a function passed as an argument to another function, which is executed later, usually after an asynchronous operation finishes.

Example:
function fetchData(callback) {
setTimeout(() => {
callback("Data loaded");
}, 2000);
}

fetchData((message) => console.log(message));

Explanation:

Here, callback is passed into fetchData.

It runs after 2 seconds, once the data is “loaded”.

In short:

A callback is a way to say: “When you’re done, run this function.”

⚠️ 3. Callback Hell
Definition:

Callback Hell (also called the Pyramid of Doom) happens when callbacks are nested inside other callbacks, making the code hard to read, debug, and maintain.

Example:
getUser((user) => {
getPosts(user.id, (posts) => {
getComments(posts[0].id, (comments) => {
console.log(comments);
});
});
});

Problems with Callback Hell:

Deep nesting and indentation.

Hard to understand execution flow.

Difficult to handle errors at multiple levels.

Code becomes messy quickly as complexity increases.

In short:

Callback Hell is when too many nested callbacks make your code look like a pyramid ⛰️ and hard to manage.

💎 4. Promise
Definition:

A Promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

States of a Promise:

Pending: The operation is still running.

Fulfilled (Resolved): The operation finished successfully.

Rejected: The operation failed.

Example:
const promise = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("Success!");
}, 2000);
});

promise
.then((result) => console.log(result))
.catch((error) => console.error(error));

Explanation:

A Promise gives you a cleaner way to handle async results.

.then() runs when the Promise is fulfilled.

.catch() runs if the Promise is rejected.

In short:

A Promise is like a “guarantee” that you’ll get a value later — either success or failure.

🧭 5. Async/Await
Definition:

async and await are modern keywords built on top of Promises that make asynchronous code look and behave more like synchronous code.

Example:
async function getData() {
try {
const response = await fetch("https://fakestoreapi.com/products");
const data = await response.json();
console.log(data);
} catch (error) {
console.error(error);
}
}
getData();

Explanation:

async marks a function that returns a Promise.

await pauses execution until the Promise resolves.

The code looks simple and linear — no chaining or nesting.

In short:

async/await makes asynchronous code easier to read and write, like normal synchronous code.

Promise Methods

Promise Methods

1. Promise.all
   Runs multiple promises in parallel and waits until all succeed. If any promise fails, it rejects immediately.

const p1 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("resolved....1111");
}, 1000);
});

const p2 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("resolved....2222");
}, 5000);
});

const p3 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("resolved....3333");
}, 3000);
});

Promise.all([p1, p2, p3])
.then((res) => console.log(res))
.catch((err) => console.log(err));

2. Promise.race

Returns the first promise that settles (fulfilled or rejected).
const p1 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("resolved....1111");
}, 10000);
});

const p2 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("resolved....2222");
}, 5000);
});

function race() {
Promise.race([p1, p2]).then((res) => console.log(res));
}

3. Promise.any()

Returns the first fulfilled promise (ignores rejections).

const p1 = new Promise((resolve, reject) => {
setTimeout(() => {
reject("rejected....1111");
}, 1000);
});

const p2 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("resolved....2222");  
 }, 5000);
});
const p3 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("resolved....3333");  
 }, 3000);
});

Promise.any([p1, p2, p3])
.then((res) => console.log(res)) // Logs: "resolved....3333"
.catch((err) => console.log(err));

4. Promise.allSettled()

Waits for all promises to finish, regardless of success or failure.

const p1 = new Promise((resolve, reject) => {
setTimeout(() => {
resolve("resolved....1111");
}, 1000);
});

const p2 = new Promise((resolve, reject) => {
setTimeout(() => {
reject("rejected....2222");
}, 5000);
});

function parallel() {
Promise.allSettled([p1, p2]).then((results) => {
results.forEach((result) => console.log(result.status, result.value || result.reason));
});
}

parallel();

/////////////////

1. call()

The call() method calls a function immediately, with a specified this value and arguments provided individually.

function greet(city) {
console.log(`Hello, I'm ${this.name} from ${city}`);
}

const person = { name: "Alice" };
greet.call(person, "Paris");

2. apply()

The apply() method calls a function immediately, with a specified this value and arguments provided as an array.

function greet(city, country) {
console.log(`Hello, I'm ${this.name} from ${city}, ${country}`);
}

const person = { name: "Bob" };
greet.apply(person, ["London", "UK"]);

3. bind()

The bind() method returns a new function with a specified this value and optional preset arguments — it does not call the function immediately.

function greet() {
console.log(`Hello, I'm ${this.name}`);
}

const person = { name: "Carol" };
const greetCarol = greet.bind(person);
greetCarol();
// Hello, I'm Carol
