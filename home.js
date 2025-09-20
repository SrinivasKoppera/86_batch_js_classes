// // let, var, const

// let a = 10;
// let b = "Hello"; //'hello' `hello`
// let c = true; // false
// let d = null;
// let e; // undefined

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);

// let aa = null;

// aa = 20;

// let person = {
//   name: "John",
//   age: 30,
//   isMarried: false,
// };

// let arr = ["name", "age", 30, true, null, undefined, { name: "John" }];

// console.log(typeof arr);

// console.log(typeof person);

let a = 10;
let b = 20;

// Arithmetic Operators
console.log("Add+", a + b); // 30
console.log("Sub-", a - b); // -10
console.log("Mul*", a * b); // 200
console.log("Div/", b / a); // 2
console.log("Mod%", b % a); // 0

// Assignment Operators

let c = 10;
let d = 20;

console.log("=", (c = 30)); // 30
console.log("+=", (c += d)); // c = c + 20 => 50
console.log("-=", (c -= d)); // c = c - 20 => 30
console.log("*=", (c *= d)); // c = c * 20 => 600
console.log("/=", (c /= d)); // c = c / 20 => 30
console.log("%=", (c %= d)); // c = c % 20 => 10

// pre increase ++a

console.log("pre++", ++c); // 11 c = 10 + 1 => 11
console.log("post++", d++); // 20 d = 20 ---- d = d + 1 => 21
console.log("pre--", --d); // 21 d = 21 - 1 => 20
console.log("post--", d--); // 20 d = 20 ---- d = d - 1 => 19

// Comparison Operators -- Relational Operators

let e = 10;
let f = 20;

console.log("==", e == f);
console.log("===", e === f);
console.log("!=", e != f);
console.log("!==", e !== f);
console.log(">", e > f);
console.log("<", e < f);
console.log(">=", e >= f);
console.log("<=", e <= f);

// Logical Operators
let g = true;
let h = false;

console.log("AND &&", g && h);
console.log("AND True &&", g && true);
console.log("OR ||", g || h); //
console.log("NOT !", !g);

// Ternary Operator
// ?

let result = !(10 > 20) ? "Yes" : "No";

console.log("Ternary Operator", result);

if (30 > 20) {
  console.log("Yes");
} else {
  console.log("No");
}

// adding  2 numbers
function addNumbers(a, b) {
  return a + b;
}
