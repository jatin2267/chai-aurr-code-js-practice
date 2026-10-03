// array  
//array is a collection of elements. It can hold multiple values in a single variable. 
// In JavaScript, arrays are used to store multiple values in a single variable.

// Creating an array

const myarray = [1, 2, 3, 4, 5];

console.log(myarray[0]); // 1
console.log(myarray[1]); // 2
console.log(myarray[2]); // 3
console.log(myarray[3]); // 4
console.log(myarray[4]); // 5

//different ways to create an array

const myarray1 = new Array(1, 2, 3, 4, 5);
console.log(myarray1); // [1, 2, 3, 4, 5]

const myarray2 = new Array(5);
console.log(myarray2); // [ <5 empty items> ]

const myarray3 = Array.of(1, 2, 3, 4, 5);
console.log(myarray3); // [1, 2, 3, 4, 5]

//array methods

// push() - adds an element to the end of the array
myarray.push(6);
console.log(myarray); // [1, 2, 3, 4, 5, 6]

// pop() - removes the last element from the array
myarray.pop();
console.log(myarray); // [1, 2, 3, 4, 5]

// shift() - removes the first element from the array
myarray.shift();
console.log(myarray); // [2, 3, 4, 5]

// unshift() - adds an element to the beginning of the array
myarray.unshift(1);
console.log(myarray); // [1, 2, 3, 4, 5]

// indexOf() - returns the first index of the specified element
console.log(myarray.indexOf(3)); // 2
console.log(myarray.indexOf(6)); // -1

// includes() - checks if the array contains the specified element
console.log(myarray.includes(3));

// slice() - returns a shallow copy of a portion of the array
const myarray4 = myarray.slice(1, 3);
console.log(myarray4); // [2, 3]

// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements
myarray.splice(2, 1, 6, 7);
console.log(myarray); // [1, 2, 6, 7, 4, 5]

// forEach() - executes a provided function once for each array element
myarray.forEach(function(element) {
    console.log(element);
});

// map() - creates a new array with the results of calling a provided function on every element in the calling array    
const myarray5 = myarray.map(function(element) {
    return element * 2;
}

);
console.log(myarray5); // [2, 4, 12, 14, 8, 10]

// filter() - creates a new array with all elements that pass the test implemented by the provided function
const myarray6 = myarray.filter(function(element) {
    return element > 3;
});

// reduce() - applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
const myarray7 = myarray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

// find() - returns the value of the first element in the array that satisfies the provided testing function
const myarray8 = myarray.find(function(element) {
    return element > 3;
});

// findIndex() - returns the index of the first element in the array that satisfies the provided testing function
const myarray9 = myarray.findIndex(function(element) {
    return element > 3;
});

// some() - tests whether at least one element in the array passes the test implemented by the provided function
const myarray10 = myarray.some(function(element) {
    return element > 3;
});

// every() - tests whether all elements in the array pass the test implemented by the provided function     
const myarray11 = myarray.every(function(element) {
    return element > 3;
})