describe('Nettisivutori app homepage', function() {
  it('Home page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('Nettisivutori')
  })

  it('User can log in', function() {
    cy.viewport(1400, 800)

    cy.visit('http://localhost:5000')
    cy.contains('Nettisivutori')

    cy.contains('Kirjaudu').click()

    cy.get('.username-input').type('firma')
    cy.get('.password-input').type('firma')
    cy.get('.login-button-input').click()

    // Instead of using a fixed wait, wait for an element that indicates successful login
    cy.contains('Nettisivutori').should('be.visible')
    cy.get('.logged-user').should('contain', 'Firma Oy Kirjautuneena sisään')
  })
})