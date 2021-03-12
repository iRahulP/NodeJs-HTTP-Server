// console.log('Hello World');

// function add(a, b){
//     return a+b;
// }

var args = process.argv.slice(2);

// console.log("Adding Numbers from provided Args :", add(parseInt(args[0]),parseInt(args[1])));


const operations = require('./operations');

console.log(operations.add(parseInt(args[0]),parseInt(args[1])));
console.log(operations.sub(parseInt(args[0]),parseInt(args[1])));
console.log(operations.mul(parseInt(args[0]),parseInt(args[1])));
console.log(operations.div(parseInt(args[0]),parseInt(args[1])));
