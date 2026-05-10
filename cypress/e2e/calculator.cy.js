describe('Hex Calculator GUI Tests', () => {

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/src/index.html');
    });

    it('Should display button clicks', () => {
        cy.contains('A').click();
        cy.get('#display').should('have.value', 'A');
    });

    it('Should clear display', () => {
        cy.contains('A').click();
        cy.contains('CLEAR').click();
        cy.get('#display').should('have.value', '');
    });

    it('Should perform addition', () => {
        cy.contains('A').click();
        cy.contains('+').click();
        cy.contains('1').click();
        cy.contains('=').click();

        cy.get('#display').should('have.value', 'B');
    });

});