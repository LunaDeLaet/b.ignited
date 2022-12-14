const articlePage = require('../pages/article.page')
const homePage = require('../pages/home.page')

describe('tweakers test', () => {
  it("click yesterday's last article and check name and date not empty", async () => {
    // open tweakers
    await browser.url('')

    // scroll to yesterday's last article and center it in screen
    await homePage.lastArticleYesterday.scrollIntoView({ block: 'center' })
    // click yesterday's last article
    await homePage.lastArticleYesterday.click()

    // check name not empty
    await expect(articlePage.name).toExist()
    // check date not empty
    await expect(articlePage.date).toExist()
  })
})
