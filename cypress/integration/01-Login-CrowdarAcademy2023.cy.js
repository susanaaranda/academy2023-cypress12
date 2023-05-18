Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});

describe("Login Crowdar Cypress Demo", () => {
    it("Login", () => {

        cy.visit("https://practice.automationtesting.in/my-account/");

        var username = "susyw6@hotmail.com";
        var pass = "Bienvenido*456";
              
        cy.get('#username').type(username);
        cy.get('#password').type(pass+"{enter}");
                
        cy.get('strong').should('contain.text', 'susyw6');
        

    });
});