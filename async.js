// 1. Callback Hell Example

// function createOrder(cart) {
//   function proceedToPayment(orderId) {
//     function showOrderSummary(paymentInfo) {
//       function updateWalletBalance(amount) {
//         console.log("Wallet updated with amount: " + amount);
//       }
//     }
//   }
// }

// const cart = ["shoes", "pants", "kurta"];
// createOrder(cart);

// 2. Promise

// const promise = new Promise(function (resolve, reject) {
//   resolve("Promise resolved");

//   // Do some async work

//   console.log("Async work started");
//   setTimeout(function () {
//     // resolve("Promise resolved");
//     reject(new Error("message..."));
//   }, 1000);
// });

// console.log(promise);

// 3. Promise Chaining

// function createOrder(cart) {
//   return new Promise(function (resolve, reject) {
//     // Async work to create order
//     setTimeout(function () {
//       const orderId = "12345";
//       resolve(orderId);
//     }, 1000);
//   });
// }

// const cart = ["shoes", "pants", "kurta"];
// const createOrderPromise = createOrder(cart);

// createOrderPromise
//   .then((orderId) => {
//     console.log(orderId);
//   })
//   .then(() => {
//     proceedPayment(orderId);
//   })
//   .then((paymentInfo) => {
//     showOrderSummary(paymentInfo);
//   })
//   .then((amount) => {
//     updateWalletBalance(amount);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// 4. Async/Await

// async function createOrder(cart) {
//   const res = await fetch("order url");
//   const data = await res.json();
//   return "Order Id: 12345";
// }

// function proceedPayment(orderId) {
//   const res = fetch("payment url");
//   return "Payment Successful";
// }

// console.log(createOrder());

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved....1111");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved....2222");
//   }, 5000);
// });

// function parallel() {
//   const value1 = p1;
//   console.log("first promise");
//   value1.then((res) => console.log(res));

//   const value2 = p2;
//   console.log("second promise");
//   value2.then((res) => console.log(res));
// }

// parallel();

// Promise Methods

// 1. Promise.all

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved....1111");
//   }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("reject....2222");
//   }, 5000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved....3333");
//   }, 3000);
// });

// Promise.all([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// 2. Promise.race

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved....1111");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved....2222");
//   }, 5000);
// });

// function race() {
//   Promise.race([p1, p2]).then((res) => console.log(res));
// }

// race();

// 3. Promise.any

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("rejected....1111");
//   }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved....2222");
//   }, 5000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("resolved....3333");
//   }, 3000);
// });

// Promise.any([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

// 4. Promise.allSettled

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("resolved....1111");
//   }, 1000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("rejected....2222");
//   }, 5000);
// });

// function parallel() {
//   Promise.allSettled([p1, p2]).then((results) => console.log(results));
// }

// parallel();

// console.log(this);

// const obj = {
//   firstName: "chinmay",
//   lastName: "bansal",
//   showFullName: function () {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// obj.showFullName();

// function greet(city) {
//   console.log(`Hello, I'm ${this.name} from ${city}`);
// }

// const person = { name: "Alice" };

// greet.call(person, "Paris", "France");

// function greet(city, country) {
//   console.log(`Hello, I'm ${this.name} from ${city}, ${country}`);
// }

// const person = { name: "Bob" };

// greet.apply(person, ["London", "UK"]);

// function greet() {
//   console.log(`Hello, I'm ${this.name}`);
// }

// const person = { name: "Carol" };

// const greetCarol = greet.bind(person);

// greetCarol();

// const multiply = function (a, b, ...args) {
//   console.log(args[2]);
//   console.log(a * b);
// };

// // multiply(5, 10, 30, 40, 50, 58, 59, 40);

// const arr = [10, 20, 30, 40, 50];

// const [first, second, ...rest] = arr;

// const obj = {
//   firstName: "chinmay",
//   lastName: "bansal",
//   address: {
//     city: "pune",
//     country: "India",
//   },
// };

// const secondObj = { age: 30, ...obj };

// console.log(secondObj);

const obj1 = {
  firstName: "chinmay",
  lastName: "bansal",
  address: {
    city: "pune",
    country: "India",
  },
};

const obj2 = obj1;

const obj3 = { ...obj1 };

obj3.firstName = "poorva";

console.log(obj1.address === obj3.address);

const obj4 = JSON.parse(JSON.stringify(obj1));

console.log(obj1.address === obj4.address);
