import puppeteer from 'puppeteer';

const getTweetText = async (page) => {
    const elementHandle = await page.waitForSelector('div.css-146c3p1.r-bcqeeo.r-1ttztb7.r-qvutc0.r-37j5jr.r-1inkyih.r-16dba41.r-bnwqim.r-135wba7 > span');
    const text = await (await elementHandle.getProperty('textContent')).jsonValue();

    return text;
};

const getTweetLink = async (page) => {

    const selectorA = 'a.css-1jxf684.r-bcqeeo.r-1ttztb7.r-qvutc0.r-poiln3.r-1loqt21'; 

    await page.waitForSelector(selectorA);

    if (selectorA) {
        const spansText = await page.$$eval(selectorA, spans =>
            spans.map(span => span.textContent.trim())
        );

        if (spansText[0].startsWith("http")) {
            const link = spansText[0].replace(/\.{3,}$/, '');
            return link;
        }
        else return ''
    } else {
        return '';
    }
        
}

const getTweetImages = async (page) => {
    const selectorDiv = 'div.css-175oi2r.r-9aw3ui';

    const divMomHandle = await page.$(selectorDiv);

    if (divMomHandle) {
        const selectorImg = 'img.css-9pa8cd';
        const imgHandles = await divMomHandle.$$(selectorImg);

        const srcs = await Promise.all(
            imgHandles.map(async img => await img.evaluate(el => el.getAttribute('src')))
        );

        return srcs;
    } else {
        return '';
    }
}

const getUsername = async(page) => {
    const selectorDiv = 'div.css-175oi2r.r-1wbh5a2.r-dnmrzs';

    await page.waitForSelector(selectorDiv);
  
    const divMomHandle = await page.$(selectorDiv);
  
    if (!divMomHandle) {
      throw new Error(`Elemento com o seletor ${selectorDiv} não encontrado.`);
    }
  
    const tagA = await divMomHandle.$('a');
  
    if (!tagA) {
      throw new Error('Tag <a> não encontrada dentro da div mãe.');
    }

    const usernameLink = await tagA.evaluate(el => el.pathname);
    const username = usernameLink.split('/')[1];
    console.log(username);
    return username;
}

const getName = async(page) => {
    const selectorDiv = 'div.css-175oi2r.r-1wbh5a2.r-dnmrzs';

    await page.waitForSelector(selectorDiv);
  
    const divMomHandle = await page.$(selectorDiv);
  
    if (!divMomHandle) {
      throw new Error(`Elemento com o seletor ${selectorDiv} não encontrado.`);
    }
  
    const tagA = await divMomHandle.$('a');
  
    if (!tagA) {
      throw new Error('Tag <a> não encontrada dentro da div mãe.');
    }

    const usernameLink = await tagA.evaluate(el => el.pathname);
    const username = usernameLink.split('/')[1];
    console.log(username);
    return username;
}

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const url = 'https://x.com/michangelodvm/status/1911856992429232432';

    await page.goto(url, { waitUntil: 'load' });
    await page.setViewport({ width: 1080, height: 1024 });

    const username = await getUsername(page);
    const name = await getName(page);
    const text = await getTweetText(page);
    const link = await getTweetLink(page);
    const imgs = await getTweetImages(page);

    console.log({
        username: username,
        // tweetLink: url,
        // text: text,
        // link: link,
        // images: imgs
    })

    await browser.close();
}) ();