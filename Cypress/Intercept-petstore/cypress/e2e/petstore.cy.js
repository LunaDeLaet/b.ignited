/// <reference types="Cypress" />

describe('intercept petstore with cypress', () => {
  it('test api with simple intercept stubbing', () => {
    cy.visit('https://petstore.swagger.io')
    cy.intercept('GET', '/pet/findByStatus', { status: 'available' }).as('pet')

    // when execute link gets clicked, pet api is getting called
    cy.get("[id='operations-pet-findPetsByStatus']").click()
    cy.get('button[class="btn try-out__btn"').click()
    cy.get('option[value="available"').click()
    cy.get('button[class="btn execute opblock-control__btn"').click()

    // spy
    cy.wait('@pet').then((interception) => {
      // log response data
      cy.log(JSON.stringify(interception))
    })
  })
})
