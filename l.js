// const user = {
//     name: "jatin",
//     age: 23,
//     isstudent: 23,
// }
// console.log(user);


// const name = "Jatin";
// const age = 21;
// console.log(`hy my name is ${name} and iam ${age} year old`);

// const a = 15;
// const b = 4;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// // console.log(a  b);


// const age = 23;

// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("You cannot vote");
// }

const password = "12345";
const confirmPassword = "1245";

if ( password !== confirmPassword){
    
    console.log("password matched");
}
else {
    console.log("Password does not match");
    
}

function greet () {
    console.log("hello jatin");
    
}
greet()

const addition = (add , add1) => {
    return add + add1
}
console.log(addition(10 , 20));


const number = function () {
    if (number % 2 === 0) {
        console.log("odd");
        
    } 
    else {
        console.log("even");
        
    }
}
number()

const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits [1]);

fruits.push("orange")
console.log(fruits);

fruits.shift("apple")
console.log(fruits);



    
