// what is dataype conversion in javascript
// Data type conversion in JavaScript refers to the process of converting a value 
// from one data type to another. This can happen implicitly (type coercion) or explicitly
//  (using functions or methods).

// Implicit Conversion (Type Coercion)
let num = 10; // number
let str = "5"; // string

let age = "33"; // string
console.log(typeof age); // string

let uniqueage = Number(age); // explicit conversion from string to number
console.log(typeof uniqueage); // number

let value = null; // null
console.log(typeof value); // object

let newvalue = String(value); // explicit conversion from null to string
console.log(typeof newvalue); // string

let isStudent = true; // boolean
let studentStatus = String(isStudent); // explicit conversion from boolean to string
console.log(typeof isStudent);
console.log(typeof studentStatus); // string

let bigNumber = 12345678901234567890n; // BigInt
let bigNumberString = String(bigNumber); // explicit conversion from BigInt to string
console.log(typeof bigNumber); 

let undefinedValue; // undefined
let undefinedString = String(undefinedValue); // explicit conversion from undefined to string
console.log(typeof undefinedString); // string

// "33" => 33 // string to number

// 33 => "33" // number to string

// true => "true" // boolean to string

// "true" => true // string to boolean

// false => "false" // boolean to string

// null => "null" // null to string

// undefined => "undefined" // undefined to stringx

// true => 1 // boolean to number

// false => 0 // boolean to number

// "1" => 1 // string to number

// "0" => 0 // string to number


