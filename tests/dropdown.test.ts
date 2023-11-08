import { expect, test } from "@playwright/test";

test("dropdown", async ({ page }) => {
  await page.goto(
    "https://testpages.eviltester.com/styled/basic-html-form-test.html"
  );

  const select = "select[name='dropdown']";
  await page.selectOption(select, {
    label: undefined,
    value: "dd3",
    index: undefined,
  });

  await expect(page.locator("option[value='dd3']")).toHaveAttribute("selected");
});

test("multiselect", async ({ page }) => {
  await page.goto(
    "https://testpages.eviltester.com/styled/basic-html-form-test.html"
  );

  const select = "select[multiple='multiple']";
  await page.selectOption(select, [
    {
      value: "ms1",
    },
    {
      index: 1,
    },
    {
      label: "Selection Item 3",
    },
  ]);

  await page.waitForTimeout(5000);
});

test.skip("bootstrap dropdown - theoretical", async ({ page }) => {
  // goto
  // click on something to show the menu
  // get the locator for the ul, div, whatever
  // thus we can chain. neco > li

  // as the final step make this probably a helper method as I did in Cypress.
  await page
    .locator("neco")
    .locator("li", {
      hasText: "CZ",
    })
    .click();
});
 