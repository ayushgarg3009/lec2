// npm install selenium-webdriver
// npm install chromedriver

// ayu dd
// 1234567
// bovel83741@openavz.com

require("chromedriver");
let swd = require("selenium-webdriver");

let bldr = new swd.Builder();

let driver = bldr.forBrowser("chrome").build();
let GWillBeOpendP = driver.get("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
// GWillBeOpendP.then(function(){
//     // console.log("Home Page Opened");
//     let emailPromise = driver.findElement(swd.By.css("#input-1"));

//     emailPromise.then(function (emailElement) {
//         let EWillBeEP = emailElement.sendKeys("hsdfvamsdjhf");

//         EWillBeEP.then(function () {
//             console.log("Data entered");
//         });
//     });

// });
// GWillBeOpendP.catch(function(err){
//     console.log(err);
// })


GWillBeOpendP.then(function () {
    let addImpWaitP = driver.manage().setTimeouts({ implicit: 10000 });
    return addImpWaitP;
})
    .then(function () {
        // console.log("Home page opened");
        let emailPromise = driver.findElement(swd.By.css("#input-1"));
        return emailPromise;
    }).then(function (emailElement) {
        let EWillBeEP = emailElement.sendKeys("bovel83741@openavz.com");
        return EWillBeEP;
    }).then(function () {
        // search passbox
        let passwordPromise = driver.findElement(swd.By.css("#input-2"));
        return passwordPromise;
    }).then(function (passwordElement) {
        // enter password
        let passwordEnteredP = passwordElement.sendKeys("1234567");
        return passwordEnteredP
    }).then(function () {
        // email and pass entered
        let loginBtnP = driver.findElement(swd.By.css("button.auth-button"));
        return loginBtnP;
    }).then(function (loginBtn) {
        let clickP = loginBtn.click();
        return clickP;
    }).then(function () {
        let ipBtnP = driver.findElement(swd.By.css("#base-card-1-link"));
        return ipBtnP;
    }).then(function (ipBtn) {
        let btnWillBeclickedP = ipBtn.click();
        return btnWillBeclickedP;
    }).then(function () {
        console.log("reached ip kit page");
    })
    .then(function (){
        let arrbtn = driver.findElement(swd.By.css("#base-card-2-link"));
        return arrbtn;
    }).then(function (arrbtn){
        let arrbtnclick = arrbtn.click();
        return arrbtnclick;
    })
    .then(function () {
        console.log("Inside Array");
    })
    
    .catch(function (err) {
        console.log(err)
    })
