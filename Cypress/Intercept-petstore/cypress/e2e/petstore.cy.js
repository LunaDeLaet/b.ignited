/// <reference types="Cypress" />

describe('intercept petstore with cypress', () => {
  it('test api with simple intercept stubbing', () => {
    cy.visit('https://petstore.swagger.io')

    // when execute link gets clicked, pet api is getting called
    cy.get("[id='operations-pet-findPetsByStatus']").click()
    cy.get('button[class="btn try-out__btn"').click()
    cy.get('td[class="parameters-col_description"] select').select('available')
    cy.intercept('GET', '/v2/pet/findByStatus?status=available').as('pet')
    cy.get('button[class="btn execute opblock-control__btn"').click()

    // spy
    cy.wait('@pet').then((interception) => {
      // log response data
      cy.log(JSON.stringify(interception))
      console.log(JSON.stringify(interception))
    })
  })

  it('mocking with intercept test with dynamic fixture', () => {
    cy.visit('https://petstore.swagger.io')
    // when execute link gets clicked, pet api is getting called
    cy.get("[id='operations-pet-addPet']").click()
    cy.get('button[class="btn try-out__btn"').click()
    cy.intercept('POST', '/v2/pet', { fixture: 'pet.json' }).as('pet')
    cy.get('button[class="btn execute opblock-control__btn"').click()

    cy.wait('@pet')
  })
})
