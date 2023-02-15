const Browser = require("./Browser");
const browser = new Browser();
const timeout = 20000;

jest.setTimeout(timeout);

beforeAll(async () => {
    browser.browserBuild();
}, timeout);

beforeEach(async () => {
    await browser.browserNavigate('https://www.visitribblevalley.co.uk/');
}, timeout);

afterAll(async () => {
    await browser.browserExit();
}, timeout);



test("Simple CSS selector", async () => {
    const element = await browser.getElement('menu-item-409');
    const text = await element.getText();
    expect(text).toBe('EVENTS');
});

test("Complex CSS selector", async () => {
    const element = await browser.getElementByCss('#tablepress-1 > tbody > tr > td > p > a > img');
    const title = await element.getAttribute("title")
    expect(title).toBe('Places');
});

// test("Use menu to click to Places link", async () => {
//     const menuItem = await browser.getElement('menu-item-5122');
//     await browser.elementHover(menuItem);
//     const linkText = await browser.getElementByCss('#menu-item-5122 > ul > #menu-item-982 > a')
//     await linkText.click();
//     const next = await browser.getElementByCss('#portfolio-items > div:nth-child(6) > h6');
//     const text = await next.getText();
//     expect(text).toBe('Longridge');
// })

// test("Click to Places link", async () => {
//     const element = await browser.getElementByCss('#tablepress-1 > tbody > tr > td > p > a');
//     //await element.click();
//     await browser.elementClick(element);
//     await browser.waitForElementByCss('#portfolio-items > div:nth-child(6) > h6');
//     const next = await browser.getElementByCss('#portfolio-items > div:nth-child(6) > h6');
//     const text = await next.getText();
//     expect(text).toBe('Longridge');
    
// });

// test("Click to Request a Brochure link", async () => {
//     const element = await browser.getElementByCss('#tablepress-2 > tbody > tr > td > a');
//     await element.click();
//     await browser.waitForElementByCss('#content > h1');
//     const next = await browser.getElementByCss('#content > h1');
//     const text = await next.getText();
//     expect(text).toBe('Request a Brochure');
    
// });