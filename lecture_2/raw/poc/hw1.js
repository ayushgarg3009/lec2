let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
request("https://www.espncricinfo.com//series/8039/scorecard/656495/australia-vs-new-zealand-final-icc-cricket-world-cup-2014-15",dataReceiver);

function dataReceiver(err, res, html) {
    if(err==null && res.statusCode == 200) {
       // // console.log(res);
        // console.log(html);
        parsefile(html);
    } else if(res.statusCode == 404){
        console.log("Page Not found");
    }else{
        console.log(err);
        console.log(res);
    }
}

function parsefile(html){
    let $ = cheerio.load(html);
    // let list4 = $("table.table.batsman");
    // let list4 = $("td.batsman-cell.text-truncate.out").text();
    // let bat = $("td.batsman-cell.text-truncate.out").text();/
    let bat = $("a.small").text();
    let run = $("td.font-weight-bold").text();
    console.log(bat);
    console.log(run);
    // fs.writeFileSync("list4.html",bat);

    // let bat = $("tbody").text();
    // // console.log(bat);
    // for(let i=0;i<bat.length;i++){
    //     let result = $(bat[i]).find("td.batsman-cell.text-truncate.out a").attr("href");
    //     console.log(result);
    // }
}