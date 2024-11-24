import { test, expect } from '@playwright/test';

test('Test Login Success.', async ({ page }) => {
  await page.goto('https://workshop-playwright.vercel.app/');
  await page.getByTestId('username-input').fill('UT001');
  await page.getByTestId('password-input').fill('123456');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Welcome To ODDS| Conference Playwright Workshop')).toBeVisible();
});


test('Test Login Fail Because not input username and password.', async ({ page }) => {
    await page.goto('https://workshop-playwright.vercel.app/');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Username is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
  });


  test('Test Login Fail because not input Username.', async ({ page }) => {
    await page.goto('https://workshop-playwright.vercel.app/');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Username is required')).toBeVisible();
  });


test('Test Login Fail because not input Password.', async ({ page }) => {
    await page.goto('https://workshop-playwright.vercel.app/');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Password is required')).toBeVisible();
  });

test('Test Check placeholder name username and password', async ({ page }) => {
    await page.goto('https://workshop-playwright.vercel.app/');
    await expect(page.getByPlaceholder('Enter Username')).toBeVisible();
    await expect(page.getByPlaceholder('Enter Password')).toBeVisible();
});
