import { test } from "@playwright/test";

test("JQuery calendar", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Datepicker.html");
  const date = "11/01/2023";

  // document.getElementById("datepicker").value reveals which value I need to pass.
  await page.fill("input#datepicker2", date);
  await page.waitForTimeout(5000);

  // locator for next/prev buttons example
  // can be useful when you want to test the next/previous buttons aswell instead of manually typing the value.
  // //table[@class='table-condensed']//th[@class='datepicker-switch'])[1]
  //table[@class='table-condensed']//th[@class='prev'])[1]
});
 