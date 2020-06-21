let fs = require("fs");
console.log("Before");

let fileWillReadPromise = fs.promises.readFile("f1.txt");
console.log(fileWillReadPromise);
console.log(fileWillReadPromise);
fileWillReadPromise.then(function (data) {
    console.log("Inside then");
    console.log(data);
});

fileWillReadPromise.catch(function (err){
    console.log("Inside catch block");
    console.log(err);
});

setTimeout(function (){
    console.log(fileWillReadPromise);
},5000);

console.log("After");