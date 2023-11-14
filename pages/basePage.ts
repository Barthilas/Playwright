import { Page } from "@playwright/test";

export default class BasePage {
  constructor(protected page: Page) {}

  public static generateRandomText(length: number = 20): string {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    return this.generateRandom(characters, length);
  }

  public static generateRandomNumbers(length: number = 10) {
    const characters = "0123456789";
    return this.generateRandom(characters, length);
  }

  private static generateRandom(
    characters: string,
    length: number = 10
  ): string {
    let randomText = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomText += characters.charAt(randomIndex);
    }

    return randomText;
  }
}
