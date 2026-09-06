// what is string in javascript
// In JavaScript, a string is a sequence of characters used to represent text.
//  Strings are one of the primitive data types in JavaScript and are immutable, 
// meaning that once a string is created, it cannot be changed.

// Strings can be created using single quotes (' '), double quotes (" "), or backticks (` `) for template literals.

// Example of strings in JavaScript:
let singleQuoteString = 'Hello, World!'; // using single quotes
let doubleQuoteString = "Hello, World!"; // using double quotes
let templateLiteralString = `Hello, World!`; // using backticks (template literals)

// Strings can contain letters, numbers, symbols, and whitespace characters.
// Example of string concatenation:
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;

// Example of string interpolation using template literals:
let age = 30;
let greeting = `My name is
    ${fullName} and I am ${age} years old.`;

    // Strings have various methods and properties that allow you to manipulate and work with them, 
    // such as length, toUpperCase(), toLowerCase(), slice(), substring(), indexOf(), and many more.

// Example of string methods:
// Get the length of a string
let str = "Hello, World!";
console.log(str.length); // Output: 13

// Convert to uppercase
console.log(str.toUpperCase()); // Output: "HELLO, WORLD!"

// Convert to lowercase
console.log(str.toLowerCase()); // Output: "hello, world!"

// Extract a substring
console.log(str.slice(0, 5)); // Output: "Hello"

// Find the index of a character
console.log(str.indexOf("W")); // Output: 7

// In summary, strings in JavaScript are used to represent text and provide various methods for 
// manipulation and processing.

// Example of string concatenation and interpolation:
let firstName = "John";
let lastName = "Doe";
let age = 30;