// Modules: file based, build in , third party
// 1. file based
// const a = {
//     average: (a, b) => {
//         return (a + b) / 2;
//     },
//     sum: (i, j) => {
//         return i + j;
//     }
// };

// module.exports = a;


// build in 
// exp1 :
const fs = require("fs");
// console.log(fs);

// fs.readFile("./sample.txt", "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// console.log("I am first");

// exp2 :
// console.log(fs.readFileSync("./sample.txt", "utf-8"));

// console.log("I am first");


// exp 3:
// fs.writeFile("./wrtitefile.txt", "this is sample txt", ()=>{
//     console.log( "written");
// })




// third party  like express, react and all