// simple method of function

function name (){
    console.log("my name is jatin");
    
}
name()

// function addition

function addition (sum1 , sum2){    // parameter
    console.log(sum1 + sum2);
    
}
addition(10 , 20)  // argument

// 1. Number + Number
// js
// 2 + 3          // 5
// 2 + 3.5        // 5.5
// 2 + NaN        // NaN
// 2 + Infinity   // Infinity
// 2. Number + String
// js
// 2 + "3"        // "23"
// "3" + 2        // "32"
// 2 + ""         // "2"
// 2 + "abc"      // "2abc"
// 3. String + String
// js
// "2" + "3"      // "23"  (concatenation, addition nahi)
// "a" + "b"      // "ab"
// 4. Number/String + Boolean
// js
// 2 + true       // 3    (true = 1)
// 2 + false      // 2    (false = 0)
// "2" + true     // "2true"
// 5. Number/String + null
// js
// 2 + null       // 2    (null = 0)
// "2" + null     // "2null"
// 6. Number/String + undefined
// js
// 2 + undefined      // NaN
// "2" + undefined    // "2undefined"
// 7. Number/String + Array
// js
// 2 + [1,2,3]    // "21,2,3"   (array → string)
// 2 + []         // "2"        (empty array → "")
// "a" + [1,2]    // "a1,2"
// 8. Number/String + Object
// js
// 2 + {}                 // "2[object Object]"
// "a" + {}                // "a[object Object]"
// 2 + {valueOf(){return 5}}   // 7   (custom valueOf use hota hai)
// 9. Special / Tricky
// js
// [] + []        // ""             (both empty arrays → "")
// [] + {}        // "[object Object]"
// {} + []        // 0  (browser console mein; {} ko block statement maana jaata hai)
// true + true    // 2
// true + false   // 1




// how to store function in variable 

const greet = function(name) {
  return "Hello " + name;
};

greet("Jatin");   // "Hello Jatin"



// how to use return in function


function myname() {

    return "jatin";
}

myname()