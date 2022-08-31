import { Page, Locator } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly formsCard: Locator;


    constructor(page: Page) {
        this.formsCard = page.locator('.top-card').nth(1)
    }

    async goto() {
        await this.page.goto('https://demoqa.com')
    }
}