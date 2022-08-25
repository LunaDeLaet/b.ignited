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
      cy.log(interception)
      console.log(interception)
    })

    // validate response in ui to contain text "name": "fish"
    cy.get('code[class="language-json"]')
      .eq(0)
      .invoke('text')
      .should('contain', '"name": "fish"')
  })

  it.only('mocking with intercept test with dynamic fixture', () => {
    cy.visit('https://petstore.swagger.io')
    cy.get("[id='operations-pet-addPet']").click()
    cy.get('button[class="btn try-out__btn"').click()
    cy.intercept('POST', '/v2/pet', { fixture: 'Otto.json' }).as('pet')
    cy.get('button[class="btn execute opblock-control__btn"').click()

    cy.wait('@pet').then((interception) => {
      // log response data
      cy.log(interception.response.body)
      console.log(interception)
      // validate response in interception
      expect(interception.response.body).to.have.all.keys(
        'category',
        'id',
        'name',
        'photoUrls',
        'status',
        'tags'
      )
      // validate response with fixture
      cy.fixture('Otto.json').should('deep.equal', interception.response.body)
    })
  })
})
