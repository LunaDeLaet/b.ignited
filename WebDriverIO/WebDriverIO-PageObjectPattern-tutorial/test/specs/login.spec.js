//login.spec.js

const assert = require('assert')
const LoginPage = require('../pages/login.page')

describe('My Login application', () => {
  it('I should open the main URL and verify the title', async () => {
    await browser.url('')
    const title = await browser.getTitle()
    await assert.strictEqual(title, 'OrangeHRM')
  })

  it('I enter valid username and password and login successfully', async () => {
    await LoginPage.open()
    await LoginPage.login('Admin', 'admin123')
  })
})
