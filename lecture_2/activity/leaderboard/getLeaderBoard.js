let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
// console.log("request send");
let path = require("path");

let leaderboard = []; 
let count=0;

function eachMatchHandler(url){
    count++;
    request(url, dataReceiver);
}
function dataReceiver(err, res, html) {
    if(err==null && res.statusCode == 200) {
       // // console.log(res);
        // console.log(html);
        count--;
        parseHtml(html);
        if(count==0){
            // cars.sort(function(a, b){return a.year - b.year});
            // for sorting the array similar to compare to in java
            leaderboard.sort(function(a, b){return b.runs - a.runs});
            console.table(leaderboard);
        }
    } else if(res.statusCode == 404){
        console.log("Page Not found");
    }else{
        console.log(err);
        console.log(res);
    }
}


function parseHtml(html){
    
    let $ = cheerio.load(html);

    let wTS = $(".summary span").text();
    // console.log(WTS);

    let wTeam = wTS.split("won").shift().trim();
    console.log(wTeam);

    let bothInnings = $(".match-scorecard-page div .card.content-block.match-scorecard-table");

    for(let inn = 0; inn < bothInnings.length; inn++){
        
        let rows = $(bothInnings[inn]).find("table.table.batsman tbody tr");
        let teamName = $(bothInnings[inn]).find("h5").text();

        teamName = teamName.split("Innings")[0].trim();
        if(teamName== wTeam){
            for(let i=0;i< rows.length;i++){
            
                let colsinEVeryRow=$(rows[i]).find("td");
    
                let isPlayer = $(colsinEVeryRow[0]).hasClass("batsman-cell");
                if(isPlayer==true){
                    let pName = $(colsinEVeryRow[0]).text();
                    let runs = $(colsinEVeryRow[2]).text();
                    let balls = $(colsinEVeryRow[3]).text();
                    
                    // console.log(`${pName} of ${teamName} scored ${runs} in ${balls} balls`);

                    addtoLeaderB(pName, teamName, runs);
                    // handlePlayer(pName, teamName, runs, balls);
                }
            }
        }
        

        console.log("```````````````");
    }
    console.log("###################");
   
}

function addtoLeaderB(pName, teamName, runs){

    runs = Number(runs);
    for(let i=0; i<leaderboard.length; i++){
        let entry = leaderboard[i];
        if(entry.name == pName && entry.team == teamName){
            entry.runs += runs;
            return;
        }
    }

    let newEntry = {};
    newEntry.name = pName;
    newEntry.team = teamName;
    newEntry.runs = runs;
    leaderboard.push(newEntry);
}


module.exports = eachMatchHandler;