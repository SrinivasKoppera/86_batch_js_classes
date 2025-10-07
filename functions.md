A function in JavaScript is a block of reusable code designed to perform a specific task. Functions can take inputs, process them, and return an output. Functions help make code more modular and organized.

1. Basic Syntax of a Function

The basic syntax of a function in JavaScript is:

function functionName(parameters) {
// Code to be executed
}

function: Keyword that defines a function.
functionName: Name of the function. Should follow the variable naming conventions.
parameters: Values passed into the function (optional).
Code block: The instructions that the function will execute.

Example:
function greet() {
console.log("Hello, world!");
}

greet(); // Calls the function

types of functions :
--> Function Declaration
--> Function Expression
--> Arrow Function
--> Immediately Invoked Function Expression (IIFE)
--> Constructor Function
--> Generator Function

2. Function Parameters and Arguments

Parameters: Variables listed inside the parentheses in the function definition.

Arguments: The actual values passed to the function when calling it.

Example:
function greet(name) {
console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob"); // Output: Hello, Bob!

3. Return Statement

The return statement is used to send a value from the function back to the place where it was called. If no return statement is present, the function returns undefined.

Example:
function add(a, b) {
return a + b;
}

let result = add(5, 3);
console.log(result); // Output: 8

4. Function Expression

Functions in JavaScript can also be defined as expressions. A function expression is created when a function is assigned to a variable.

Example:
const greet = function(name) {
console.log("Hello, " + name + "!");
};

greet("Charlie"); // Output: Hello, Charlie!

In this case, the function is anonymous because it does not have a name.

5. Arrow Functions (ES6)

Arrow functions provide a shorter syntax for writing functions. They also inherit the this value from the surrounding context (lexical scoping).

Syntax:

const functionName = (parameters) => {
// code
}

Example:
const add = (a, b) => a + b;

console.log(add(4, 5)); // Output: 9

If the function body has only one statement, you can omit the curly braces and the return keyword.

6. Function Scope

In JavaScript, scope determines where a variable is accessible. Variables declared inside a function are local variables and can only be accessed within that function.

Example:
function myFunction() {
let localVar = 10; // local variable
console.log(localVar); // Accessible here
}

myFunction();
console.log(localVar); // Error: localVar is not defined

7. Function Hoisting

In JavaScript, function declarations are hoisted to the top of their scope, meaning they can be called before they are defined in the code.

Example:
greet(); // Works fine, even though the function is declared later

function greet() {
console.log("Hello!");
}

However, function expressions (assigned to variables) are not hoisted.

Example:
add(); // Error: add is not a function

const add = function() {
console.log("Adding...");
};

8. Arguments Object

JavaScript functions have an arguments object, which is an array-like object that holds all the arguments passed to the function. It’s available in all functions, even those declared with arrow functions.

Example:
function printArguments() {
console.log(arguments);
}

printArguments(1, 2, 3); // Output: [1, 2, 3]

Note that arrow functions do not have their own arguments object.

9. Default Parameters (ES6)

In ES6, you can set default values for function parameters. If an argument is not passed, the default value will be used.

Example:
function greet(name = "Guest") {
console.log("Hello, " + name);
}

greet(); // Output: Hello, Guest
greet("John"); // Output: Hello, John

10. Rest Parameters (ES6)

Rest parameters allow you to represent an indefinite number of arguments as an array.

Syntax:
function funcName(...parameters) {
// code
}

Example:
function sum(...numbers) {
let total = 0;
for (let num of numbers) {
total += num;
}
return total;
}

console.log(sum(1, 2, 3, 4)); // Output: 10

11. Immediately Invoked Function Expression (IIFE)

An IIFE is a function that is defined and executed immediately. It is often used to create a private scope.

Example:
(function() {
console.log("This function runs immediately!");
})();

12. Recursion

A function is recursive if it calls itself. Recursion is useful for problems that can be divided into smaller, similar problems (like calculating factorials).

Example:
function factorial(n) {
if (n === 0 || n === 1) {
return 1;
} else {
return n \* factorial(n - 1);
}
}

console.log(factorial(5)); // Output: 120

13. Higher-Order Functions

A higher-order function is a function that either takes one or more functions as arguments, returns a function, or both. Common examples are map(), filter(), and reduce().

Example:
function add(a, b) {
return a + b;
}

function operate(a, b, fn) {
return fn(a, b);
}

console.log(operate(5, 3, add)); // Output: 8

14. Closures

A closure is a function that retains access to variables from its lexical scope, even after the outer function has finished executing.

Example:
function outer() {
let counter = 0;
return function inner() {
counter++;
console.log(counter);
};
}

const count = outer();
count(); // Output: 1
count(); // Output: 2

15. Callback Functions

A callback function is a function that is passed as an argument to another function and is executed once a certain task or operation is complete. It's commonly used for asynchronous operations in JavaScript, such as handling events, or working with APIs.

function greet(name, callback) {
console.log("Hello, " + name);
callback(); // Call the callback function after greeting
}

function sayGoodbye() {
console.log("Goodbye!");
}

// Example usage
greet("Alice", sayGoodbye);
