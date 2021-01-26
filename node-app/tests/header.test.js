const puppeteer = require('puppeteer');

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
    const id = '6008060f434f1031ed8edee3';

    const Buffer = require('safe-buffer').Buffer;
    const sessionObject = {
        passport: {
            user: id
        }
    }

    const sessionString = Buffer
        .from(JSON.stringify(sessionObject))
        .toString('base64');

    const Keygrip = require('keygrip');
    const keys = require('../config/keys');
    const keygrip = new Keygrip([keys.cookieKey]);
    const sig = keygrip.sign('express:sess=' + sessionString);

    console.log(sessionString, sig);
    //eyJwYXNzcG9ydCI6eyJ1c2VyIjoiNjAwODA2MGY0MzRmMTAzMWVkOGVkZWUzIn19
    //rccRyCIyivpgLoBRmZRZvEskF9Y

});