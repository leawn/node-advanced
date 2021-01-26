const puppeteer = require('puppeteer');
const sessionFactory = require('./factories/sessionFactory');

let browser, page;

beforeEach(async () => {
    browser = await puppeteer.launch({
        headless: false
    });
    page = await browser.newPage();
    await page.goto('localhost:3000');
});

afterEach(async () => {
    await browser.close();
});

test('The header has the correct text.', async () => {
    const text = await page.$eval('a.brand-logo', el => el.innerHTML);
    expect(text).toEqual('Blogster');
});

test('Clicking login starts oauth flow', async () => {
    await page.click('.right a');

    const url = await page.url();

    expect(url).toMatch(/accounts\.google\.com/);
});

// the problem with oauth process is that we can get captchas because of automated testing
// the solution can be to fake the session
// or to get the captchas in some kind of interface and solve them when needed

test('When signed in, shows logout button', async () => {
    const { session, sig } = sessionFactory();

    await page.setCookie({ name: 'express:sess', value: session });
    await page.setCookie({ name: 'express:sess.sig', value: sig });
    await page.goto('localhost:3000');
    await page.waitFor('a[href="/auth/logout"]');

    const text = await page.$eval('a[href="/auth/logout"]', el => el.innerHTML);

    expect(text).toEqual('Logout');
});