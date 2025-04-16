import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const url = 'https://x.com/Slashersmedia/status/1901469019481186548?t=lqo_oR3zy-ZHm4PuHZ8e2Q&s=08';

    await page.goto(url, { waitUntil: 'load' });
    await page.setViewport({ width: 1080, height: 1024 });

    const elementHandle = await page.waitForSelector('div.css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-1inkyih.r-16dba41.r-bnwqim.r-135wba7 > span');
    const text = await (await elementHandle.getProperty('textContent')).jsonValue();

    
    console.log('sp2', text);

}) ();