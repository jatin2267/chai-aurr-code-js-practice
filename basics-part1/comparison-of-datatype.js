// what is comparison of datatype in javascript
// Comparison of data types in JavaScript refers to the process of evaluating two values 
// to determine their relationship, such as equality or inequality. JavaScript provides various 
// operators for comparison, including ==, ===, !=, !==, <, >, <=, and >=.

// console.log(2 > 1); // greater than operator
// console.log(2 < 1); // less than operator
// console.log(2 >= 2); // greater than or equal to operator
// console.log(2 <= 2); // less than or equal to operator
// console.log(2 == 2); // equal operator
// console.log(2 != 2); // not equal operator
// console.log(2 === 2); // strict equal operator
// console.log(2 !== 2); // strict not equal operator

// In JavaScript, there are two types of comparison operators:
// 1. Loose Equality (==) and Inequality (!=) Operators: These operators compare values for equality or inequality, 
// but they perform type coercion if the values are of different types. For example:
console.log(2 == "2"); // true, because the string "2" is coerced to a number before comparison
console.log(2 != "3"); // true, because the string "3" is coerced to a number before comparison

// example of strict equality and inequality operators:
console.log(2 === "2"); // false, because the types are different (number vs string)
console.log(2 !== "2"); // true, because the types are different (number vs string)


