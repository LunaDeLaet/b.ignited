const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ArticlePage extends Page {
  /**
   * define selectors using getter methods
   */
  get name() {
    return $("//p[contains(@class, 'name')][string-length(text()) > 0]")
  }
  get date() {
    return $(
      "//span[contains(@class, 'articleMeta')]//span[contains(text(), '-20')]"
    )
  }
}

module.exports = new ArticlePage()
