const puppeteer = require('puppeteer');
const fs = require('fs-extra');

async function mySEConnection(credentialsFile,showBrowser) {
    const browser = await puppeteer.launch({ headless: !showBrowser});
    const page = await browser.newPage();
    credentials = await fs.readJSON(credentialsFile);
    await page.goto(credentials.myse_endpoint, { waitUntil: "domcontentloaded", timeout: 10000 });
    await page.waitFor('#loginField');
    await page.type('input#loginField', credentials.myse_username);
    await page.type('input#userpassword', credentials.myse_password);
    await page.click('input[type="submit"]');
    await page.waitFor('a[href="priceNAvailability.do"]');
    await page.click('a[href = "priceNAvailability.do"]');
    await page.waitFor('input#catalogNumber');
    return page;
}

module.exports = mySEConnection;