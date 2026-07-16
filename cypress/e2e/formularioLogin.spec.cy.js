describe('Formulário de Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('Não deve permitir um email inválido', () => {
    cy.getByTestData('botao-login').click();
    cy.getByTestData('email-input').type('marcelo@alura');
    cy.getByTestData('senha-input').type('123456');
    cy.getByTestData('botao-enviar').click();
    cy.getByTestData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O email digitado é inválido');
  });
});
