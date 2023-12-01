import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {}

  async login(email: string, password: string) {
    await this.enterEmail(email);
    await this.enterPassword(password);
    await this.clickLoginBtn();
    await 
  }

  async enterEmail(email: string) {
    await this.page.locator("#input-email").fill(email);
  }

  async enterPassword(text: string) {
    await this.page.locator("#input-password").fill(text);
  }

  async clickLoginBtn() {
    Promise.all([
      this.page.waitForLoadState(),
      this.page.click("#login-form-submit-button"),
    ]);
  }
}
