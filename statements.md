1. Introduction to Conditions in JavaScript

In JavaScript, conditions allow us to execute different code based on whether a certain condition is true or false. These are essential to control the flow of a program.

Basic Syntax
if (condition) {
// Code to execute if the condition is true
}

Example:
let number = 10;

if (number > 5) {
console.log("The number is greater than 5");
}

2. The if Statement

The simplest form of conditional checking is the if statement. It checks if a condition is true and executes the block of code inside the if statement if it is.

Syntax:
if (condition) {
// Code to execute if condition is true
}

Example:
let age = 18;
if (age >= 18) {
console.log("You are an adult.");
}

3. The else Statement

The else statement runs if the condition in the if statement is false.

Syntax:
if (condition) {
// Code to execute if condition is true
} else {
// Code to execute if condition is false
}

Example:
let age = 16;
if (age >= 18) {
console.log("You are an adult.");
} else {
console.log("You are a minor.");
}

4. The else if Statement

Sometimes, you want to check multiple conditions. This is where else if comes in. It allows you to check for more than one condition.

Syntax:
if (condition1) {
// Code to execute if condition1 is true
} else if (condition2) {
// Code to execute if condition2 is true
} else {
// Code to execute if none of the above are true
}

Example:
let time = 14;

if (time < 12) {
console.log("Good morning!");
} else if (time < 18) {
console.log("Good afternoon!");
} else {
console.log("Good evening!");
}

5. Nested if Statements

You can place if statements inside each other. This is useful when you need to check multiple conditions in a hierarchical way.

Example:
let num = 10;

if (num > 0) {
if (num % 2 === 0) {
console.log("The number is positive and even.");
} else {
console.log("The number is positive and odd.");
}
} else {
console.log("The number is negative or zero.");
}

6. Logical Operators in Conditions

JavaScript supports logical operators like && (AND), || (OR), and ! (NOT) to combine multiple conditions.

AND (&&)

The condition evaluates to true if both conditions are true.

if (age >= 18 && age <= 65) {
console.log("You are working age.");
}

OR (||)

The condition evaluates to true if at least one condition is true.

if (age < 18 || age > 65) {
console.log("You are either a minor or a senior citizen.");
}

NOT (!)

The condition inverts the truth value of the expression.

let isRaining = false;
if (!isRaining) {
console.log("It’s not raining. You can go outside.");
}

7. Ternary Operator (Conditional Operator)

The ternary operator is a shorthand for the if-else statement.

Syntax:
condition ? expression_if_true : expression_if_false;

Example:
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

8. Switch Statement

The switch statement is useful when you have multiple conditions to compare against a single value.

Syntax:
switch (expression) {
case value1:
// Code to execute if expression matches value1
break;
case value2:
// Code to execute if expression matches value2
break;
default:
// Code to execute if no case matches
}

Example:
let fruit = "apple";

switch (fruit) {
case "apple":
console.log("It’s an apple.");
break;
case "banana":
console.log("It’s a banana.");
break;
default:
console.log("Unknown fruit.");
}

9. Advanced Topics
   Truthy and Falsy Values

In JavaScript, values like null, undefined, 0, NaN, "" (empty string), and false are considered falsy. Everything else is truthy.

Example:
let name = ""; // empty string is falsy

if (name) {
console.log("Name is not empty.");
} else {
console.log("Name is empty.");
}

10. Short-circuiting with Logical Operators

Logical AND (&&) and logical OR (||) can be used to short-circuit conditions:

AND (&&) Short-circuiting:

If the first condition is false, the second condition is not evaluated.

let user = { name: "Alice", age: 30 };
user && console.log(user.name); // prints "Alice"

OR (||) Short-circuiting:

If the first condition is true, the second condition is not evaluated.

let greeting = "Hello" || "Hi";
console.log(greeting); // prints "Hello"

11. Example of Advanced Conditional Logic

You can combine all of the above concepts to create complex logic. Here’s an example using multiple conditions:

let age = 25;
let hasLicense = true;
let isWeekend = true;

if (age >= 18 && hasLicense) {
if (isWeekend) {
console.log("You can drive this weekend.");
} else {
console.log("You can drive on weekdays.");
}
} else {
console.log("You cannot drive.");
}
