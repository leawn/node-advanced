const puppeteer = require('puppeteer');
const sessionFactory = require('../factories/sessionFactory');
const userFactory = require('../factories/userFactory');

class CustomPage {
    static async build() {
        const browser = await puppeteer.launch({
            headless: false
        });

        const page = await browser.newPage();
        const customPage = new CustomPage(page);

        return new Proxy(customPage, {
            get: function (target, p) {
                return customPage[p] || browser[p] || page[p];
            }
        });
    }

    constructor(page) {
        this.page = page;
    }

    async login() {
        const user = await userFactory();
        const { session, sig } = sessionFactory(user);

        await this.page.setCookie({ name: 'express:sess', value: session });
        await this.page.setCookie({ name: 'express:sess.sig', value: sig });
        await this.page.goto('localhost:3000');
        await this.page.waitForTimeout(1000);
    }

    async getContentsOf(selector) {
        return this.page.$eval(selector, el => el.innerHTML);``
    }
}

module.exports = CustomPage;