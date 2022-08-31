const wdio = require('webdriverio')
const assert = require('assert')
const { default: $ } = require('webdriverio/build/commands/browser/$')

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'Android',
    platformVersion: '12',
    deviceName: 'Android Emulator',
    automationName: 'UiAutomator2',
    browserName: 'Chrome',
  },
}

async function main() {
  const browser = await wdio.remote(opts)

  // type into a text field and check that the correct text was entered
  await browser.url('https://demoqa.com/')

  formsPage = await browser.$("(//div[contains(@class, 'top-card')])[2]")
  await browser.execute('arguments[0].click();', formsPage)

  practiceForm = await browser.$('.text=Practice Form')
  await browser.execute('arguments[0].click();', practiceForm)

  //locate first name input
  inputFirstName = await browser.$("//input[@id='firstName']")
  // send keys
  await inputFirstName.setValue('Luna')

  //locate last name input
  inputFirstName = await browser.$("//input[@id='lastName']")
  // send keys
  await inputFirstName.setValue('De Laet')

  //locate gender female radio button
  genderFemale = await browser.$("//label[@for='gender-radio-2']")
  // click
  await genderFemale.click()
  // locate mobile number input
  userNumber = await browser.$("//input[@id='userNumber']")
  // send keys
  await userNumber.setValue('0467039777')

  //  submit
  submit = await browser.$("//button[@id='submit']")
  await browser.execute('arguments[0].click();', submit)

  //await browser.deleteSession()
}

main()
