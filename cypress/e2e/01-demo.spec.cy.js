describe('demo spec', () => {
  it(`should visit BaseUrl in environment ( ${Cypress.env('name')} )`, () => {
    cy.visit('/')

    cy.url().should('include',Cypress.config('baseUrl'))
  })

  // not recommended approach should be id or unique class reference
  it('should hightlight <h1>', ()=>{
    cy.highlight('h1')
  })

  it('should have <h1> with text "Kitchen Sink"', ()=>{
    cy.get('h1').should('have.text','Kitchen Sink')
  })

  it('should unhightlight <h1>', ()=>{
    cy.unhighlight('h1')
  })

})
