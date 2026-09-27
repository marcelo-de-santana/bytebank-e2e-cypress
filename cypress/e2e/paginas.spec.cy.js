describe('Testando múltiplas páginas', () => {
  it('Deve conseguir acessar a página de cartões', () => {
    cy.visit('/');
    cy.getByTestData('botao-login').click();
    cy.getByTestData('email-input').type('neilton@alura.com');
    cy.getByTestData('senha-input').type('123456');
    cy.getByTestData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByTestData('app-home').find('a').eq(1).click();
    cy.getByTestData('titulo-cartoes')
      .should('exist')
      .and('have.text', 'Meus cartões');

    cy.location('pathname').should('eq', '/home/cartoes');
  });
});
