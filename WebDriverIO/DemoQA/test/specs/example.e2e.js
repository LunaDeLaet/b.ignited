const formsPage = require('../pages/forms.page')
const homePage = require('../pages/home.page')

describe('demoQA test', () => {
  it('practice form', async () => {
    // open url demoqa.com
    await browser.url('')

    // scroll to forms card and center it in screen
    await homePage.formsCard.scrollIntoView({ block: 'center' })
    // click forms card
    await homePage.formsCard.click()

    // click practice form
    await formsPage.practiceForm.click()

    // fill in form
    await formsPage.firstName.waitForDisplayed()
    await formsPage.firstName.setValue('Luna')

    await formsPage.lastName.scrollIntoView({ block: 'center' })
    await formsPage.lastName.setValue('De Laet')

    await formsPage.genderFemale.scrollIntoView({ block: 'center' })
    await formsPage.genderFemale.click()

    await formsPage.userNumber.scrollIntoView({ block: 'center' })
    await formsPage.userNumber.setValue('0467039774')

    //submit form
    await formsPage.submit.scrollIntoView({ block: 'center' })
    browser.execute('arguments[0].click();', formsPage.submit)
  })
})
