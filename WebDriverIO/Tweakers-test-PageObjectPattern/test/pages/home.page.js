const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */
  get lastArticleYesterday() {
    return $(
      "(//table[contains(@class, 'headlines')])[2]//td[contains(@class, 'title')]//a"
    )
  }
}

module.exports = new HomePage()
