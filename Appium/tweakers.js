const wdio = require('webdriverio')
const { By } = require('selenium-webdriver')
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
  await browser.url('https://tweakers.net')

  //locate yesterday's last article
  element = await browser.$(
    "(//table[contains(@class, 'headlines')])[2]//td[contains(@class, 'title')]//a"
  )

  await browser.execute('arguments[0].click();', element)

  // logs author name
  console.log(await browser.$("//p[contains(@class, 'name')]").getText())

  // logs publish date
  console.log(
    await browser.$("//span[contains(@class, 'articleMeta')]").getText()
  )

  await browser.deleteSession()
}

main()
