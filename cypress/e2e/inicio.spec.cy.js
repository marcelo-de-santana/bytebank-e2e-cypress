describe('Página de início', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Deve renderizar o H1 com o texto correto', () => {
    cy.get('[data-test="titulo-principal"]').contains(
      'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
    );
  });

  it('Deve renderizar o H2 com o texto correto', () => {
    cy.getByTestData('titulo-secundario').contains('Vantagens do nosso banco:');
  });
});
