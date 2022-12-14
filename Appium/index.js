const wdio = require('webdriverio')
const assert = require('assert')

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: 'Android',
    platformVersion: '8',
    deviceName: 'Android Emulator',
    app: './ApiDemos-debug.apk',
    appPackage: 'io.appium.android.apis',
    appActivity: '.view.TextFields',
    automationName: 'UiAutomator2',
    // browserName: 'Chrome',
  },
}

async function main() {
  const client = await wdio.remote(opts)

  // type into a text field and check that the correct text was entered
  const field = await client.$('android.widget.EditText')
  await field.setValue('Hello World!')
  const value = await field.getText()
  assert.strictEqual(value, 'Hello World!')

  await client.deleteSession()
}

main()
