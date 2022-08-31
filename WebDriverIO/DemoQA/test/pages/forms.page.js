const Page = require('./page')

class FormsPage extends Page {
  /**
   * define selectors using getter methods
   */
  get practiceForm() {
    return $('.text=Practice Form')
  }
  get firstName() {
    return $("//input[@id='firstName']")
  }
  get lastName() {
    return $("//input[@id='lastName']")
  }
  get genderFemale() {
    return $("//label[@for='gender-radio-2']")
  }
  get userNumber() {
    return $("//input[@id='userNumber']")
  }
  get submit() {
    return $("//button[@id='submit']")
  }
}

module.exports = new FormsPage()
