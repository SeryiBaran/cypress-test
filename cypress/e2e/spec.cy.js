describe('Button with text "Primary" is visible', () => {
  it('Passes!', () => {
    cy.visit('http://localhost:4173/cypress-test/');
    cy.get('button.btn.btn-primary')
      .should('be.visible')
      .should('have.text', 'Primary');
  });
});
