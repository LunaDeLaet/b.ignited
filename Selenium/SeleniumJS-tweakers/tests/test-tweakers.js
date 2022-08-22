const { By, Builder } = require('selenium-webdriver')

async function example() {
  //To wait for browser to build and launch properly
  let driver = await new Builder().forBrowser('chrome').build()

  //To fetch https://tweakers.net/ from the browser with our code.
  await driver.get('https://tweakers.net/')

  element = driver.findElement(
    By.xpath(
      "(//table[contains(@class, 'headlines')])[2]//td[contains(@class, 'title')]//a"
    )
  )

  await driver.executeScript('arguments[0].click();', element)
  await driver
    .findElement(
      By.xpath("//p[contains(@class, 'name')][string-length(text()) > 0]")
    )
    .then(
      function (webElement) {
        console.log('Name not empty')
      },
      function (err) {
        if (err.state && err.state === 'no such element') {
          console.log('Element not found')
        } else {
          console.log('error1')
        }
      }
    )

  // check name and date not empty
  await driver
    .findElement(
      By.xpath(
        "//span[contains(@class, 'articleMeta')]//span[contains(text(), '-20')]"
      )
    )
    .then(
      function (webElement) {
        console.log('Date not empty')
      },
      function (err) {
        if (err.state && err.state === 'no such element') {
          console.log('Element not found')
        } else {
          console.log('error2')
        }
      }
    )

  //It is always a safe practice to quit the browser after execution
  await driver.quit()
}

example()
