// obect literals 

let object = {
    name: "jatin",
    age: 23,
    city: "ludhiana",
    email: "jatin@gmail.com",
    inloggedin: true,
    days: ["monday" , "wednesday" , "thursday" , "friday" , "saturday" , "sunday"]

}
// console.log(object.city)
// console.log(object["email"])


const sym = Symbol("key1")


const timeuser = {}
// console.log(timeuser);


// nested object 
const regularuser = {
    name: "aman",
    id: 201,
    fullname: {
        username: "amansharma",
        positon: "frontenddevloper",
        salary: 7000,
        anotherimformation: {
            joindate: 20032005,
            location: "ludhiana",   // ✅ ab string hai
        }
    }
}

// console.log(regularuser.name);        // "aman"
// console.log(regularuser.fullname.username);   // "amansharma"
// console.log(regularuser.fullname.anotherimformation.location); // "ludhiana"




const course = {
    coursename: "course in hindi ",
    courseteacher: "jatin",
    price: 4000,
}

const {price} = course

console.log(price);
