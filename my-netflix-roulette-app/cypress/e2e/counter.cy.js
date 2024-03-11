describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
})

describe( ' Counter Component', () =>{

it('increment the counter when increment button is clicked' , ()=> {
   cy.visit('http://localhost:3000');
   cy.get('.incrementButton').click();
   cy.get('.counter-container').should('contain', 'Counter Value: 11');
   cy.get('.incrementButton').click();
   cy.get('.counter-container').should('contain', 'Counter Value: 12');
});

it('decrement the counter when decrement button is clicked', ()=> {
  cy.visit('http://localhost:3000');
  cy.get('.decrementButton').click();
  cy.get('.counter-container').should('contain', 'Counter Value: 9');
  cy.get('.decrementButton').click();
  cy.get('.counter-container').should('contain', 'Counter Value: 8');

});

});