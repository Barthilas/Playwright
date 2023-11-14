import { expect, test } from "@playwright/test";
import RegisterPage from "../pages/registerPage";
import BasePage from "../pages/basePage";
import LoginPage from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { ApplePage } from "../pages/applePage";

// ideally we use different data for login and register.
// in this case it has dependant order, which is wrong.
const password = BasePage.generateRandomText(20);
const email = `${BasePage.generateRandomText(8)}@eviltester.com`;

// @ annotation = you can simply run set of tests.
// npx playwright test --grep @fast
// or all other than.
// npx playwright test --grep-invert @slow
test.describe("Page object demo @fast", async () => {
  test("Register test_01", async ({ page, baseURL }) => {
    const firstName = BasePage.generateRandomText();
    const lastName = BasePage.generateRandomText();
    const telephone = BasePage.generateRandomNumbers(10);

    const registerPage = new RegisterPage(page);
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

  test("Login test_02", async ({ page, baseURL }) => {
    const loginPage = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`);
    loginPage.login(email, password);
    await page.waitForLoadState("networkidle");
    expect(await page.title()).toBe("My Account");
  });

  test("Add to card test_03", async ({ page, baseURL }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const applePage = new ApplePage(page);

    await page.goto(`${baseURL}route=account/login`);
    await loginPage.login(email, password);

    await homePage.clickOnAppleInMegaMenu();
    await applePage.addFirstProductToTheCart();
    const isCartVisible = await applePage.isToastVisible();
    expect(isCartVisible).toBeVisible();
  });
});
