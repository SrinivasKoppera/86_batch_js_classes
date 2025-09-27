📌 What is an Object?

An object is a collection of key-value pairs. It's used to represent a real-world entity like a student, car, user, etc.

✅ Syntax:

const student = {
name: "John",
age: 20,
grade: "A"
details:[]
cta : () => {}
};

🔑 Object Keys and Values

Keys: Strings (or Symbols)

Values: Can be anything — string, number, array, function, another object, etc.

🎯 Accessing Values
console.log(student.name); // Dot notation → John
console.log(student["age"]); // Bracket notation → 20

✏️ Updating & Adding
student.age = 21; // Update
student.city = "New York"; // Add new key-value

❌ Deleting
delete student.grade;

Advanced JavaScript Object Methods

These are built-in JavaScript methods that help you manipulate, iterate over, and manage objects more effectively.

🔸 Object.keys(obj)

Returns an array of keys from the object.

const user = { name: "Alice", age: 25, city: "Delhi" };

console.log(Object.keys(user));
// Output: ["name", "age", "city"]

🔸 Object.values(obj)

Returns an array of values from the object.

console.log(Object.values(user));
// Output: ["Alice", 25, "Delhi"]

🔸 Object.entries(obj)

Returns an array of [key, value] pairs.

console.log(Object.entries(user));
// Output: [["name", "Alice"], ["age", 25], ["city", "Delhi"]]

🔸 hasOwnProperty()

Checks if the object has a specific property (not inherited).

const obj = { a: 1 };

console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("b")); // false

🔸 Object.freeze(obj)

Freezes an object so it can't be changed.

const config = { theme: "dark" };
Object.freeze(config);

config.theme = "light"; // ❌ won't change
console.log(config.theme); // "dark"

/////////////////////////////////

> > > > > > > > > > > > Type Coercion <<<<<<<<<<<<<<<

Type coercion is the process where JavaScript automatically converts data types when performing operations involving different types.

Types of Coercion

1. Implicit Coercion (Automatic by JS)

JS tries to convert types automatically during operations like +, ==, etc.

Examples:

'5' + 2 // "52" → number 2 is converted to string
'5' - 2 // 3 → string '5' is converted to number
true + 1 // 2 → true becomes 1
false == 0 // true → false is coerced to 0

🤓 Tip: Implicit coercion often happens with ==, arithmetic operators, and string concatenation.

2. Explicit Coercion (Manual conversion)

You convert the type manually using functions.

Examples:

Number('42') // 42
String(100) // "100"
Boolean(0) // false
parseInt('123abc') // 123

🔄 Type Conversion Rules (Common Cases)
➕ The + Operator

If one operand is a string, JS converts the other to a string.

'10' + 5 // "105"

➖, \*, /, etc.

JS tries to convert both operands to numbers.

'10' - 5 // 5
'10' \* 2 // 20

🤔 Comparison with ==

Performs type coercion.

'5' == 5 // true
0 == false // true
null == undefined // true

🚫 Strict Comparison ===

No coercion, checks type + value.

'5' === 5 // false
0 === false // false

🛑 Beware of Weird Cases!
[] + [] // "" (empty string)
[] + {} // "[object Object]"
{} + [] // 0 (depends on context)
null + 1 // 1
undefined + 1 // NaN

🧪 Falsy and Truthy Values
Falsy Values (convert to false):
false, 0, '', null, undefined, NaN

Everything else is Truthy:
'hello', [], {}, 1, -1, Infinity
