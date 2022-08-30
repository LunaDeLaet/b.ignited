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
  await browser.url('https://demoqa.com/')

  //locate first name input
  inputFirstName = await browser.$("(//input[@id, 'firstName'])")
  // send keys
  await inputFirstName.type('Luna')

  //locate last name input
  inputFirstName = await browser.$("(//input[@id, 'lastName'])")
  // send keys
  await inputFirstName.type('De Laet')

  //locate gender female radio button
  genderFemale = await browser.$()
  // click

  // locate mobile number input

  // send keys

  await browser.deleteSession()
}

main()
