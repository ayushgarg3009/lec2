// const fetch = require("node-fetch");

// function getcoviddata(indexs) {
// fetch("https://api.covid19api.com/summary")
// .then(apidata =>{
//     console.log(apidata)
//     return apidata.json();
// }).then((actualdata)=> {
//     console.log(actualdata);
//     console.log(actualdata.Countries);
//     console.log(actualdata.Countries[76]);
//     console.log(actualdata.Countries[76].Country);
//     // const mydata = actualdata.Countries[76].Country;
//     // const mydata = actualdata.Countries[76];
//     const mydata = actualdata.Countries[`${indexs}`];
//     // document.getElementById('apiindia').innerHTML = mydata;
//     document.getElementById('apiindia').innerHTML = `Date ${mydata.Date} 
//     <br> The name of the country 
//     is ${mydata.Country}. The TotalConfirmed cases here is 
//     ${mydata.TotalConfirmed} <br>
//     and the TotalDeaths cases 
//     here is ${mydata.TotalDeaths} and finally the TotalRecovered 
//     cases here is ${mydata.TotalRecovered}`;

// }).catch((error)=> {
//     console.log(`The Error: ${error}`);
// });
// }

// getcoviddata(76)


async function getCovidApi(){
    try{
        const jsondata = await fetch("https://api.covid19api.com/summary");
        console.log(jsondata);

        const jsdata= await jsondata.json();
        console.log(jsdata);

        const mydata = jsdata.Countries[76];
        console.log(jsdata.Countries[76]);
        console.log(jsdata.Countries[76].Country);

    // document.getElementById('apiindia').innerHTML = mydata;
    document.getElementById('apiindia').innerHTML = `<b>Date ${mydata.Date} 
    <br> The name of the country 
    is ${mydata.Country}. The TotalConfirmed cases here is 
    ${mydata.TotalConfirmed} <br>
    and the TotalDeaths cases 
    here is ${mydata.TotalDeaths} and finally the TotalRecovered 
    cases here is ${mydata.TotalRecovered}</b>`;
    }
    catch(error){
        console.log(`The Error: ${error}`);
    }
}

getCovidApi(); 