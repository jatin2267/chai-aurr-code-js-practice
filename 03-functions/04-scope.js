// ============================================================
//                    JAVASCRIPT SCOPE
// ============================================================


// ============================================================
// 1. SCOPE KYA HOTA HAI?
// ============================================================

// Scope ka matlab:
// "Variable ko code ke kis area mein access/use kar sakte hain."

// Simple:
// Scope = variable ki accessibility ka area.


// ============================================================
// 2. GLOBAL SCOPE
// ============================================================

// Jo variable kisi function ya block ke bahar banaya jaye,
// wo GLOBAL SCOPE mein hota hai.

let username = "Jatin";

console.log(username); // Jatin

// username ko neeche bhi access kar sakte hain
// kyunki ye global scope mein hai.



// ============================================================
// 3. BLOCK SCOPE
// ============================================================

// { } ko BLOCK bolte hain.

// let aur const BLOCK SCOPED hain.
// Matlab ye sirf apne block { } ke andar accessible hote hain.

if (true) {

    let age = 21;
    const city = "Ludhiana";

    console.log(age);  // 21
    console.log(city); // Ludhiana
}

// Yahan block khatam ho gaya.

// Isliye neeche access nahi kar sakte.

// console.log(age);  // ❌ Error
// console.log(city); // ❌ Error


// ============================================================
// 4. VAR BLOCK SCOPED NAHI HAI
// ============================================================

// var { } block ko respect nahi karta.

if (true) {

    var country = "India";

}

// var block ke bahar bhi accessible hai
console.log(country); // India


// Isliye modern JavaScript mein
// let aur const ko prefer karte hain.



// ============================================================
// 5. FUNCTION SCOPE
// ============================================================

// Function ke andar banaya gaya var
// function ke bahar accessible nahi hota.

function test() {

    var age = 21;

    console.log(age); // 21
}

test();

// Function ke bahar age available nahi hai.

// console.log(age); // ❌ Error



// ============================================================
// 6. FUNCTION KE ANDAR LET / CONST
// ============================================================

// let aur const bhi function ke andar
// sirf apne scope mein available hote hain.

function userInfo() {

    let name = "Jatin";
    const age = 21;

    console.log(name); // Jatin
    console.log(age);  // 21
}

userInfo();

// Bahar access nahi kar sakte.

// console.log(name); // ❌ Error
// console.log(age);  // ❌ Error



// ============================================================
// 7. NESTED SCOPE
// ============================================================

// Ek scope ke andar doosra scope ho sakta hai.

// Example:

let a = 10;

if (true) {

    let b = 20;

    if (true) {

        let c = 30;

        console.log(a); // 10
        console.log(b); // 20
        console.log(c); // 30
    }
}


// Inner scope bahar ke variables ko access kar sakta hai.

// c ke andar:
// c → mil jayega
// b → mil jayega
// a → mil jayega


// Lekin bahar wala scope
// inner scope ke variables ko access nahi kar sakta.

// console.log(b); // ❌ Error
// console.log(c); // ❌ Error



// ============================================================
// 8. SCOPE CHAIN
// ============================================================

// JavaScript variable ko current scope mein search karta hai.

// Agar current scope mein variable nahi mila,
// to bahar wale scope mein search karta hai.

// Example:

let name = "Jatin";

function outer() {

    let age = 21;

    function inner() {

        let city = "Ludhiana";

        console.log(city); // Ludhiana
        console.log(age);  // 21
        console.log(name); // Jatin
    }

    inner();
}

outer();


// JavaScript search karega:
//
// city → inner scope mein mila
// age  → inner mein nahi mila
//        outer scope mein mila
// name → outer mein nahi mila
//        global scope mein mila



// ============================================================
// 9. INNER SCOPE OUTER VARIABLE ACCESS KAR SAKTA HAI
// ============================================================

let x = 10;

if (true) {

    let y = 20;

    console.log(x); // 10
    console.log(y); // 20
}


// Inner block bahar ke x ko access kar sakta hai.


// Lekin outer scope inner y ko access nahi kar sakta.

// console.log(y); // ❌ Error



// ============================================================
// 10. SAME VARIABLE NAME - LET
// ============================================================

// Different blocks mein same variable name use kar sakte hain.

let value = 10;

if (true) {

    let value = 20;

    console.log(value); // 20
}

console.log(value); // 10


// Important:
// Dono alag variables hain.
//
// Bahar wala value = 10
// Andar wala value = 20



// ============================================================
// 11. SAME VARIABLE NAME - VAR
// ============================================================

// var block scoped nahi hai.

var number = 10;

if (true) {

    var number = 20;

    console.log(number); // 20
}

console.log(number); // 20


// Yahan andar wala var
// bahar wale variable ko affect kar raha hai.
//
// Isi tarah ki situations ki wajah se
// var ko generally avoid karte hain.



// ============================================================
// 12. GLOBAL SCOPE VS BLOCK SCOPE
// ============================================================

// GLOBAL:

let globalName = "Jatin";


// BLOCK:

if (true) {

    let blockName = "Rahul";

    console.log(globalName); // Jatin
    console.log(blockName);  // Rahul
}

console.log(globalName); // Jatin

// console.log(blockName); // ❌ Error



// ============================================================
// 13. FUNCTION SCOPE VS BLOCK SCOPE
// ============================================================

function example() {

    var a = 10; // Function scoped

    if (true) {

        let b = 20; // Block scoped

        console.log(a); // 10
        console.log(b); // 20
    }

    console.log(a); // 10

    // console.log(b); // ❌ Error
}

example();

// a → function ke andar available
// b → sirf if ke block ke andar available



// ============================================================
// 14. LET / CONST / VAR KA SCOPE
// ============================================================


// LET
// → Block scoped
// → Reassign kar sakte hain
// → Redeclare nahi kar sakte

let age = 21;

age = 22; // ✅ Allowed

// let age = 23; // ❌ Error



// CONST
// → Block scoped
// → Reassign nahi kar sakte
// → Redeclare nahi kar sakte

const countryName = "India";

// countryName = "Canada"; // ❌ Error
// const countryName = "USA"; // ❌ Error



// VAR
// → Function scoped
// → Reassign kar sakte hain
// → Redeclare kar sakte hain

var score = 50;

score = 80; // ✅ Allowed

var score = 100; // ✅ Allowed

console.log(score); // 100



// ============================================================
// 15. SCOPE KO VISUALLY SAMJHO
// ============================================================


// GLOBAL SCOPE
//
// let a = 10;
//
//       ↓
//
// ┌──────────────────────┐
// │      BLOCK SCOPE     │
// │                      │
// │  let b = 20;         │
// │                      │
// │   ┌──────────────┐   │
// │   │ INNER BLOCK  │   │
// │   │              │   │
// │   │ let c = 30;  │   │
// │   │              │   │
// │   └──────────────┘   │
// │                      │
// └──────────────────────┘


// Inner scope:
// → apne variables access kar sakta hai
// → outer scope ke variables bhi access kar sakta hai

// Outer scope:
// → inner scope ke variables access nahi kar sakta



// ============================================================
// 16. REAL-LIFE EXAMPLE
// ============================================================

// Maan lo website mein user ka naam hai.

let userName = "Jatin";

if (userName === "Jatin") {

    let message = "Welcome Jatin!";

    console.log(message);
}

// message sirf if ke andar chahiye tha.
// Isliye let use kiya.



// ============================================================
// 17. SCOPE + FUNCTION EXAMPLE
// ============================================================

let user = "Jatin";

function greetUser() {

    let message = "Hello " + user;

    console.log(message);
}

greetUser();


// user → Global scope
// message → Function scope
//
// Function ke andar user ko access kar sakte hain
// kyunki inner scope outer variable ko access kar sakta hai.



// ============================================================
// 18. IMPORTANT RULE
// ============================================================


// RULE 1:
//
// Inner scope → Outer variable access kar sakta hai.
//
// Example:

let first = 10;

if (true) {

    console.log(first); // 10
}


// RULE 2:
//
// Outer scope → Inner variable access nahi kar sakta.
//
// Example:

if (true) {

    let second = 20;
}

// console.log(second); // ❌ Error



// ============================================================
// 19. INTERVIEW KE LIYE SHORT DEFINITION
// ============================================================

// Scope defines where a variable can be accessed
// or used in a JavaScript program.


// Hindi mein:
//
// Scope batata hai ki variable ko code ke
// kis area mein access kar sakte hain.



// ============================================================
// 20. FINAL REVISION
// ============================================================


// let
// → Block scoped
// → Reassign YES
// → Redeclare NO


// const
// → Block scoped
// → Reassign NO
// → Redeclare NO


// var
// → Function scoped
// → Block scoped nahi
// → Reassign YES
// → Redeclare YES



// ============================================================
//                    SABSE IMPORTANT
// ============================================================


// {} = BLOCK


// let + const
// → {} ke andar limited


// var
// → {} se bahar bhi ja sakta hai
// → function ke andar limited


// Inner scope
// → Outer variables ko access kar sakta hai


// Outer scope
// → Inner variables ko access nahi kar sakta


// SCOPE = VARIABLE KI ACCESSIBILITY KA AREA