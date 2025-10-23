// 1. Object Literrals
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   email: "john.doe@example.com",
//   isMarried: false,
// };

// person["address"] = "123 Main St";

// console.log(person);

// 2. Factory Functions
// function createPerson(firstName, lastName, age, email, isMarried) {
//   return {
//     firstName,
//     lastName,
//     age,
//     email,
//     isMarried,
//   };
// }

// const person = createPerson(
//   "Jane",
//   "Smith",
//   28,
//   "jane.smith@example.com",
//   false
// );

// const person2 = createPerson(
//   "Alice",
//   "Johnson",
//   35,
//   "alice.johnson@example.com",
//   true
// );

// Object.prototype.address = "Unknown";

// console.log(person);
// console.log(person2);
// console.log({});

// 3. Constructor Functions

// function Person(firstName, lastName, age, email, isMarried) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.email = email;
//   this.isMarried = isMarried;
// }

// const person1 = new Person("Bob", "Brown", 40, "bob.brown@example.com", true);
// const person2 = new Person("Eve", "Davis", 32, "eve.davis@example.com", false);

// Person.prototype.address = "Not Provided";

// console.log(person1);
// console.log(person2);

// console.log({});

// 4. ES6 Classes

// class Person {
//   constructor(firstName, lastName, age, email, isMarried) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.email = email;
//     this.isMarried = isMarried;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person1 = new Person(
//   "Charlie",
//   "Wilson",
//   29,
//   "charlie.wilson@example.com",
//   true
// );
// const person2 = new Person(
//   "Diana",
//   "Garcia",
//   26,
//   "diana.garcia@example.com",
//   false
// );

// class Student {
//   constructor(name, age, school) {
//     this.name = name;
//     this.age = age;
//     this.school = school;
//   }
//   // Method
//   displayInfo() {
//     console.log(`Name: ${this.name}, Age: ${this.age}, School: ${this.school}`);
//   }
// }

// const student1 = new Student("Emily", 20, "University A");
// const student2 = new Student("Frank", 22, "University B");

// 1. Inheriteance with ES6 Classes

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
// }

// class Student extends Person {
//   constructor(name, studentId) {
//     super(name);
//   }

//   study() {
//     console.log(`${this.name} is studying.`);
//   }
// }

// class Teacher extends Person {
//   constructor(name, subject) {
//     super(name);
//   }

//   teach() {
//     console.log(`${this.name} is teaching.`);
//   }
// }

// const student = new Student("George", "S12345");
// console.log(student.greet()); // Inherited property

// 2. Encapsulation with ES6 Classes

// class BankAccount {
//   #balance = 0; // private field

//   deposit(amount) {
//     if (amount > 0) {
//       this.#balance += amount;
//     }
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// const acc = new BankAccount();
// acc.deposit(100);
// console.log(acc.getBalance()); // 100
// // console.log(acc.#balance); // Error: private field

// 3. Abstraction Classes with ES6 Classes

// class Product {
//   constructor(name, price) {
//     if (this.constructor === Product) {
//       throw new Error("Cannot instantiate abstract class Product directly");
//     }
//     this.name = name;
//     this.price = price;
//   }

//   // Abstract method - must be implemented in child classes
//   calculateGST() {
//     throw new Error("Method 'calculateGST()' must be implemented.");
//   }

//   getFinalPrice() {
//     // Template method - uses abstract method internally
//     const gst = this.calculateGST();
//     return this.price + gst;
//   }
// }

// // Concrete class for Electronics
// class Electronics extends Product {
//   calculateGST() {
//     return this.price * 0.18; // 18% GST
//   }
// }

// // Concrete class for Groceries
// class Grocery extends Product {
//   calculateGST() {
//     return this.price * 0.05; // 5% GST
//   }
// }

// // Example usage
// const laptop = new Electronics("Laptop", 50000);
// const rice = new Grocery("Rice Bag", 1000);

// console.log(`${laptop.name} Final Price: ₹${laptop.getFinalPrice()}`);
// console.log(`${rice.name} Final Price: ₹${rice.getFinalPrice()}`);

// 4. Polymorphism with ES6 Classes

// class Animal {
//   speak() {
//     console.log("Some generic sound");
//   }
// }

// class Dog extends Animal {
//   speak() {
//     console.log("Bark!");
//   }
// }

// class Cat extends Animal {
//   speak() {
//     console.log("Meow!");
//   }
// }

// const animals = [new Dog(), new Cat(), new Animal()];
// animals.forEach((a) => a.speak());

// class User {
//   #age;

//   constructor(name, age) {
//     this.name = name;
//     this.#age = age;
//   }

//   get age() {
//     return this.#age;
//   }

//   set age(value) {
//     if (value > 0) {
//       this.#age = value;
//     } else {
//       console.log("Age must be positive");
//     }
//   }
// }

// const user = new User("Tom", 25);
// console.log(user.age); // getter
// user.age = 30; // setter
// console.log(user.age);

// class MathUtils {
//   static add(a, b) {
//     return a + b;
//   }

//   static PI = 3.14159;
// }

// console.log(MathUtils.add(3, 5)); // 8
// console.log(MathUtils.PI); // 3.14159
