import puppeteer from 'puppeteer';
import 'dotenv/config';

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    const url = 'https://www.netflix.com/br/login';

    await page.goto(url, { waitUntil: 'load' });
    await page.setViewport({ width: 1080, height: 1024 });

    await page.type('[type="text"]', process.env.NETFLIX_EMAIL);
    await page.type('[name="password"]', process.env.NETFLIX_PASSWORD);
    await page.click('[type="submit"]');

    await page.click('[href="/browse/my-list"]');

    await page.click('[href="/browse/my-list"]');

}) ();