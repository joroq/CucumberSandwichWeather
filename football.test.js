const Browser = require("./Browser");
const browser = new Browser();
const timeout = 20000;

beforeAll(async () => {
    browser.browserBuild();
}, timeout);

beforeEach(async () => {
    await browser.browserNavigate('https://pnefc.net');
}, timeout);

afterAll(async () => {
    await browser.browserExit();
}, timeout);

test("Complex CSS selector", async () => {
    const element = await browser.getElementByCss('.col-xs-8 > nav > ul > li:nth-child(4) > a');
    const title = await element.getAttribute("title")
    expect(title).toBe('Link to Tickets');
});

// Following test gives error - element click intercepted. Seems to be another element over the top of it with very high z-index

// test("Click to company details", async () => {
//     const element = await browser.getElementByCss('.footer-nav > ul > li:nth-child(5)');
//     //const text = await element.getText();
//     await element.click();
//     const next = await browser.waitForElementByCss('#maincontent > .container-fluid > h2');
//     const text = await next.getText();
//     expect(text).toBe('Company Details');
// });