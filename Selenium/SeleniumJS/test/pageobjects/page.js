/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
//page.js

module.exports = class Page {
  //to go to a URL
  open(path) {
    return browser.url(path)
  }
}
