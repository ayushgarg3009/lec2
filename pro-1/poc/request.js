let fs = require("fs")
let path = require("path");

let dirPath = path.join(__dirname, "./name");


// fs.mkdirSync(dirPath);
// console.log("New directory--1 successfully created.");
// let dirPath_2 = path.join(__dirname, "./name" + "/nn");
//     fs.mkdirSync(dirPath_2);
//     console.log("New directory--2 successfully created.");


console.log("hello");


// let fs = require('fs');

// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });



// const path = require('path');
// const fs = require('fs');
//joining path of directory 



// let directoryPath = path.join(__dirname, '');
// //passsing directoryPath and callback function
// fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     if (err) {
//         return console.log('Unable to scan directory: ' + err);
//     } 
//     //listing all files using forEach
//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         // console.log(file); 
//         let file0 = file.split(".")[0].trim();
//         let file1 = file.split(".")[1];
//         console.log(file0);
//         console.log(file1);
//         if(file1=="txt"){
//           let source = directoryPath;
//           let destination= path.join(__dirname, "./name" + "/nn");
//           fs.copyFile(source, destination, function (err) {
//             if (err) {
//               return console.log('Unable to scan directory: ' + err);
//             }
//             console.log('source.txt was copied to destination.txt');
//           });       
//         }
//     }); 
// });


// let source = path.join(__dirname, './Documents' + "./f1.txt");
let source = path.join(__dirname, './Documents');
let target= path.join(__dirname, "./name" + "/nn");

// try {
  fs.copyFileSync(source, target)
  console.log("Successfully copied and moved the file!")
// } catch(err) {
//   throw err
// }


console.log("hell");