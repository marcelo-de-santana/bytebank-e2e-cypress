describe('Formulário de Cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/cadastro');
  });

  it('Usuário deve conseguir se cadastrar com sucesso', () => {
    const timestamp = new Date().getTime();
    cy.getByTestData('botao-cadastro').click();
    cy.getByTestData('nome-input').type('Gui Lima');
    cy.getByTestData('email-input').type(`gui${timestamp}@email.com`);
    cy.getByTestData('senha-input').type('456789');
    cy.getByTestData('botao-enviar').click();
    cy.getByTestData('mensagem-sucesso')
      .should('exist')
      .and('have.text', 'Usuário cadastrado com sucesso!');
  });

  it('Não deve permitir o cadastro de usuários com email e senha inválido', () => {
    cy.getByTestData('botao-cadastro').click();
    cy.getByTestData('email-input').type('moni@alura.com');
    cy.getByTestData('senha-input').type('987654');
    cy.getByTestData('botao-enviar').click();
    cy.getByTestData('mensagem-erro')
      .should('exist')
      .and('have.text', 'O campo de nome é obrigatório');
  });
});
