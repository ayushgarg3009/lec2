var fs = require('fs');

// var jsn = [{
//     "name": "Nilesh",
//     "school": "RDTC",
//     "marks": "77"
//    },{
//     "name": "Sagar",
//     "school": "RC",
//     "marks": "99.99"
//    },{
//     "name": "Prashant",
//     "school": "Solapur",
//     "marks": "100"
//  }];

var jsn = [{"Runs":"6","Balls":"14"},
{"Runs":"0","Balls":"1"},
{"Runs":"0","Balls":"1"},
{"Runs":"1","Balls":"5"},
{"Runs":"19","Balls":"38"},
{"Runs":"10","Balls":"40"}];

var data='';
for (var i = 0; i < jsn.length; i++) {
    // data=data+jsn[i].name+'\t'+jsn[i].school+'\t'+jsn[i].marks+'\n';
    data=data+jsn[i].Runs+'\t'+jsn[i].Balls+'\t'+'\n';
 }
fs.writeFileSync('Filename.xls', data);