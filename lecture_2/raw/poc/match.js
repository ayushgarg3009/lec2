let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
console.log("request send");
let path = require("path");

function eachMatchHandler(url){
    request(url, dataReceiver);
}
function dataReceiver(err, res, html) {
    if(err==null && res.statusCode == 200) {
       // // console.log(res);
        // console.log(html);
        parseHtml(html);
    } else if(res.statusCode == 404){
        console.log("Page Not found");
    }else{
        console.log(err);
        console.log(res);
    }
}





function parseHtml(html){
    
    let $ = cheerio.load(html);
    let bothInnings = $(".match-scorecard-page div .card.content-block.match-scorecard-table");

    for(let inn = 0; inn < bothInnings.length; inn++){
        
        let rows = $(bothInnings[inn]).find("table.table.batsman tbody tr");
        let teamName = $(bothInnings[inn]).find("h5").text();


        teamName = teamName.split("Innings")[0].trim();
        
        for(let i=0;i< rows.length;i++){
            
            let colsinEVeryRow=$(rows[i]).find("td");

            let isPlayer = $(colsinEVeryRow[0]).hasClass("batsman-cell");
            if(isPlayer==true){
                let pName = $(colsinEVeryRow[0]).text().trim();
                let runs = $(colsinEVeryRow[2]).text();
                let balls = $(colsinEVeryRow[3]).text();
                
                // console.log(`${pName} of ${teamName} scored ${runs} in ${balls} balls`);
                handlePlayer(pName, teamName, runs, balls);
            }
        }

        console.log("```````````````");
    }
    // console.log("###################");
   
}


module.exports = eachMatchHandler;


function checkWetherDirPresent(dirPath){
    return fs.existsSync(dirPath);
}

function checkWetherFilePresent(filePath) {
    return fs.existsSync(filePath);
}

function createDirectory(dirPath) {
    return fs.mkdirSync(dirPath);
}

function createfile(filePath) {
    fs.openSync(filePath, 'w');
}

function handlePlayer(pName, teamName, runs, balls){
    let dirPath = path.join(__dirname, teamName);
    let isdirPresent = checkWetherDirPresent(dirPath);
    if(isdirPresent == false){
        createDirectory(teamName);
    }

    let filePath = path.join(__dirname, teamName, pName+".json");
    let isthereFile = checkWetherFilePresent(filePath);
    if(isthereFile == false) {
        createfile(filePath);
        let entries=[];
        let newObj = {};
        newObj.Runs=runs;
        newObj.Balls=balls;
        entries.push(newObj);
        let stringObj = JSON.stringify(entries);
        fs.writeFileSync(filePath, stringObj);
    }
    else{
        let content = fs.readFileSync(filePath,"utf-8");
        let entries = JSON.parse(content);
        let newObj={};
        newObj.Runs=runs;
        newObj.Balls=balls;
        entries.push(newObj);
        let stringObj = JSON.stringify(entries);
        fs.writeFileSync(filePath, stringObj);
    }

}