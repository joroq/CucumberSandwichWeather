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
    const itemText = await browser.getElement('item-1');
    const text = await itemText.getText();
    expect(text).toBe('A dozen eggs');
});

test("Add input and click", async () => {
    const addedItem = 'My added item';
    const input = await browser.getElement('new-item');
    const submit = await browser.getElement('create-item');
    await input.sendKeys(addedItem);
    await submit.click();
    const topItem = await browser.getElement('item-1');
    const text = await topItem.getText();
    expect(text).toBe(addedItem);
})