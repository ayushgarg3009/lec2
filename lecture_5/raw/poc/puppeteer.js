let pp = require("puppeteer");
async function fn() {
    let browser = await pp.launch({
        headless: false,
        defaultViewport: null,
        args: ["--start-maximized"],
        slowMo: 100
    });
    let AllTabs = await browser.pages();
    let tab = AllTabs[0];
    await tab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    await tab.type("#input-1", "bovel83741@openavz.com");
    await tab.type("#input-2", "1234567");
    

    await Promise.all([
        tab.waitForNavigation({ waitUntil: "networkidle0" }),
        await tab.click("button.auth-button"),
    ]);
    

    await tab.click('a[data-analytics="NavBarProfileDropDown"]');
}

fn();