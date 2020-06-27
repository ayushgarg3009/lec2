let fs = require("fs")
let path = require("path");

// let dirPath = path.join(__dirname, "./name");

let dirPath = path.join(__dirname, "../../../../Downloads" , "./name");
console.log(dirPath);
fs.mkdirSync(dirPath);
console.log(dirPath);
console.log("New directory--1 successfully created.");
let dirPath_2 = path.join(dirPath, "/app");
    fs.mkdirSync(dirPath_2);
    console.log("New directory--2 successfully created.");


    let dirPath_3 = path.join(dirPath, "/achieves");
    fs.mkdirSync(dirPath_3);
    console.log("New directory--3 successfully created.");

    let dirPath_4 = path.join(dirPath, "/documents");
    fs.mkdirSync(dirPath_4);
    console.log("New directory--4 successfully created.");

    let dirPath_5 = path.join(dirPath, "/media");
    fs.mkdirSync(dirPath_5);
    console.log("New directory--5 successfully created.");

    let dirPath_6 = path.join(dirPath, "/others");
    fs.mkdirSync(dirPath_6);
    console.log("New directory--6 successfully created.");



let directoryPath = path.join(__dirname, "../../../../Downloads");
// // //passsing directoryPath and callback function
// // fs.readdir(directoryPath, function (err, files) {
//     //handling error
//     // if (err) {
//     //     return console.log('Unable to scan directory: ' + err);
//     // } 
//     //listing all files using forEach

//     // console.log(directoryPath);
    files = fs.readdirSync(directoryPath);



//     files.forEach(function (file) {
//         // Do whatever you want to do with the file
//         // console.log(file); 
//         let file0 = file.split(".")[0];
//         let file1 = file.split(".")[1];
//         console.log(file0);
//         console.log(file1);
//         if(file1=="txt" || file1=="PDF" || file1=="docx" || file1=="ppt"){
//             let source = path.join(directoryPath, file);;
//             let destination= path.join(directoryPath, "./name" , "/documents", file);
//             fs.copyFileSync(source, destination);
//         }
//         else if(file1=="jpg" || file1=="png"){
//             let source = path.join(directoryPath, file);;
//             let destination= path.join(directoryPath, "./name" , "/media", file);
//             fs.copyFileSync(source, destination);
//         }
//         else if(file1=="exe"){
//             let source = path.join(directoryPath, file);;
//             let destination= path.join(directoryPath, "./name" , "/app", file);
//             fs.copyFileSync(source, destination);
//         }
//         else if(file1=="zip"){
//             let source = path.join(directoryPath, file);;
//             let destination= path.join(directoryPath, "./name" , "/achieves", file);
//             fs.copyFileSync(source, destination);
//         }
//         // else {
//         //     let source = path.join(directoryPath, file);;
//         //     let destination= path.join(directoryPath, "./name" , "/others", file);
//         //     fs.copyFileSync(source, destination);
//         // }
//     }); 

    for (let i = 0; i < files.length; i++) {
        let file0 = files[i].split(".")[0];
        let file1 = files[i].split(".")[1];
        console.log(file0);
        console.log(file1);
        if(file1=="txt" || file1=="PDF" || file1=="docx" || file1=="ppt"){
            let source = path.join(directoryPath, files[i]);;
            let destination= path.join(directoryPath, "./name" , "/documents", files[i]);
            fs.copyFileSync(source, destination);
        }
        else if(file1=="jpg" || file1=="png"){
            let source = path.join(directoryPath, files[i]);;
            let destination= path.join(directoryPath, "./name" , "/media", files[i]);
            fs.copyFileSync(source, destination);
        }
        else if(file1=="exe"){
            let source = path.join(directoryPath, files[i]);;
            let destination= path.join(directoryPath, "./name" , "/app", files[i]);
            fs.copyFileSync(source, destination);
            }
        else if(file1=="zip"){
            let source = path.join(directoryPath, files[i]);;
            let destination= path.join(directoryPath, "./name" , "/achieves", files[i]);
            fs.copyFileSync(source, destination);
        }
        // else {
        //     let source = path.join(directoryPath, files[i]);;
        //     let destination= path.join(directoryPath, "./name" , "/others", files[i]);
        //     fs.copyFileSync(source, destination);
        // }
    }