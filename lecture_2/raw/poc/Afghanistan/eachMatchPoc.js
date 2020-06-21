let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
console.log("request send");
let path = require("path");

request("https://www.espncricinfo.com/series/8039/scorecard/656495/australia-vs-new-zealand-final-icc-cricket-world-cup-2014-15",dataReceiver);

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
    let win = $(".summary span").text();
    // let win = $("div.card div.match-header div.summary span").text();
    console.log(win);
    let wTeam = wTS.split("won").shift.trim();
    // fs.writeFileSync("win.html",win);
   
}


