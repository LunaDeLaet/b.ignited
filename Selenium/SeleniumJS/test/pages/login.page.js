//login.page.js

const Page = require('./page')

class LoginPage extends Page {
  //page locators:

  get inputUsername() {
    return $('[name="username"]')
  }
  get inputPassword() {
    return $('[name="password"]')
  }
  get loginBtn() {
    return $('button=Login')
  }

  //page actions:

  async open() {
    await super.open('/')
  }

  async login(username, password) {
    await this.inputUsername.setValue(username)
    await this.inputPassword.setValue(password)
    await this.loginBtn.click()
  }
}

module.exports = new LoginPage()
