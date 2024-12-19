/// <reference types="cypress" />

describe("Amazon home page",()=>{
    it("Amazon sitesine git",()=>{
        cy.visit('https://www.amazon.de')

    })
    it('Amazon sitesinde title dogrula',()=>{
        cy.title().should('include',"Amazon.de")
    })
})