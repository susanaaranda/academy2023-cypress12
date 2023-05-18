Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
    describe("Shop Page", () => {
      beforeEach(() => {
        cy.visit("https://practice.automationtesting.in/shop/");
      });
        it('Filtrar productos por categoria Android', () => {
        cy.get('.cat-item-24 > a').click();
        cy.get('.woocommerce-breadcrumb')
          .invoke('text')
          .should('contain', 'Android');
      });
      
      it('Filtrar productos por categoria HTML', () => {
        cy.get('.cat-item-19 > a').click();
        cy.get('.woocommerce-breadcrumb')
          .invoke('text')
          .should('contain', 'HTML');
      });
      it('Filtrar productos por categoria Javascript', () => {
        cy.get('.cat-item-21 > a').click();
        cy.get('.woocommerce-breadcrumb')
          .invoke('text')
          .should('contain', 'JavaScript');
      });
      it('Filtrar productos por categoria selenium', () => {
        cy.get('.cat-item-17 > a').click();
        cy.get('.woocommerce-breadcrumb')
          .invoke('text')
          .should('contain', 'selenium');
      });
    });