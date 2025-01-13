/// <reference types="cypress" />

describe("Trendyol Home",()=>{
    it("Trendyol sitesine git",()=>{
        cy.visit('https://www.trendyol.com')
        cy.get('#onetrust-reject-all-handler').click()
        cy.contains('Giriş Yap').click();
        cy.url().should('include', '/giris')
       // cy.get('input[name="E-posta"]').should('be.visible')


    })

})