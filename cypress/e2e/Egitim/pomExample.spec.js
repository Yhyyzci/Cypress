/// <reference types="cypress" />

import{Login} from"../../pageObjects/login";
const login =new Login();
describe("SauceDemo Login", () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com"); // Sayfaya git
        cy.get('#login_button_container').should('be.visible'); // Login butonunun görünür olduğundan emin ol
    });



    it("TC002 - Login işlemi yap", () => {
        login.username();
        login.password();
        login.loginBtn();
    });
});