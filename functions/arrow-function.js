// arrow function syntax

const greet = () => "hello";

// how use it 

const username  = (add1 , add2) => {
    return add1 + add2;
}
console.log(username(10 , 30));  // 40 there was normal arrow function to declare

// 2 method of declare function without curly bracket

const product = (shoes , shirt) => (shoes + shirt)
console.log(product( 10 , 29));  // 39 print without curly brace{}
 

const subtract = (sub1 , sub2) => sub1 - sub2;

console.log(subtract(200 , 488));
 