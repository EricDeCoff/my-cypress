Cypress.Commands.add('highlight', (selector) => {
    cy.get(selector)
      .invoke('attr', 'style', 'border: 5px solid yellow')
      .should('have.attr', 'style', 'border: 5px solid yellow')
  })
  Cypress.Commands.add('unhighlight', (selector) => {
    cy.get(selector)
      .invoke('attr', 'style', '')
      .should('have.attr', 'style', '')
  });