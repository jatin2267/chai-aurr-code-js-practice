// what is javascript stack memory and heap memory
// In JavaScript, memory is managed in two main areas: stack memory and heap memory. 
// These two types of memory serve different purposes and have different characteristics.

// 1. Stack Memory:
// Stack memory is a region of memory that stores primitive data types and function call information. 
// It operates in a last-in, first-out (LIFO) manner, meaning that the last item added to the stack is the first one to be removed. 
// Stack memory is used for storing variables with a fixed size and known lifetime, such as numbers, strings, and booleans.

// 2. Heap Memory:
// Heap memory is a region of memory that stores objects and data structures that have a dynamic size and lifetime. 
// Unlike stack memory, heap memory does not have a strict order for allocation and deallocation. 
// It is used for storing objects, arrays, and other complex data types that can grow or shrink in size during runtime.

// In summary, stack memory is used for storing primitive data types and function call information, while heap memory is used for storing objects and data structures with dynamic sizes.

// Example of stack memory and heap memory in JavaScript:
// Stack Memory Example:
let num = 42; // stored in stack memory
let str = "Hello"; // stored in stack memory

// Heap Memory Example:
let obj = { name: "John", age: 30 };