describe('Jornadas de usuário', () => {
  it('Deve permitir que o usuário acesse a aplicação, realize uma transação e faça um logout', () => {
    cy.visit('/');

    cy.getByTestData('botao-login').click();
    cy.getByTestData('email-input').type('neilton@alura.com');
    cy.getByTestData('senha-input').type('123456');
    cy.getByTestData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByTestData('select-opcoes').select('Transferência');
    cy.getByTestData('form-input').type('80');
    cy.getByTestData('realiza-transacao').click();

    cy.getByTestData('lista-transacoes').find('li').last().contains('- R$ 80');

    cy.getByTestData('botao-sair').click();
    cy.location('pathname').should('eq', '/');
  });
});
