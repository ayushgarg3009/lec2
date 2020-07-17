let pp = require("puppeteer");
async function fn() {
    try{
        let browser = await pp.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
            slowMo: 100
        });
        let AllTabs = await browser.pages();
        let tab = AllTabs[0];
        await tab.goto("https://www.google.co.in/maps/");
        await tab.type("#searchboxinput", "Dwarka, New Delhi, Delhi");
        await tab.click("#searchbox-directions");
        await tab.waitForSelector("#directions-searchbox-0 .tactile-searchbox-input",{ visible: true });
        await tab.type("#directions-searchbox-0 .tactile-searchbox-input","Janakpuri, New Delhi, Delhi");

        await tab.keyboard.press('Enter');
        
    }
    catch(err){
        console.log(err);
    }
    
}
fn();

// ui-btn ui-btn-large ui-btn-primary auth-button