const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  blockHosts:
    '*/#/specs/runner?file=cypress/e2e/DemoQA.cy.js&b=0.6405073560351624',
  video: false,
})
