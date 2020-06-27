// npm install selenium-webdriver
//npm install chromedriver
require("chromedriver");
let swd = require("selenium-webdriver");
// build browser
let bldr = new swd.Builder();
// build a tab
let driver = bldr.forBrowser("chrome").build();
// pending 

async function fn() {
    try{
        let GWillBeOpendP = driver.get("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
        await GWillBeOpendP;
        let addImpWaitP = driver.manage().setTimeouts({ implicit: 10000 });
        await addImpWaitP;
        let emailPromise = driver.findElement(swd.By.css("#input-1"));
        let passwordPromise = driver.findElement(swd.By.css("#input-2"));
        // parallely run promises
        let bothElemP = Promise.all([emailPromise, passwordPromise]);
        let beArr = await bothElemP;
        let EWillBeEP = beArr[0].sendKeys("bovel83741@openavz.com");
        let passwordEnteredP = beArr[1].sendKeys("1234567");
        let bothKeysWillBeEnteredP = Promise.all([EWillBeEP, passwordEnteredP]);
        await bothKeysWillBeEnteredP;
        // let loginBtn = await driver.findElement(swd.By.css("button.auth-button"));
        // await loginBtn.click();
        await navigatorfn("button.auth-button");

    } catch(err){
        console.log(err);
    }
}
fn();

async function navigatorfn(selector) {
    try{
        let elemP = driver.findElement(swd.By.css(selector));
        let elem = await elemP;
        let clickP = elem.click();
        await clickP;
    }catch (err){
        console.log(err);
        return Promise.reject(err);
    }
}