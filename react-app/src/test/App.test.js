const puppeteer = require('puppeteer');

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({args: ['--window-size=1920,1080',],});
    page = await browser.newPage();
  });

  it("contains the welcome text", async () => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector(".col-sm-5.info");
    await page.setViewport({
      width: 1920,
      height: 1080,
    });
    await page.screenshot({ path: `src/test/screenshots/fullpage.png`, fullPage: true });
    
  });

  afterAll(() => browser.close());
});