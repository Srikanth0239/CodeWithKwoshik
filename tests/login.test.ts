import { chromium, test } from "@playwright/test"
test('login test', async () => {
    const browser = await chromium.launch({
        headless :false
    });


    //changes are done
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@class='icon-left both nav-link dropdown-toggle']//span[contains( . ,'My account')]");
    await page.click("text=Login");

    await page.fill("//input[@name='email']","balasrikanth48@gmail.com");
    await page.fill("//input[@name='password']","Sri123")
    await page.click("//input[@value='Login']");
})