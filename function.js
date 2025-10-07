// function add(a, b) {
//   return a + b;
// }

// add(20, 50); //function call

// console.log(add(5, 10));
// console.log(add(20, 30));
// console.log(add(100, 200));
// console.log(add(1, 2));

// const multiply = function (a, b) {
//   const names = ["Ravi", "Kumar", "Ajay"];
//   const c = a * b;
//   return c;
// };
// console.log(multiply(5, 10));

// const arr = (a, b) => a * b;

// const a = arr(10, 40);

// console.log(a);

// console.log(names); //?

// const arr2 = (function (a, b) {
//   console.log("mul..", a * b);
// })(5, 8);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const p1 = new Person("Ravi", 24);

// function add(a, b) {
//   return a + b;
// }

// const sum = add(5, 10);

// console.log(sum);

// function greet() {
//   console.log("Hello, World!");
// }

// greet();

// const value = function (a, b) {
//   return a + b;
// };

// console.log(value(10, 20));

// const multiply = () => a * b;

// console.log(multiply(10, 20));

// const aaa = (function name() {
//   console.log("IIF....");
// })();

// const myFunction = function () {
//   const localVar = "I'm local";
//   console.log(localVar);
//   return localVar;
// };

// console.log(myFunction());

// greet("Ravi");

// function greet(params) {
//   console.log("Hello!" + params);
// }

// // addd();
// const addd = function () {
//   console.log("Add...");
// };

// function printArguments() {
//   // console.log(a, b, c);
//   console.log(arguments);
// }

// printArguments(1, 2, 3);

// const add = function (...additional) {
//   return additional;
// };

// const result = add(1, 2, 3, 4, 5, 6, 7, 8, 9);

// console.log(result);

// 5=120! = 5*4*3*2*1 = 120

// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// const result = factorial(10);

// console.log(result);

// 5 * 4 * 3 * 2 * 1 = 120

// Example:
// function add(a, b) {
//   return a + b;
// }

// function operate(a, b, fn) {
//   return fn(a, b);
// }

// const result = operate(5, 10, add);

// console.log(result);

// function outer() {
//   let counter = 0;
//   return function inner() {
//     return counter;
//   };
// }

// const count = outer();
// console.log(count());

// console.log(counter);

// function greet(name, callback) {
//   console.log("Hello, " + name);
//   callback(); // Call the callback function after greeting
// }

// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// // Example usage
// greet("Alice", sayGoodbye);
