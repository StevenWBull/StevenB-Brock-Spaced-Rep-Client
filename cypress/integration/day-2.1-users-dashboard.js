/// <reference types="Cypress" />

/**
 * @abstract:See overview of progress
 *
 * @criteria
  When viewing the dashboard as a logged in user:
  - The app gets my language and words progress from the server
  - I'm shown my language
  - I'm shown the words to learn for the language
  - I'm shown my guess count for correct and incorrect for each word
  - I'm given a button/link to start learning
  - I'm shown the total score for guessing words
*/
describe(`User story: User's dashboard`, function() {
  beforeEach(() => {
    cy.server()
      .route({
        method: 'GET',
        url: '/api/language',
        status: 200,
        response: 'fixture:language',
      })
      .as('languageRequest')
  })

  beforeEach(() => {
    cy.login().visit('/login')
  })

  it('has h3 with title, subtitle and link', () => {
    cy.fixture('language.json').then(({ language }) => {
      cy.get('main section').within($section => {
        cy.get('h1')
          .should('contain', 'Welcome!')

        cy.get('a')
          .should('have.attr', 'href', '/learn')

        cy.get('h3')
          .should('have.text', 'Times Correct Stats')
      })
    })
  })
})
