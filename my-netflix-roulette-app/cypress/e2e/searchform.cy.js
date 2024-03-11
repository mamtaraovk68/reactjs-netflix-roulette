describe('SearchForm component', ()=> {
it('submits the search query when the "Search" button is clicked', ()=> {
    cy.visit('http://localhost:3000');
    cy.get('.search-input').clear();
    cy.get('.search-input').type('Cypress Test Search');
    cy.get('.search-input').click();
    cy.on('window:alerts', (alertText) => {
        expect(alertText).to.equal('Initiated a search for your movie: Cypress Test Search')
    });
});

it('submits the search query when the Enter key is pressed', () => {
    cy.visit('http://localhost:3000');
    cy.get('.search-input').clear();
    cy.get('.search-input').type('Cypress Test Search{enter}');
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Initiated a search for your movie: Cypress Test Search');
    });
  });

});