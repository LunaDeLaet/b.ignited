const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
  /**
   * define selectors using getter methods
   */

  // locate Forms card
  get formsCard() {
    return $("(//(div[@class, 'card'])[2]")
  }
}

module.exports = new HomePage()
