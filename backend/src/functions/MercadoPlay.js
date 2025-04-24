import puppeteer from 'puppeteer';

const PerformSearch = async (page, query) => {
    // await page.screenshot({ path: 'debug.png', fullPage: true });
    // await page.waitForSelector('#cb1-edit', { timeout: 60000 }); // 60s
    await page.waitForSelector('#cb1-edit');
    await page.type('#cb1-edit', query);
    await page.keyboard.press('Enter');
}

const AnalyzeResults = async (page) => {
    // await page.evaluate(() => window.scrollBy(0, window.innerHeight));
    // await page.waitForTimeout(1000);
    // await page.waitForSelector('.infinite-scroll-component', { timeout: 10000 });

    await page.waitForSelector('.infinite-scroll-component');

    const result = await page.$$eval('.infinite-scroll-component > article', (children) => {
        
        let results = [];

        for(const child of children){
            if(child.className === 'feed__item feed__item--typography') break;

            let obj = { name: '', year: 1800, link: '' };

            const name = child.querySelector('h2').innerText;
            const link = child.querySelector('a').href;
            const year = (child) => {
                const spans = child.querySelectorAll('span');
                const finalEl = spans.length - 1;
                const year = spans[finalEl].innerText;
                return year;
            }
            
            obj.name = name;
            obj.link = link;
            obj.year = year(child);

            results.push(obj);
        }

        return results;
        
    });

    return result;
}

const mercadoPlay = async (query) => {
    // const browser = await puppeteer.launch({
    //     headless: false,
    //     slowMo: 250, // desacelera ações
    //     args: ['--no-sandbox', '--disable-setuid-sandbox']
    // });
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    const url = 'https://play.mercadolivre.com.br/';

    await page.goto(url, { waitUntil: ['load', 'domcontentloaded', 'networkidle2'] });
    await page.setUserAgent(
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
    );
    await page.setViewport({ width: 1080, height: 1024 });
    await page.evaluateOnNewDocument(() => {
        Object.defineProperty(navigator, 'webdriver', { get: () => false });
    });

    await PerformSearch(page, query);
    const results = await AnalyzeResults(page);

    await browser.close();

    return results;
};

const movie = {
    "adult": false,
    "backdrop_path": "/564Ei4zy6X2JfdBIW4PSeGfyqkI.jpg",
    "genre_ids": [
      27,
      53
    ],
    "id": 13207,
    "original_language": "en",
    "original_title": "Friday the 13th",
    "overview": "Em Crystal Lake, o que começou como o melhor fim semana de suas vidas rapidamente poderia se tornar o último. Um grupo de adolescentes, a quilômetros de distância da civilização estão prestes a descobrir, um a um, que o lago tem um sangrento passado... e está pronto para vingança.",
    "popularity": 4.5613,
    "poster_path": "/uuDxdyMC24unNcnJLS61NipPs2F.jpg",
    "release_date": "2009-02-11",
    "title": "Sexta-Feira 13",
    "video": false,
    "vote_average": 5.742,
    "vote_count": 2662
};
const query = movie.original_title;

const movies = await mercadoPlay(query);
console.log('RESULTADO AQUI \n', movies);
