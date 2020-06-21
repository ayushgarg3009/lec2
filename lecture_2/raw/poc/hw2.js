let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
console.log("request send");
let path = require("path");

request("https://www.espncricinfo.com/scores/series/8039/season/2015/icc-cricket-world-cup?view=results",dataReceiver);

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
    console.log("hello");
    let $ = cheerio.load(html);
    let win = $("div.card div.match-header div.summary span").text();
    console.log(win);
    // fs.writeFileSync("win.html",win);
   
}


