let str = "   hello world javaScript.    ";

// console.log(str.charAt(0));

// console.log(str.indexOf("r", 8));

// let second = "";
// let indexR = -1;

// for (let chat of str) {
//   if (chat === "l") {
//     second += chat;
//     if (second.length === 3) {
//       indexR++;
//       break;
//     }
//   }
//   indexR++;
// }

// console.log(indexR);

// console.log(str.lastIndexOf("r"));

// console.log(str.split("."));
// console.log(str.replace("javaScript", "JS"));
// console.log(str.includes("world"));

// console.log(str.trim());

//////////////.  Array.    ////////////////

// CRUD

let fruits = ["apple", "banana", "cherry", "kiwi", "orange"];

// fruits[3] = "mango";
// console.log(fruits[1]);
// fruits[1] = "grapes";

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArr = num.forEach((eachNum, index) => eachNum + 10);

const newArrr = num.map((eachNum, index) => eachNum + 10);

const filterArr = num.filter((eachNum) => eachNum >= 5);

console.log("forEach", newArr);
console.log("map", newArrr);
console.log("filter", filterArr);
