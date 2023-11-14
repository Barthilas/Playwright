import BasePage from "./basePage";

export class ApplePage extends BasePage {
  async addFirstProductToTheCart() {
    await this.page.hover("(//div[@class='image']/a)", { strict: false });
    await this.page.locator("(//button[@title='Add to Cart'])").nth(0).click();
  }

  async isToastVisible() {
    // await this.page.waitFor
    const toast = this.page.locator("//a[contains(.,'View Cart')]");
    await toast.waitFor({ state: "attached" });
    return toast;
  }
}
