import { test as baseTest } from "@playwright/test";

import RegisterPage from "../pages/registerPage";
import BasePage from "../pages/basePage";
import LoginPage from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { ApplePage } from "../pages/applePage";

type pages = {
  registerPage: RegisterPage;
  loginPage: LoginPage;
  homePage: HomePage;
  applePage: ApplePage;
  basePage: BasePage;
};

const testPages = baseTest.extend<pages>({
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  applePage: async ({ page }, use) => {
    await use(new ApplePage(page));
  },

  basePage: async ({ page }, use) => {
    await use(new BasePage(page));
  },
});

export const test = testPages;
