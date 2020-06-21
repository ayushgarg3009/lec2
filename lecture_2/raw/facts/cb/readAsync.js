let fs = require("fs");
console.log("Before");

fs.readFile("f1.txt",function(err, content){
    console.log("content "+ content);
    console.log("Actual after");
});

console.log("After");