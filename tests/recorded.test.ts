import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("(//a[@data-toggle='dropdown']//div)[3]");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('botoriy444@mkurg.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('abcd');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await page.locator('#content div').filter({ hasText: 'First Name' }).locator('div').click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('prc');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: ' Logout' }).click();
});