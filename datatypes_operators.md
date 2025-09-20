1. Data Types in JavaScript
   JavaScript has both primitive and non-primitive data types.

---- > Primitive Data Types -- imutable

1. Number – Represents both integer and floating-point numbers.
   Example: let x = 5; or let y = 3.14;

2. String – A sequence of characters enclosed in single, double, or backticks (for template literals).
   Example: let name = 'John1'; --- 'sdfghjhgfdfgf'

3. Boolean – Represents true or false values.
   Example: let isActive = true;

4. Null – Represents a "null" value (no value).
   Example: let emptyValue = null;

5. Undefined – Represents a variable that has been declared but not assigned a value.
   Example: let notAssigned; // undefined

6. Symbol – Represents a unique, immutable value, used for object property keys.
   Example: let sym = Symbol('description');

7. BigInt – Represents large integers that can't be represented by the Number type.
   Example: let largeNum = 1234567890123456789012345678901234567890n;

----> Non-Primitive Data Types -- mutable

1. Object – A collection of properties and values.
   Example: let person = { name: 'John', age: 30 };

2. Array - collection multi type of values
   Example: let person = [ 'name', 'age', 30 ];

========= Operations in JavaScript======

JavaScript has several types of operations like arithmetic, comparison, logical, etc.

11. Arithmetic Operations

Addition (+) – Adds two numbers.

Example: let sum = 10 + 5; // 15

Subtraction (-) – Subtracts one number from another.

Example: let diff = 10 - 5; // 5

Multiplication (\*) – Multiplies two numbers.

Example: let product = 10 \* 5; // 50

Division (/) – Divides one number by another.

Example: let quotient = 10 / 2; // 5

Modulo (%) – Returns the remainder of a division.

Example: let remainder = 10 % 3; // 1

Exponentiation (\*\*) – Raises a number to a power.

Example: let power = 2 \*\* 3; // 8

22. Assignment Operations

let a = 10

Used to assign a value

Operator. Example. Equialent to
= a = 10
+= a += b a = a + b
-= a -= b a = a - b
_= a _= b a = a \* b
/= a /= b a = a / b
%= a %= b a = a % b
**= a **= b a = a \*\* b

a = 10 , b = 2. 10 \*\* 2

33. Comparison Operations

a = 10, b = 20

Operator. Example.  
 == a == b Checks if two values are equal (Loose )
=== a === b Checks if two values are equal and of the same type.(Strict)
!= a != b Not equal to

>                a > b     Greater than
>
> < a < b Less than

44. Logical Operations

AND (&&) – Returns true if both operands are true.
let result = a > b && a < b //
Example: true && true // true

OR (||) – Returns true if at least one operand is true.

Example: true || false // true

NOT (!) – Reverses the logical state.

Example: !false // true

55. Ternary Operator
    Shortcut for if...else statements

syntax : condition ? true : false

type of and instanceof
