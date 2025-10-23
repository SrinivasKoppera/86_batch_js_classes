1. Object Literals
   What is it?

An object literal is the simplest way to create a single object in JavaScript using curly braces {}.

Syntax:
const person = {
name: "Alice",
age: 25,
greet: function () {
console.log("Hello, " + this.name);
}
};

Pros:

Very simple and easy to use
Great for creating single objects

Cons:

Not reusable (you have to copy code to make new similar objects)

2. Factory Functions
   What is it?

A factory function is a function that returns a new object. It’s useful for creating multiple similar objects.

Syntax:
function createPerson(name, age) {
return {
name,
age,
greet() {
console.log("Hi, I’m " + this.name);
}
};
}

const person1 = createPerson("Bob", 30);
const person2 = createPerson("Jane", 22);

Pros:

Reusable and flexible
No need for new keyword
Can be used with closures

Cons:

Slightly slower than constructor/class when creating many objects

3. Constructor Functions
   What is it?

A constructor function is a regular function used with the new keyword to create new object instances.

Syntax:
function Person(name, age) {
this.name = name;
this.age = age;
this.greet = function () {
console.log("Hi, I’m " + this.name);
};
}

const person1 = new Person("Tom", 28);
const person2 = new Person("Lucy", 35);

Pros:

Reusable object creation

Used with new keyword

Can use this and prototype

Cons:

Can be confusing for beginners (because of this and new)

No private variables (unless using closures)

4. Classes (ES6+)
   What is it?

A class is a blueprint for creating objects. It’s syntactic sugar over constructor functions and uses class keyword.

Syntax:
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

greet() {
console.log("Hello, I’m " + this.name);
}
}

const person1 = new Person("Emma", 40);
const person2 = new Person("John", 29);

Pros:

Clean and modern syntax

Supports inheritance using extends

Better for large-scale applications

Cons:

Still uses prototypes under the hood

Not supported in very old browsers (pre-ES6)

/////////////////////

➤ What is a Class?

A class is a blueprint for creating objects with specific properties and methods.

➤ What is an Object?

An object is an instance of a class — created using the new keyword.

Example:
class Student {
constructor(name, age) {
this.name = name;
this.age = age;
}

// Method
displayInfo() {
console.log(`Name: ${this.name}, Age: ${this.age}`);
}
}

// Creating an object
const student1 = new Student("Alice", 21);
student1.displayInfo();

Notes:

The constructor() method runs automatically when you create a new object.

this refers to the current instance of the class.

3. Inheritance
   ➤ What is Inheritance?

Inheritance allows one class (child) to use properties and methods of another class (parent).

Example:
class Person {
constructor(name) {
this.name = name;
}

greet() {
console.log(`Hello, I'm ${this.name}`);
}
}

class Student extends Person {
constructor(name, grade) {
super(name); // call parent constructor
this.grade = grade;
}

showGrade() {
console.log(`${this.name} is in grade ${this.grade}`);
}
}

const student1 = new Student("John", 10);
student1.greet(); // Inherited method
student1.showGrade(); // Child method

Notes:

Use extends to create a subclass.

Use super() to call the parent’s constructor or methods.

4. Encapsulation
   ➤ What is Encapsulation?

Encapsulation means hiding internal details of an object and exposing only what is necessary.

We can do this in JS using private fields and public methods.

🧾 Example:
class BankAccount {
#balance = 0; // private field

deposit(amount) {
if (amount > 0) {
this.#balance += amount;
}
}

getBalance() {
return this.#balance;
}
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100
console.log(acc.#balance); // Error: private field

Notes:

Use # before a property name to make it private.
You can access it only inside the class.

5. Abstraction
   ➤ What is Abstraction?

Abstraction means showing only essential features while hiding unnecessary details.

🧾 Example:
// Abstract base class
class Product {
constructor(name, price) {
if (this.constructor === Product) {
throw new Error("Cannot instantiate abstract class Product directly");
}
this.name = name;
this.price = price;
}

// Abstract method - must be implemented in child classes
calculateGST() {
throw new Error("Method 'calculateGST()' must be implemented.");
}

getFinalPrice() {
// Template method - uses abstract method internally
const gst = this.calculateGST();
return this.price + gst;
}
}

// Concrete class for Electronics
class Electronics extends Product {
calculateGST() {
return this.price \* 0.18; // 18% GST
}
}

// Concrete class for Groceries
class Grocery extends Product {
calculateGST() {
return this.price \* 0.05; // 5% GST
}
}

// Example usage
const laptop = new Electronics("Laptop", 50000);
const rice = new Grocery("Rice Bag", 1000);

console.log(`${laptop.name} Final Price: ₹${laptop.getFinalPrice()}`);
console.log(`${rice.name} Final Price: ₹${rice.getFinalPrice()}`);

🧠 Notes:

Product is an abstract class — you can’t create an object directly from it.
It defines a common interface (calculateGST) for all types of products.
Each subclass (like Electronics and Grocery) implements that method differently.
The abstraction here hides how GST is calculated — the user just calls getFinalPrice().

🔁 6. Polymorphism
➤ What is Polymorphism?

Polymorphism means same method name, different behavior in different classes.

🧾 Example:
class Animal {
speak() {
console.log("Some generic sound");
}
}

class Dog extends Animal {
speak() {
console.log("Bark!");
}
}

class Cat extends Animal {
speak() {
console.log("Meow!");
}
}

const animals = [new Dog(), new Cat(), new Animal()];
animals.forEach(a => a.speak());

🧠 Notes:

Method overriding is a common example of polymorphism.

It allows dynamic behavior depending on the object type.

⚙️ 7. Getters and Setters
➤ What are Getters and Setters?

They allow controlled access to private properties.

🧾 Example:
class User {
#age;

constructor(name, age) {
this.name = name;
this.#age = age;
}

get age() {
return this.#age;
}

set age(value) {
if (value > 0) {
this.#age = value;
} else {
console.log("Age must be positive");
}
}
}

const user = new User("Tom", 25);
console.log(user.age); // getter
user.age = 30; // setter
console.log(user.age);

🧠 Notes:

get defines a getter method.

set defines a setter method.

Useful for validation or computed properties.

🧩 8. Static Methods and Properties
➤ What are Static Members?

Static members belong to the class itself, not to instances.

🧾 Example:
class MathUtils {
static add(a, b) {
return a + b;
}

static PI = 3.14159;
}

console.log(MathUtils.add(3, 5)); // 8
console.log(MathUtils.PI); // 3.14159

🧠 Notes:

You can call static members without creating an object.

Use static keyword before method/property.
