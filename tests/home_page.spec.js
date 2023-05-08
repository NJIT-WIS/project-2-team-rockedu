const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');
const path = require('path');

const config = require(path.join(process.cwd(), 'playwright.config.js'));
const { pages } = require(path.join(process.cwd(), 'tests', 'pages.json'));

const TIMEOUT = 30 * 1000;
async function checkTextOnPage(pageUrl, expectedText, selector) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(pageUrl, { timeout: TIMEOUT });
  const pageText = await page.textContent(selector);
  await browser.close();
  expect(pageText).toBe(expectedText);
}

test(`Page "/" should have Revolutionize Education as heading`, async ({ }) => {
  const pageUrl = `${config.use.baseURL}/`;

  const expectedTitle = "Revolutionize Education";
  await checkTextOnPage(pageUrl, expectedTitle, "#heading");
});


test(`Page "/" should have "Empower Your Classroom with Easy Daily Management!" as desc`, async ({ }) => {
  const pageUrl = `${config.use.baseURL}/`;

  const expectedTitle = "Empower Your Classroom with Easy Daily Management!";
  await checkTextOnPage(pageUrl, expectedTitle, "#desc2");
});

test(`Page "/" should have a button with text "Our Blogs"`, async ({ }) => {
  const pageUrl = `${config.use.baseURL}/`;

  const expectedTitle = "Our Blogs";
  await checkTextOnPage(pageUrl, expectedTitle, "#button-0");
});