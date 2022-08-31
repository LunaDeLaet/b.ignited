import { test, expect } from '@playwright/test';

test("yesterday's last article author name and date not empty", async ({ page }) => {
    await page.goto('https://tweakers.net/');

    // go to yesterday's last article
    await page.locator('.headlines').nth(1).locator('td.title').nth(0).click()


    // locate author name and check if exists
    const authorName = page.locator('.name')
    await expect(authorName).not.toBeEmpty()

    // locate publish date and check if exists
    const date = page.locator('.articleMeta')
    await expect(date).not.toBeEmpty()

});
