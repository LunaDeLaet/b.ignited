/// <reference types="Cypress" />

describe('intercept with cypress examples', () => {
  // stubbing
  it('test api with simple intercept stubbing', () => {
    cy.visit('https://jsonplaceholder.typicode.com/')

    cy.intercept({
      // whenever we call /posts
      path: '/posts',
    }).as('posts') // give nickname (alias)

    // click link
    cy.get("table:nth-of-type(1) a[href='/posts']").click()
    // when /posts link gets clicked, posts api is getting called

    // spy
    cy.wait('@posts').then((interception) => {
      // log response data
      cy.log(JSON.stringify(interception))
      // check if response.body data has length of 100
      expect(interception.response.body).to.have.length(100)
    })
  })

  // mocking with static response
  it('mocking with intercept test with static response', () => {
    cy.visit('https://jsonplaceholder.typicode.com/')
    // mock for GET call of /posts api, and return totalpost = 5,
    // and give alias
    //; get all posts with only 1 response to use in further test case
    cy.intercept('GET', '/posts', { totalpost: 5, name: 'naveen' }).as('posts')

    //click link
    cy.get("table:nth-of-type(1) a[href='/posts']").click()

    cy.wait('@posts')
  })

  // mocking with dynamic fixture (create own data from json file)
  it('mocking with intercept test with dynamic fixture', () => {
    cy.visit('https://jsonplaceholder.typicode.com/')
    /* mock for GET call of /posts api, and return totalpost = 5,
     and give alias */
    // -> get all posts with only 1 response to use in further test case
    cy.intercept('GET', '/posts', { fixture: 'example.json' }).as('posts')

    //click link
    cy.get("table:nth-of-type(1) a[href='/posts']").click()

    cy.wait('@posts')
  })
})
