# Chai aur Code — JavaScript Practice & Deep Dive

> A structured, modular JavaScript repository exploring core fundamentals, memory management, arrays, objects, functions, closures, and interactive DOM experiments based on the Chai aur Code curriculum.

---

## Features

- **Module 01 — Core Fundamentals & Memory Architecture**:
  - Variable scoping rules (`const`, `let`, `var`).
  - Primitive data types (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`).
  - Explicit type conversions, type coercion, and edge-case behaviors (`NaN`, empty strings, null).
  - Arithmetic, logical, and unary operators.
  - Stack vs. Heap memory allocation mechanics (by-value copying vs. reference copying).
  - String manipulation with ES6 template literals and prototype methods (`slice`, `replace`, `includes`).
  - Working with the `Date` object, timestamps, and locale-specific date formatting.
- **Module 02 — Reference Types, Arrays & Objects**:
  - Array operations, mutable vs immutable methods (`push`, `pop`, `shift`, `unshift`, `slice`, `splice`, spread operator).
  - In-depth Object handling: object literals, singleton creation, symbol key usage, `Object.freeze()`, nested objects, and object destructuring.
- **Module 03 — Functions & Execution Context**:
  - Function declarations, default parameters, and the rest operator (`...args`).
  - Passing objects and arrays into reusable functions.
  - Arrow functions and lexical `this` resolution.
  - Block scope, global scope, nested scope chains, call stack execution, and closure foundations.
- **Module 04 — Interactive DOM Experiments**:
  - **Employee Salary Checker**: Interactive input and salary status calculation UI.
  - **Student Registration**: Form interface handling inputs and checkbox states.
  - **Age Validation Checker**: Client-side logic for condition checking and age verification.
  - **Registration Form**: Styled modern registration modal with blurred backdrop effects and asset integration.

---

## Tech Stack

- **Language**: JavaScript (ECMAScript 2015+ / ES6+)
- **Runtime**: Node.js (command line execution) & Modern Web Browsers
- **Markup & Styling**: HTML5, CSS3 (Flexbox, CSS variables, glassmorphic backdrop filters)

---

## Project Structure

```plaintext
chai-aurr-code-js-practice/
├── 01-basics/
│   ├── 01-variables.js                # Variable declaration rules: const, let, and var
│   ├── 02-datatypes.js                # Primitive datatype definitions and typeof inspections
│   ├── 03-datatype-conversion.js      # Type casting, explicit conversions, and coercion rules
│   ├── 04-operators.js                # Arithmetic, prefix/postfix increments, and comparisons
│   ├── 05-strings.js                  # String interpolation and prototype helper methods
│   ├── 06-datetime.js                 # Date methods, timestamp calculations, and formatting
│   ├── 07-memory-stack-heap.js        # Stack (primitive) vs Heap (reference) memory allocation
│   ├── 08-datatypes-summary.js        # Primitive vs reference types comparison summary
│   └── 09-practice.js                 # Practice challenges and syntax exercises
├── 02-arrays-and-objects/
│   ├── 01-arrays.js                   # Array methods, spread operators, slice vs splice
│   ├── 02-objects.js                  # Object literals, symbol keys, freeze, and nesting
│   └── 03-object-destructuring.js     # Object destructuring and dynamic property assignment
├── 03-functions/
│   ├── 01-function-basics.js          # Function declarations, return statements, and rest parameters
│   ├── 02-function-parameters.js      # Handling objects and arrays as function arguments
│   ├── 03-arrow-functions.js          # Arrow syntax, implicit returns, and lexical this
│   ├── 04-scope.js                    # Global and block scope isolation rules
│   ├── 05-scope-level-closures.js     # Nested function scopes, closures, and call stack levels
│   └── 06-practice.js                 # Function exercises and algorithmic drills
├── 04-dom-experiments/
│   ├── assets/                        # Supporting graphic assets and background images
│   │   ├── clo.jpg
│   │   └── cloud.jpg
│   ├── age-checker.html               # Age verification and conditional DOM rendering
│   ├── employee-salary-checker.html   # Employee information input and calculation tool
│   ├── registration-form.html         # Styled card registration UI with backdrop blur
│   └── student-registration.html      # Student onboarding form with input and checkbox events
└── README.md                          # Project documentation
```

---

## How to Install and Run

### Running via Node.js
Run any lesson script directly in your terminal using [Node.js](https://nodejs.org/):

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jatin2267/chai-aurr-code-js-practice.git
   cd chai-aurr-code-js-practice
   ```

2. **Execute scripts by module:**
   ```bash
   # Module 1: Variables & Datatypes
   node 01-basics/01-variables.js
   node 01-basics/07-memory-stack-heap.js

   # Module 2: Arrays & Objects
   node 02-arrays-and-objects/01-arrays.js
   node 02-arrays-and-objects/02-objects.js

   # Module 3: Functions & Scopes
   node 03-functions/01-function-basics.js
   node 03-functions/04-scope.js
   ```

### Running DOM Experiments
- Navigate into the `04-dom-experiments/` directory and open any HTML file (`employee-salary-checker.html`, `registration-form.html`, etc.) in your browser.
- Open Developer Tools (`F12` or `Ctrl + Shift + I` / `Cmd + Option + I`) to inspect DOM elements and view real-time console messages.

---

## Screenshots

> _Screenshots placeholder: Add terminal outputs and browser console execution previews here._

```markdown
![DOM Registration Form Preview](04-dom-experiments/assets/cloud.jpg)
```

---

## Author

- **Jatin** — [@jatin2267](https://github.com/jatin2267)
