import '@testing-library/cypress/add-commands';

Cypress.Commands.add('getByTestData', (selector) => {
  return cy.get(`[data-test=${selector}]`);
});

Cypress.Commands.add('getBy', (selector, text) => {
  cy.get(selector).contains(text);
});
