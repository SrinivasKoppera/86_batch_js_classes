🧠 JavaScript Loops - Basics
✅ What is a Loop?

A loop is a way to repeat a block of code multiple times until a certain condition is met.

🔁 1. for Loop
🔹 Syntax:
for (initialization; condition; update) {
// code to run
}

🔹 Example:
for (let i = 1; i <= 5; i++) {
console.log("Number: " + i);
}

🔸 Explanation:

let i = 1: start at 1

i <= 5: loop runs while this is true

i++: increase i by 1 each time

🔄 2. while Loop
🔹 Syntax:
while (condition) {
// code to run
}

🔹 Example:
let i = 1;
while (i <= 5) {
console.log("Number: " + i);
i++;
}

🔂 3. do...while Loop
🔹 Syntax:
do {
// code to run
} while (condition);

🔹 Example:
let i = 1;
do {
console.log("Number: " + i);
i++;
} while (i <= 5);

🔸 Note: This loop runs at least once, even if the condition is false the first time.

💡 Bonus: Loop Control Statements
🔸 break

Exits the loop early.

for (let i = 1; i <= 10; i++) {
if (i === 5) break;
console.log(i);
}

🔸 continue

Skips the current iteration and goes to the next one.

for (let i = 1; i <= 5; i++) {
if (i === 3) continue;
console.log(i);
}

////////////////////////////////

for...of – For Arrays and Iterables

Used to iterate over values in iterable objects like arrays, strings, maps, etc.

🔹 Syntax:
for (let element of iterable) {
// code to run
}

🔹 Example with Array:
let fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
console.log(fruit);
}

🔹 Example with String:
let word = "Hello";

for (let char of word) {
console.log(char);
}

📌 2. for...in – For Objects

Used to iterate over the keys (property names) of an object.

🔹 Syntax:
for (let key in object) {
// code to run
}

🔹 Example:
let person = {
name: "Alice",
age: 25,
city: "New York"
};

for (let key in person) {
console.log(key + ": " + person[key]);
}
