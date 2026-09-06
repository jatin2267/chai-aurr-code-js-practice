// =================================
// VARIABLES + CONSOLE.LOG
// =================================


// 1. Variable kya hota hai?
// Variable ek naam hota hai jisme hum koi value store karte hain.

let name = "Jatin";
let age = 21;

console.log(name);
console.log(age);


// =================================
// 2. Variable kyu banate hain?
// =================================

// Taaki kisi value ko ek naam de sakein
// aur baad mein us value ko use kar sakein.

let city = "Ludhiana";

console.log(city);


// =================================
// 3. Variable ke 3 types
// =================================

let username = "Jatin";
const country = "India";
var color = "Blue";


// =================================
// 4. let
// =================================

// let ki value baad mein change kar sakte hain

let score = 50;

console.log(score);

score = 80;

console.log(score);


// =================================
// 5. const
// =================================

// const ki value baad mein change nahi kar sakte

const pi = 3.14;

console.log(pi);

// pi = 5;   // ❌ Error


// =================================
// 6. console.log() kya hai?
// =================================

// console.log() ka use console mein
// value ko dekhne/print karne ke liye hota hai.

console.log("Hello World");

console.log(name);

console.log(age);


// =================================
// 7. Multiple values
// =================================

console.log(name, age, city);


// =================================
// 8. Text + Variable
// =================================

console.log("My name is", name);
console.log("My age is", age);


// =================================
// 9. Variable ka type dekhna
// =================================

// typeof se pata chalta hai ki value kis type ki hai.

console.log(typeof name);
console.log(typeof age);


// =================================
// 10. Variable banane ke basic rules
// =================================

// 1. Variable ka naam meaningful rakho

let userName = "Jatin";


// 2. Naam number se start nahi kar sakta

// let 123name = "Jatin";   // ❌


// 3. Space nahi de sakte

// let user name = "Jatin"; // ❌


// 4. Variable name case-sensitive hota hai

let Name = "Jatin";
let name2 = "Rahul";

console.log(Name);
console.log(name2);


// 5. JavaScript ke reserved keywords ko
// variable name ke roop mein use nahi kar sakte.

// let let = 10;    // ❌
// let const = 20; // ❌


// =================================
// QUICK REVISION
// =================================

// Variable = value ko naam dena

let myName = "Jatin";


// console.log = value ko console mein dekhna

console.log(myName);


// let = value change kar sakte ho
// const = value change nahi kar sakte

// console table mein value ko dekhne ke liye use hota hai

console.table({ myName, age, city });