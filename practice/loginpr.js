let pp = require("puppeteer");
async function fn() {
    try{
        let browser = await pp.launch({
            headless: false,
            defaultViewport: null,
            args: ["--start-maximized"],
            // slowMo: 100
        });
        let AllTabs = await browser.pages();
        let tab = AllTabs[0];
        // await tab.goto("https://www.hackerrank.com/interview/interview-preparation-kit");
        
        await tab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
        await tab.type("#input-1", "bovel83741@openavz.com");
        await tab.type("#input-2", "1234567");
    
        await tab.click("button.ui-btn.ui-btn-large.ui-btn-primary.auth-button");
        await Promise.all([
            tab.waitForNavigation({ waitUntil: "networkidle0" }),
            tab.click("button.auth-button"),
        ]);
        
        // await Promise.all([
        //     tab.waitForNavigation({ waitUntil: "networkidle0" }),
        //     tab.click("#base-card-1-link"),
        // ]);
        await tab.click("#base-card-1-link");
        console.log("hello 1");

        // await tab.waitFor (1500);
        await tab.waitForSelector("a[data-attr1='warmup']", { visible: true });
        await Promise.all([
            tab.waitForNavigation({ waitUntil: "networkidle0" }),
            tab.click("a[data-attr1='warmup']"),
        ]);
        
    }
    catch(err){
        console.log(err);
    }
    
}
fn();

// ui-btn ui-btn-large ui-btn-primary auth-button