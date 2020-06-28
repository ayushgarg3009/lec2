let fs = require("fs");

// catch suppresses the error 

// async function fn(){
//     let fsP = fs.promises.readFile("f1.txt");
//     let data = await fsP;
//     console.log(data+"");
//     let sfP = await fs.promises.readFile("f2.txt");
//     data = await sfP;
//     console.log(data+"");
// }
// fn();

async function fn() {
    let fsP = fs.promises.readFile("f1.txt");
    let sfp = fs.promises.readFile("f2.txt");
    let dArr = await Promise.all([fsP, sfp]);
    // console.log(data + " ");
    console.log(dArr[0] + " ");
    console.log(dArr[1] + " ");
}
fn();