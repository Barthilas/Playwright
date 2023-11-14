import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export default class RegisterPage extends BasePage {
  async enterFirstName(firstName: string) {
    await this.page.locator("#input-firstname").fill(firstName);
  }
  async enterLastName(lastName: string) {
    await this.page.locator("#input-lastname").fill(lastName);
  }
  async enterEmail(email: string) {
    await this.page.locator("#input-email").type(email);
  }

  async enterTelephone(number: string) {
    await this.page.locator("input[name='telephone']").type(number);
  }
  async enterPassword(text: string) {
    await this.page.locator("#input-password").type(text);
  }
  async enterConfirmPassword(text: string) {
    await this.page.locator("#input-confirm").type(text);
  }

  // if you make this async it will throw error.
  isSubsribeChecked(): Locator {
    return this.page.locator("#input-newsletter-no");
  }

  async clickTermsAndCondition() {
    await this.page.click("#input-agree", { force: true });
  }

  async clickContinueToRegister() {
    await Promise.all([
      this.page.waitForLoadState("networkidle"),
      // else you would need to force call it.
      this.page.click("input[value='Continue']"),
    ]);
  }
}
