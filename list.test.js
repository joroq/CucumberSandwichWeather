const Browser = require("./Browser");
const browser = new Browser();
const timeout = 20000;

beforeAll(async () => {
    browser.browserBuild();
}, timeout);

beforeEach(async () => {
    await browser.browserNavigate('http://localhost:8080');
}, timeout);

afterAll(async () => {
    await browser.browserExit();
}, timeout);

test("Simple CSS selector", async () => {
    const element = await browser.getElementByCss('h1');
    const text = await element.getText();
    expect(text).toBe('Credersi Shopping List');
});

test("Simple click", async () => {
    const element = await browser.getElement('action-1');
    await element.click();
    const text = await (await browser.getElement('item-1')).getText();
    expect(text).toBe('A dozen eggs');
});