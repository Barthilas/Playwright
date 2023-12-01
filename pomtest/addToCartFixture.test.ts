import { test } from "../base/pomFixture";
import { expect } from "@playwright/test";
import BasePage from "../pages/basePage";
import * as data from "../test-data/addToCart-test-data.json";

// ideally we use different data for login and register.
// in this case it has dependant order, which is wrong.
const password = BasePage.generateRandomText(20);
const email = `${BasePage.generateRandomText(8)}@eviltester.com`;

// test.use({
//   baseURL: "override"
// })

// @ annotation = you can simply run set of tests.
// npx playwright test --grep @fast
// or all other than.
// npx playwright test --grep-invert @slow
test.describe("Page object demo @fast", async () => {
  test("Register test_01", async ({ page, baseURL, registerPage }) => {
    // or use the json file...
    // const firstNameJson = data.firstName;

    const firstName = BasePage.generateRandomText();
    const lastName = BasePage.generateRandomText();
    const telephone = BasePage.generateRandomNumbers(10);

    // const registerPage = new RegisterPage(page);
    await page.goto(`${baseURL}route=account/register`);
    await registerPage.enterFirstName(firstName);
    await registerPage.enterLastName(lastName);
    await registerPage.enterPassword(password);
    await registerPage.enterConfirmPassword(password);
    await registerPage.enterEmail(email);
    await registerPage.enterTelephone(telephone);

    await expect(registerPage.isSubsribeChecked()).toBeChecked();
    await registerPage.clickTermsAndCondition();
    await registerPage.clickContinueToRegister();
  });

  test("Login test_02", async ({ page, baseURL, loginPage }) => {
    // const loginPage = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`);
    loginPage.login(email, password);
    await page.waitForLoadState("networkidle");
    expect(await page.title()).toBe("My Account");
  });

  test("Add to card test_03", async ({
    page,
    baseURL,
    loginPage,
    homePage,
    applePage,
  }) => {
    // const loginPage = new LoginPage(page);
    // const homePage = new HomePage(page);
    // const applePage = new ApplePage(page);

    await page.goto(`${baseURL}route=account/login`);
    await loginPage.login(email, password);

    await homePage.clickOnAppleInMegaMenu();
    await applePage.addFirstProductToTheCart();
    const isCartVisible = await applePage.isToastVisible();
    expect(isCartVisible).toBeVisible();
  });
});
