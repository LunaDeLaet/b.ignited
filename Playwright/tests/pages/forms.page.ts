import { Page, Locator } from '@playwright/test';

export class FormsPage {
    readonly page: Page;
    readonly practiceForm: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly genderFemale: Locator;
    readonly userNumber: Locator;
    readonly submit: Locator;


    constructor(page: Page) {
        this.practiceForm = page.locator('text=Practice Form')
        this.firstName = page.locator('input#firstName')
        this.lastName = page.locator('input#lastName')
        this.genderFemale = page.locator('text=Female')
        this.userNumber = page.locator('input#userNumber')
        this.submit = page.locator('text=Submit')
    }


} 