const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30 * 1000;

async function checkTextOnPage(pageUrl, expectedText) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });
  // get all the text on the page
  const pageText = await page.textContent("body");
  await browser.close();
  // check if the expected text is in the page text
  const isTextOnPage = pageText.includes(expectedText);
  expect(isTextOnPage).toBe(true);
}

test(`Page "/" should have "cookies"`, async ({ }) => {
  const pageUrl = `${config.use.baseURL}/posts/privacy-policy`;

  // const expectedTitle = "Data We Collect:";
  const expectedTitle = "cookies";
  await checkTextOnPage(pageUrl, expectedTitle);
});