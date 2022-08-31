/// <reference types="Cypress" />

describe('My Second Test', () => {
  it('checking if last article from yesterday has a name and date', () => {
    // visit link
    cy.visit('https://demoqa.com/')
    cy.intercept(
      {
        method: 'GET',
        url: '**/v1/placements/**',
      },
      (req) => {
        req.destroy()
      }
    )
    // click forms
    cy.get('.top-card').eq(1).click()

    cy.contains('Practice Form').click()
    cy.get('#firstName', { timeout: 10000 }).should('be.visible')
    cy.get('#firstName').type('Luna')
    cy.get('#lastName').type('De Laet')
    cy.get('label[for="gender-radio-2"]').click()
    cy.get('#userNumber').type('0467039777')
    cy.get('#submit').click({ force: true })
  })
})
