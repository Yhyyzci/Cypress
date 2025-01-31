/// <reference types="cypress" />

describe("Trendyol Home",()=>{
    it("Trendyol sitesine git",()=>{
        cy.visit('https://www.trendyol.com')
        cy.get('#onetrust-reject-all-handler').click()
        cy.contains('Giriş Yap').click();
        cy.url().should('include', '/giris')
       // cy.get('input[name="E-posta"]').should('be.visible')

        cy.get('[data-testid="email-input"]').type('yhyyzcgl@gmail.com')

        cy.get('[data-testid="password-input"]').type('sfdsaadrese345b')
        
        
        cy.xpath("//span[contains(text(),'Şifremi Unuttum')]").click();

        cy.get('.ty-bg-beige').type('yhyyzcgl@gmail.com')

        cy.xpath("//button[contains(text(),'Şifremi Yenile')]").click();


    })

})