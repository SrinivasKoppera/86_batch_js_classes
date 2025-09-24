JavaScript Strings

A string is a sequence of characters enclosed in either single, double, or backticks. "12asa\*", '', ``

let str1 = "Hello";
let str2 = 'World';
let str3 = `Hello World!`; // Template literals

Basic String Methods

length - Returns the length of the string.

let str = "Hello";
console.log(str.length); // Output: 5

toUpperCase() - Converts all characters to uppercase.

let str = "hello";
console.log(str.toUpperCase()); // Output: HELLO

toLowerCase() - Converts all characters to lowercase.

let str = "HELLO";
console.log(str.toLowerCase()); // Output: hello

charAt() - Returns the character at the specified index.

let str = "Hello";
console.log(str.charAt(0)); // Output: H

indexOf() - Returns the index of the first occurrence of a specified value.

let str = "Hello World";
console.log(str.indexOf("o")); // Output: 4

substring() - Extracts a part of the string between two indices.

let str = "Hello World";
console.log(str.substring(0, 5)); // Output: Hello

includes() - Checks if a string contains a specified substring.

let str = "Hello World";
console.log(str.includes("World")); // Output: true

split() - Splits the string into an array based on a separator.

let str = "apple,banana,cherry";
let fruits = str.split(","); // ["apple", "banana", "cherry"]
console.log(fruits);
