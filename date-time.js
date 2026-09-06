// dates

let mydate = new Date();

console.log(mydate.toString()); // Fri Jun 14 2024 12:34:56 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toDateString());  // Fri Jun 14 2024
console.log(mydate.toTimeString());  // 12:34:56 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toLocaleString());  // 6/14/2024, 12:34:56 PM
console.log(mydate.toLocaleDateString());  // 6/14/2024
console.log(mydate.toLocaleTimeString());  // 12:34:56 PM
console.log(mydate.toUTCString());  // Fri, 14 Jun 2024 12:34:56 GMT
console.log(mydate.toISOString());  // 2024-06-14T12:34:56.789Z
console.log(mydate.toJSON());  // 2024-06-14T12:34:56.789Z
console.log(mydate.toGMTString());  // Fri, 14 Jun 2024 12:34:56 GMT
