import BasePage from "./basePage";

export class HomePage extends BasePage {
  async clickOnSpecialHotMenu() {
    await this.page.click("'Special Hot'");
  }

  async clickOnAppleInMegaMenu() {
    await this.hoverOnMegaMenu();
    await this.page.click("//a[contains(text(),'Apple')]");
  }

  private async hoverOnMegaMenu() {
    await Promise.all([
      this.page.waitForLoadState("networkidle"),
      this.page.hover("//a[contains(.,'Mega Menu')]"),
    ]);
  }
}
