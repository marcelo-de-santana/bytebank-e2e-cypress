// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add('getByTestData', (selector) => {
  return cy.get(`[data-test=${selector}]`);
});

Cypress.Commands.add('getBy', (selector, text) => {
  cy.get(selector).contains(text);
});
