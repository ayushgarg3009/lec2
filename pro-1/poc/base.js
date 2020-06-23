var fs = require('fs');
var path = require('path');

console.log("hell 0");
let source = path.join(__dirname, '');
let target= path.join(__dirname, "./name" + "/nn");
fs.copyFile(source, target, function (err) {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    console.log("hell 1");
    var targetFile = target;

    //if target is a directory a new file with the same name will be created
    if ( fs.existsSync( target ) ) {
        if ( fs.lstatSync( target ).isDirectory() ) {
            targetFile = path.join( target, path.basename( source ) );
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
})

function copyFolderRecursiveSync( source, target ) {
    var files = [];

    //check if folder needs to be created or integrated
    var targetFolder = path.join( target, path.basename( source ) );
    if ( !fs.existsSync( targetFolder ) ) {
        fs.mkdirSync( targetFolder );
    }

    //copy
    if ( fs.lstatSync( source ).isDirectory() ) {
        files = fs.readdirSync( source );
        files.forEach( function ( file ) {
            var curSource = path.join( source, file );
            if ( fs.lstatSync( curSource ).isDirectory() ) {
                copyFolderRecursiveSync( curSource, targetFolder );
            } else {
                copyFileSync( curSource, targetFolder );
                console.log("done");
            }
        } );
    }
}











// fs.mkdirSync(dirPath, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("New directory--1 successfully created.");

    // let dirPath_2 = path.join(__dirname, "./name" + "/nn");
    // fs.mkdir(dirPath_2, function(err) {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log("New directory--2 successfully created.");
    //   }
    // })
    
  // }
// })