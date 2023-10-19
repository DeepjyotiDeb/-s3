describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('[data-cy="count"]').should('have.text', '0');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="count"]').should('have.text', '1');
  });
});
