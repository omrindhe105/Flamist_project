const puppeteer = require('puppeteer');

async function extractMediaFromPage(url) {
  let browser;
  console.log("url fetched: " + url);

  try {
    browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url, { timeout: 0, waitUntil: 'networkidle2' });

    const mediaUrls = await page.evaluate(() => {
      const media = new Set();
      const postContainer = document.querySelector('article');
      if (!postContainer) return [];
      const videos = postContainer.querySelectorAll('video');
      const images = postContainer.querySelectorAll('img');

      videos.forEach(video => video.src && media.add(video.src));
      images.forEach(img => {
        if (
          img.src &&
          img.naturalWidth > 300 &&
          !img.src.includes('profile') &&
          !img.src.includes('s150x150')
        ) {
          media.add(img.src);
        }
      });

      return Array.from(media);
    });

    return mediaUrls;
  } catch (err) {
    throw new Error(`Failed to extract media: ${err.message}`);
  } finally {
    if (browser) await browser.close();
  }
}

module.exports = { extractMediaFromPage };
