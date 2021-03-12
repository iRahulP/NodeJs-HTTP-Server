console.log('Hello World');

function add(a, b){
    return a+b;
}

var args = process.argv.slice(2);

console.log("Adding Numbers from provided Args :", add(parseInt(args[0]),parseInt(args[1])));