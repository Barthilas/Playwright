import { expect, test } from "@playwright/test";
import { waitForDebugger } from "inspector";

test.skip("basic", async ({ page }) => {
  await page.goto("https://ecommerce-playground.lambdatest.io/");

  const messageInput = page.locator("input[data-autocomplete='5']");
  // sometimes usefull.
  await messageInput.scrollIntoViewIfNeeded();
  console.log(await messageInput.getAttribute("placeholder"));

  expect(messageInput).toHaveAttribute("placeholder", "Search For Products");
  // will be available in show-report as stdout.
  console.log("Before entering data: " + (await messageInput.inputValue()));

  await messageInput.fill("Hey");
  console.log("After entering data: " + (await messageInput.inputValue()));

  console.log(await messageInput.textContent());
  expect(messageInput).toHaveValue("Hey");
});

// fill vs type - type appends to text.

test.only("checkbox", async ({ page }) => {
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25");

    const checkbox = page.locator("//label[text()[normalize-space()='Mice and Trackballs']]/preceding-sibling::input");
    expect(checkbox).toHaveAttribute("type", "checkbox")
    expect(checkbox).not.toBeChecked();
    await checkbox.check();
    // click will act the same way.

    expect(checkbox).toBeChecked();
});
