/// <reference types="Cypress" />

describe('intercept petstore with cypress', () => {
  // mocking with dynamic fixture (create own data from json file)
  it('test api with simple intercept stubbing', () => {
    cy.visit('https://petstore.swagger.io')
    cy.intercept('GET', '**/pet/findByStatus*').as('pet') // give nickname (alias)

    // when /posts link gets clicked, posts api is getting called
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
