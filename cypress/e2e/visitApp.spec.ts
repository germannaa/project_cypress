describe('Example', () => {
    it('visits the app', () => {
      cy.visit('https://example.cypress.io')
      cy.title().should('include', 'Cypress')
    })
  })
  
  //test