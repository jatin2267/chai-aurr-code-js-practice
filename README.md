# Chai aur Code — JavaScript Practice & Deep Dive

> A hands-on JavaScript repository exploring core fundamentals, memory management, arrays, objects, functions, closures, and DOM experiments based on the Chai aur Code curriculum.

---

## Features

- **Part 1 — Core Fundamentals & Memory Architecture**:
  - Variable scoping rules (`const`, `let`, `var`).
  - Primitive data types (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`).
  - Explicit type conversions, type coercion, and edge-case behaviors (`NaN`, empty strings, null).
  - Arithmetic, logical, and unary operators.
  - Stack vs. Heap memory allocation mechanics (by-value copying vs. reference copying).
  - String manipulation with ES6 template literals and prototype methods (`slice`, `replace`, `includes`).
  - Working with the `Date` object, timestamps, and locale-specific date formatting.
- **Part 2 — Reference Types, Arrays & Objects**:
  - Array operations, mutable vs immutable methods (`push`, `pop`, `shift`, `unshift`, `slice`, `splice`, spread operator).
  - In-depth Object handling: object literals, singleton creation, symbol key usage, `Object.freeze()`, nested objects, and object destructuring.
- **Functions & Execution Context**:
  - Function declarations, default parameters, and the rest operator (`...args`).
  - Passing objects and arrays into reusable functions.
  - Arrow functions and lexical `this` resolution.
  - Block scope, global scope, nested scope chains, and closure foundations.
- **Browser & DOM Sandbox**:
  - HTML harnesses (`index.html`, `date.html`, `l.html`, `ol.html`) for running and testing scripts directly in browser runtime environments.

---

## Tech Stack

- **Language**: JavaScript (ECMAScript 2015+ / ES6+)
- **Runtime**: Node.js (command line execution) & Modern Web Browsers
- **Markup**: HTML5 (test harness pages)

---

## Project Structure

```plaintext
chai-aurr-code-js-practice/
├── basics-part1/
│   ├── data-type-conversion.js        # Type casting, explicit conversions, and coercion rules
│   ├── data-type-final.js             # Primitive vs reference types comparison summary
│   ├── date-time.js                   # Date methods, timestamp calculations, and formatting
│   ├── js-memory.js                   # Stack (primitive) vs Heap (reference) memory allocation
│   ├── lesson-datatypes.js            # Primitive datatype definitions and typeof inspections
│   ├── lesson1-variables.js           # Variable declaration rules: const, let, and var
│   ├── operators.js                   # Arithmetic, prefix/postfix increments, and comparisons
│   ├── practice.js                    # Practice challenges and syntax exercises
│   └── string-in-javascript.js        # String interpolation and prototype helper methods
├── basics-part2/
│   ├── array-javascript.js            # Array methods, spread operators, slice vs splice
│   └── object-in-depth.js             # Object literals, symbol keys, freeze, and destructuring
├── functions/
│   ├── arrow-function.js              # Arrow syntax, implicit returns, and lexical this
│   ├── function-scope.js              # Global and block scope isolation
│   ├── function-scopelevel.js         # Nested function scopes, closures, and call stack levels
│   ├── function1.js                   # Function declarations, return statements, and rest parameters
│   └── function2.js                   # Handling objects and arrays as function arguments
├── clo.jpg                            # Image asset for DOM experiments
├── cloud.jpg                          # Cloud graphic for HTML test pages
├── date.html                          # Browser test page for date manipulation
├── index.html                         # Primary HTML playground for script testing
├── js.js                              # Root JavaScript experiment file
├── l.html                             # List and DOM layout test page
├── l.js                               # Script paired with l.html
├── ol.html                            # Ordered list rendering playground
└── README.md                          # Project documentation
```

---

## How to Install and Run

### Running via Node.js
You can run any JavaScript exercise directly in your terminal using [Node.js](https://nodejs.org/):

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jatin2267/chai-aurr-code-js-practice.git
   cd chai-aurr-code-js-practice
   ```

2. **Execute any file:**
   ```bash
   # Run variables lesson
   node basics-part1/lesson1-variables.js

   # Run memory mechanics lesson
   node basics-part1/js-memory.js

   # Run object deep dive
   node basics-part2/object-in-depth.js

   # Run arrow function examples
   node functions/arrow-function.js
   ```

### Running via Web Browser
- Double-click any of the HTML files (`index.html`, `date.html`, `ol.html`) to launch them in a web browser.
- Open Developer Tools (`F12` or `Ctrl + Shift + I` / `Cmd + Option + I`) and view the **Console** tab to observe script outputs and return values.

---

## Screenshots

> _Screenshots placeholder: Add terminal outputs and browser console execution previews here._

```markdown
![Console Output Placeholder](cloud.jpg)
```

---

## Author

- **Jatin** — [@jatin2267](https://github.com/jatin2267)
