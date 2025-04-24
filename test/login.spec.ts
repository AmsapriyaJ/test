import { test, expect,Browser,Page,Locator} from '@playwright/test';
import {webkit,firefox} from '@playwright/test';


test('User can log in successfully', async () => {
  // Navigate to the login page
  const browser:Browser = await firefox.launch({headless: false});
  const page:Page = await browser.newPage();
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  // Fill in the username and password fields
  const username:Locator= await page.locator('#username');
  const password:Locator= await page.locator('#password');

  await username.fill("student");
  await password.fill("Password123");
  
  // Click the login button
  await page.click('#submit');

  // Verify that the login was successful by checking the URL and a success message
  await expect(page).toHaveURL(/.*logged-in-successfully/);
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});