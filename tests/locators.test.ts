import { chromium, expect, test } from "@playwright/test"


test('Locators', async ({ page }) => {

    await page.goto("https://demoblaze.com/")
    await page.click("//a[@id='login2']");

    await page.locator("#loginusername").fill("Srikanth0239")
    await page.locator("#loginpassword").fill("Bala@656697")
    await page.click("//button[normalize-space()='Log in']")

    const logoutbutton = await page.locator("//a[@id='logout2']")

    await expect(logoutbutton).toBeVisible();

})