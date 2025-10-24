--> JavaScript Math Functions

JavaScript provides a built-in Math object that contains properties and methods to perform mathematical tasks. It’s important to note that Math is not a constructor, so you don’t need to create an instance of it—just use Math directly.

1. Math.abs(x)
   Returns the absolute value of a number, i.e., the distance between the number and 0 on the number line.

Math.abs(-5); // Output: 5
Math.abs(10); // Output: 10

2. Math.ceil(x)
   Rounds a number up to the nearest integer.

Math.ceil(4.2); // Output: 5
Math.ceil(-3.7); // Output: -3

3. Math.floor(x)
   Rounds a number down to the nearest integer.

Math.floor(4.7); // Output: 4
Math.floor(-2.9); // Output: -3

4. Math.round(x)
   Rounds a number to the nearest integer. If the number is halfway between two integers, it rounds up.

Math.round(4.4); // Output: 4
Math.round(4.6); // Output: 5

5. Math.max(x, y, ...)
   Returns the largest of the zero or more numbers passed as arguments.

Math.max(1, 2, 3, 4); // Output: 4
Math.max(-1, -5, -3); // Output: -1

6. Math.min(x, y, ...)
   Returns the smallest of the zero or more numbers passed as arguments.

Math.min(1, 2, 3, 4); // Output: 1
Math.min(-1, -5, -3); // Output: -5

///////////////////

--> JavaScript Date Functions

JavaScript provides a Date object that allows you to work with dates and times. It can be used to create, manipulate, and format dates.

Creating Dates

1. new Date()
   Returns the current date and time.

let currentDate = new Date();
console.log(currentDate); // Example output: Tue Oct 24 2025 10:52:00 GMT+0000 (UTC)

2. new Date(milliseconds)
   Returns a Date object created from a number representing the number of milliseconds since January 1, 1970 (Unix Epoch).

let dateFromMilliseconds = new Date(1000000000000); // Jan 09 2001
console.log(dateFromMilliseconds);

3. new Date(dateString)
   Creates a Date object from a date string.

let dateFromString = new Date('2025-10-24');
console.log(dateFromString); // Output: Fri Oct 24 2025 00:00:00 GMT+0000 (UTC)

4. new Date(year, month, day, hours, minutes, seconds, milliseconds)
   Creates a Date object with the specified values. Note: The month is zero-indexed (January is 0, February is 1, etc.).

let customDate = new Date(2025, 9, 24, 10, 30); // Oct 24, 2025, 10:30 AM
console.log(customDate); // Output: Fri Oct 24 2025 10:30:00 GMT+0000 (UTC)

--> Getting Date and Time Components

1. date.getFullYear()
   Returns the year of the given date.

let date = new Date();
console.log(date.getFullYear()); // Output: 2025

2. date.getMonth()
   Returns the month (0-11) of the given date (January is 0, December is 11).

let date = new Date();
console.log(date.getMonth()); // Output: 9 (October)

3. date.getDate()
   Returns the day of the month (1-31) of the given date.

let date = new Date();
console.log(date.getDate()); // Output: 24

4. date.getDay()
   Returns the day of the week (0-6) of the given date (Sunday is 0, Saturday is 6).

let date = new Date();
console.log(date.getDay()); // Output: 5 (Friday)

5. date.getHours()
   Returns the hour (0-23) of the given date.

let date = new Date();
console.log(date.getHours()); // Output: 10 (example)

6. date.getMinutes()
   Returns the minutes (0-59) of the given date.

let date = new Date();
console.log(date.getMinutes()); // Output: 52 (example)

7. date.getSeconds()
   Returns the seconds (0-59) of the given date.

let date = new Date();
console.log(date.getSeconds()); // Output: 45 (example)

8. date.getMilliseconds()
   Returns the milliseconds (0-999) of the given date.

let date = new Date();
console.log(date.getMilliseconds()); // Output: 789 (example)

--> Setting Date and Time Components

1. date.setFullYear(year)
   Sets the year of the given date.

let date = new Date();
date.setFullYear(2026);
console.log(date.getFullYear()); // Output: 2026

2. date.setMonth(month)
   Sets the month of the given date (0-11).

let date = new Date();
date.setMonth(2); // March
console.log(date.getMonth()); // Output: 2

3. date.setDate(day)
   Sets the day of the month (1-31) of the given date.

let date = new Date();
date.setDate(15);
console.log(date.getDate()); // Output: 15

4. date.setHours(hours)
   Sets the hour (0-23) of the given date.

let date = new Date();
date.setHours(14);
console.log(date.getHours()); // Output: 14

5. date.setMinutes(minutes)
   Sets the minutes (0-59) of the given date.

let date = new Date();
date.setMinutes(45);
console.log(date.getMinutes()); // Output: 45
