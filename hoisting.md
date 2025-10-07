What is Hoisting?

Hoisting means that variable and function declarations are moved ("hoisted") to the top of their scope (either the global scope or the function scope) during the compilation phase, before the code is actually executed.

11. Variable Hoisting

Using var :

console.log(a); // undefined (not ReferenceError)
var a = 5;
console.log(a); // 5

Why?
Behind the scenes, JavaScript does this:

var a;
console.log(a); // undefined
a = 5;
console.log(a); // 5
var is hoisted and initialized with undefined.

Using let and const :

console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 10;

let and const are hoisted, but they are not initialized.
They stay in the Temporal Dead Zone (TDZ) until the line where they are defined.

What is the Temporal Dead Zone (TDZ)?

The Temporal Dead Zone (TDZ) is a period of time from the start of a block (or scope) until the variable is declared with let or const.

During this time:

The variable exists in memory but is not initialized.
If you try to access or use the variable before its declaration, JavaScript throws a ReferenceError.
This helps catch errors where you try to use a variable too early.

22. Function Hoisting :

Function Declaration:

greet(); // Hello
function greet() {
console.log("Hello");
}

Function declarations are fully hoisted: both the name and the body.

Function Expression:

sayHi(); // ❌ TypeError: sayHi is not a function
var sayHi = function () {
console.log("Hi");
};

Only the var sayHi part is hoisted (initialized as undefined), not the function expression.
