import { expect, test } from "@playwright/test";

test("handling alert box", async ({ page }) => {
    await page.goto("https://testpages.herokuapp.com/styled/alerts/alert-test.html")

    // for alerts we use events...
    page.on("dialog", async (alert) => {
        const alertMessage = alert.message();
        console.log(alertMessage);


        await alert.accept();
    })

    await page.locator("#alertexamples").nth(0).click();
});

test("handling confirm box", async ({ page }) => {
    await page.goto("https://testpages.herokuapp.com/styled/alerts/alert-test.html")

    page.on("dialog", async (alert) => {
        const alertMessage = alert.message();
        console.log(alertMessage);


        await alert.dismiss();
    })

    await page.locator("#confirmexample").nth(0).click();
    // toHaveText is precise
    expect(page.locator("#confirmreturn")).toContainText("false");
});

test("handling prompt box", async ({ page }) => {
    await page.goto("https://testpages.herokuapp.com/styled/alerts/alert-test.html")

    const testText = "TEST PROMPT";
    page.on("dialog", async (alert) => {
        const alertMessage = alert.defaultValue();
        console.log(alertMessage);
        await alert.accept(testText);
    })

    await page.locator("#promptexample").nth(0).click();
    // toHaveText is precise
    expect(page.locator("#promptreturn")).toHaveText(testText);
});

test("special case - modal", async ({ page }) => {
    await page.goto("https://getbootstrap.com/docs/4.0/components/modal/")

    await page.locator("//button[@data-target='#exampleModalLive']").nth(0).click();
    await page.locator("(//button[text()='Save changes'])[2]");
});

