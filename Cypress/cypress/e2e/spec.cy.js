describe('My First Test', () => {
  it('clicking "Netflix gaat aanbod mobiele games dit jaar nog verdubbelen" navigates to a new url', () => {
    // visit link
    cy.visit('https://tweakers.net/')

    // look for article
    cy.contains(
      'Netflix gaat aanbod mobiele games dit jaar nog verdubbelen'
    ).click()

    // Get el and verify that the value has correct name and date in it
    cy.get('.name').contains('Yannick Spinner')
    cy.get('.articleMeta').contains('08-08-2022 21:44')
  })
})
