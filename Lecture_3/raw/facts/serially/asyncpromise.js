let fs = require("fs");

// let fileWillReadPromise = fs.promises.readFile("f1.txt");
// console.log(fileWillReadPromise);

// fileWillReadPromise.then(function(){
//     console.log("Inside then");
// }).catch(function(err){
//     console.log(err);
// })

let files= ["../f1.txt","../f2.txt","../f3.txt","../f4.txt"];

let fileWillReadPromise = fs.promises.readFile("f1.txt");
let i=0;
fileWillReadPromise.then(function(i){
    if(i==files.length){
        return;
    }
    fs.readFile(files[i],function (err,content){
        console.log(`content ${content}`);
        
    });
}).then(function(){
    i=i+1;
}).catch(function(err){
        console.log(err);
})

console.log("After");