import { test } from "@playwright/test";

test("Windows test", async ({ page }) => {
  await page.goto("https://testpages.eviltester.com/styled/windows-test.html");

  console.log(page.url());

  const [newWindow] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("#gobasicajax"),
  ]);
  // handle multiple windows if needed.
  await newWindow.waitForLoadState();
  const windows = newWindow.context().pages();
  // includes the base window aswell.
  console.log("Number of pages: ",windows.length);

  let pageIndex = 0;
  windows.forEach(window => {
    console.log(pageIndex, window.url());
    pageIndex++;
  })
});