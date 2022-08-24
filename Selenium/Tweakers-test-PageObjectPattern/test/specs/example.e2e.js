const articlePage = require('../pages/article.page')
const homePage = require('../pages/home.page')

describe('tweakers test', () => {
  it("click yesterday's last article and check name and date not empty", async () => {
    // open tweakers
    await browser.url('')

    //click yesterday's last article
    await homePage.lastArticleYesterday.waitForDisplayed()
    await homePage.lastArticleYesterday.scrollIntoView()
    await homePage.lastArticleYesterday.click()

    // check name not empty
    await expect(articlePage.name).toExist()
    // check date not empty
    await expect(articlePage.date).toExist()
  })
})
