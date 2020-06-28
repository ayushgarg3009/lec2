// npm install selenium-webdriver
//npm install chromedriver
require("chromedriver");
let swd = require("selenium-webdriver");
// build browser
let bldr = new swd.Builder();
// build a tab
let driver = bldr.forBrowser("chrome").build();
// pending 
let challenges = require("./challenges");
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

        let adminBtn = await driver.findElement(swd.By.css('a[data-analytics="NavBarProfileDropDown"]'));
        let actions = driver.actions({ async: true });
        await actions.move({ origin: adminBtn }).click().perform();
        await navigatorfn('a[data-analytics="NavBarProfileDropDownAdministration"]');
        
        await waitForLoader();

        let liArr = await driver.findElements(swd.By.css("ul.nav-tabs li"));
        await liArr[1].click();   

        let createChallengePageLink = await (await driver).getCurrentUrl();


        // let createChBtn = await driver.findElement(swd.By.css(".btn.btn-green.backbone.pull-right"));
        // await createChBtn.click();

        // await createChallenge(challenges[0]);

        for(let i=0; i< challenges.length;i++){
            await driver.get(createChallengePageLink);
            await waitForLoader();
            await createChallenge(challenges[i]);
        }

    } catch(err){
        console.log(err);
    }
}
fn();

async function createChallenge(challenge){

    let createChBtn = await driver.findElement(swd.By.css(".btn.btn-green.backbone.pull-right"));
    await createChBtn.click();

    let cSelector = ".CodeMirror textarea";
    let parent = ".CodeMirror div";
    let selectors = ['#name' , '#preview',
    `#problem_statement-container ${cSelector}`,
    `#input_format-container ${cSelector}`,
    `#constraints-container ${cSelector}`,
    `#output_format-container ${cSelector}`,
    "#tags_tag"];

    let allElemPArr = selectors.map(function (elselector) {
        return driver.findElement(swd.By.css(elselector));
    })

    let allElements = await Promise.all(allElemPArr);
        
    await allElements[0].sendKeys(challenge["Challenge Name"]);
    await allElements[1].sendKeys(challenge["Description"]);
    await enterData(allElements[2], `#problem_statement-container ${parent}`, challenge["Problem Statement"]);
    await enterData(allElements[3], `#input_format-container ${parent}`, challenge["Input Format"]);
    await enterData(allElements[4], `#constraints-container ${parent}`, challenge["Constraints"]);
    await enterData(allElements[5], `#output_format-container ${parent}`, challenge["Output Format"]);
    await allElements[6].sendKeys(challenge["Tags"]);
    await allElements[6].sendKeys(swd.Key.ENTER);

    let saveBtn = await driver.findElement(swd.By.css(".save-challenge.btn.btn-green"));
    await saveBtn.click();
    
}

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

async function enterData(element, parentSelc, data){

    let parent = await driver.findElement(swd.By.css(parentSelc));
    await driver.executeScript("arguments[0].style.height = `${10}px`",parent);
    await element.sendKeys(data);
}

async function waitForLoader() {
    let loader = (await driver).findElement(swd.By.css("#ajax-msg"));
    await driver.wait(swd.until.elementIsNotVisible(loader));
}