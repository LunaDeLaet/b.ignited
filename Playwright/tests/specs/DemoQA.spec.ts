import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page'
import { FormsPage } from '../pages/forms.page'


test("test practice form", async ({ page }) => {
    const homePage = new HomePage(page)

    // open url demoqa.com
    await homePage.goto()

    // scroll to forms card
    await homePage.formsCard.scrollIntoViewIfNeeded()
    // click forms card
    await homePage.formsCard.click()


    //on forms page
    const formsPage = new FormsPage(page)
    // click practice form
    await formsPage.practiceForm.click()



    // fill in form
    await formsPage.firstName.waitFor({ state: 'visible' })
    await formsPage.firstName.type('Luna')

    await formsPage.lastName.scrollIntoViewIfNeeded()
    await formsPage.lastName.type('De Laet')

    await formsPage.genderFemale.scrollIntoViewIfNeeded()
    await formsPage.genderFemale.click()

    await formsPage.userNumber.scrollIntoViewIfNeeded()
    await formsPage.userNumber.type('0467039774')

    //submit form
    await formsPage.submit.scrollIntoViewIfNeeded()
    await formsPage.submit.click()

});