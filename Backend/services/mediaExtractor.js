const puppeteer = require('puppeteer');

async function extractMediaFromPage(url) {
  let browser;


  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({
      width: 640,
      height: 480,
      deviceScaleFactor: 1,
    });
    await page.goto(url, { timeout: 0, waitUntil: 'networkidle2' });

    // Scroll the page to trigger lazy loading
    await page.evaluate(async () => {
      await new Promise(resolve => {
        let totalHeight = 0;
        const distance = 100;
        const timer = setInterval(() => {
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= document.body.scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });

    // Wait for images to load
    await page.waitForSelector('img', { visible: true });

    const mediaUrls = await page.evaluate(() => {
      const media = new Set();

      const postContainer = document.querySelector('article');
      if (!postContainer) return [];

      const images = postContainer.querySelectorAll('img');

      images.forEach(img => {
        const src = img.src;

        if (
          src &&
          img.naturalWidth > 300 &&
          !src.includes('profile') &&
          !src.includes('s150x150')
        ) {
          media.add(src);
        }
      });

      return Array.from(media).slice(0, 5);
    });




    return mediaUrls;
  } catch (err) {
    throw new Error(`Failed to extract media: ${err.message}`);
  } finally {
    if (browser) await browser.close();
  }
}

module.exports = { extractMediaFromPage };
