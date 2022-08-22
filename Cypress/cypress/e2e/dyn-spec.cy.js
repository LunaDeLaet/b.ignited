describe('My Second Test', () => {
  it('checking if last article from yesterday has a name and date', () => {
    // visit link
    cy.visit('https://tweakers.net/')

    // click yesterday last heading
    cy.get('.headlines').eq(1).find('td.title').eq(0).click({ multiple: true })

    // Get el and verify that el has name and date
    cy.get('.name').should('not.be.empty')
    cy.get('.articleMeta').should('not.be.empty')
  })
})
