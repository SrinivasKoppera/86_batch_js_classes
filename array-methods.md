An array is an ordered collection of values.

let fruits = ["apple", "banana", "cherry"];

Basic Array Methods

length - Returns the number of elements in the array.

let fruits = ["apple", "banana", "cherry"];
console.log(fruits.length); // Output: 3

push() - Adds an element to the end of the array.

let fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // Output: ["apple", "banana", "cherry"]

pop() - Removes the last element from the array.

let fruits = ["apple", "banana", "cherry"];
fruits.pop();
console.log(fruits); // Output: ["apple", "banana"]

shift() - Removes the first element from the array.

let fruits = ["apple", "banana", "cherry"];
fruits.shift();
console.log(fruits); // Output: ["banana", "cherry"]

unshift() - Adds an element to the beginning of the array.

let fruits = ["banana", "cherry"];
fruits.unshift("apple");
console.log(fruits); // Output: ["apple", "banana", "cherry"]

concat() - Merges two or more arrays.

let fruits = ["apple", "banana"];
let veggies = ["carrot", "broccoli"];
let food = fruits.concat(veggies);
console.log(food); // Output: ["apple", "banana", "carrot", "broccoli"]

indexOf() - Finds the first occurrence of an element in the array.

let fruits = ["apple", "banana", "cherry"];
console.log(fruits.indexOf("banana")); // Output: 1

forEach() - Executes a function for each element in the array.

let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function(fruit) {
console.log(fruit);
});
// Output:
// apple
// banana
// cherry

map() - Creates a new array with the results of calling a provided function on every element in the array.

let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num \* 2);
console.log(doubled); // Output: [2, 4, 6, 8]

filter() - Creates a new array with all elements that pass the test implemented by the provided function.

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
