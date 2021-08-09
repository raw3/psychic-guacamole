export class AppPo {
  constructor() {
    cy.get('app-root').as('app');
  }

  isVisible (): void {
    cy.get('@app').should('exist');
  }

  addComponent(): void {
    cy.get('@app').find('[data-cy="add-component"]').click();
  }

  hasComponentInstructions (): void {
    cy.get('@app').find('[data-cy="component-instructions"]').should('be.visible');
  }
}
