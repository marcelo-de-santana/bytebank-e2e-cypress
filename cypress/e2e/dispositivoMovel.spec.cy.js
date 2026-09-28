describe('Testando dispositivos móveis', () => {
  beforeEach(() => {
    cy.viewport('iphone-x');
  });

  it('Deve existir um botão menu hamburguer', () => {
    cy.visit('/');

    cy.getByTestData('botao-login').click();
    cy.getByTestData('email-input').type('neilton@alura.com');
    cy.getByTestData('senha-input').type('123456');
    cy.getByTestData('botao-enviar').click();

    cy.location('pathname').should('eq', '/home');

    cy.getByTestData('menu-burguer').click();
    cy.getByTestData('menu-lateral').find('a').eq(3).click();

    cy.location('pathname').should('eq', '/home/investimentos');
  });
});

describe('Menu de navegação burguer icon', () => {
  context('Resolução do iphone xr', () => {
    beforeEach(() => {
      cy.viewport('iphone-xr');
    });

    it('Deve existir um botão menu burguer', () => {
      cy.visit('/');

      cy.getByTestData('botao-login').click();
      cy.getByTestData('email-input').type('neilton@alura.com');
      cy.getByTestData('senha-input').type('123456');
      cy.getByTestData('botao-enviar').click();

      cy.location('pathname').should('eq', '/home');

      cy.getByTestData('menu-burguer').should('be.visible');
    });
  });

  context('Resolução do macbook 13', () => {
    beforeEach(() => {
      cy.viewport('macbook-13');
    });

    it('Não deve existir um botão menu burguer', () => {
      cy.visit('/');

      cy.getByTestData('botao-login').click();
      cy.getByTestData('email-input').type('neilton@alura.com');
      cy.getByTestData('senha-input').type('123456');
      cy.getByTestData('botao-enviar').click();

      cy.location('pathname').should('eq', '/home');

      cy.getByTestData('menu-burguer').should('not.be.visible');
    });
  });
});
