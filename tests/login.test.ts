import { chromium, test } from "@playwright/test";

test("Login test demo", async () => {
  // use Page fixture.. this is demo
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover("(//a[@data-toggle='dropdown']//div)[3]");
  //   await page.click("text=Login");
  await page.click("'Login'");

  await page.fill("input[id='input-email']", "botoriy444@mkurg.com");
  await page.fill("input[id='input-password']", "abcd");
  await page.click("input[type='submit']");

  await page.waitForTimeout(5000);

  // will not keep login cookies etc..
  const newContext = await browser.newContext();

  const page1 = await newContext.newPage();
  await page1.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
  );

  await page.waitForTimeout(5000);
});
