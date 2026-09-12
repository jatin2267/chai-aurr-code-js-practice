// how to pass multiple value in function 

function prices ( val1 , val2 , ... num1){  // here we only print 222 to print all we use (...) three dots they are rest operator print all value

    return num1 
}

// console.log(prices(222 , 200 , 300 , 344 , 443 , 234));  
let user = {
    name: "jatin",
    price: 233,
};

function product(userdata) {
    console.log(`hy my name is ${userdata.name} and here is price ${userdata.price}`);
}

product(user);
