/// <reference types="cypress" />

describe('Cyrpess URL related commands', () => {
    it('Fineuploader sitesine git', () => {
        cy.viewport(1200, 1200)
        cy.visit('https://fineuploader.com')    
    })

    it('Fineuploader protokolu verrify et', () => {
        cy.location('protocol').should('contain', 'https')
    })

    it('Fineuploader hostname verify et', () => {
        cy.location('hostname').should('eq', 'fineuploader.com')
    })

    it('Fineuploader sitesinde demoya tikla', () => {
        cy.get('div#menu li:nth-child(2) > a').should('be.visible').click()
        cy.location('pathname').should('eq', '/demos.html')
    })

    it('demo sayfasindaki linkler arasi gecis', () => {
        cy.get('div.span2.left > ul > li:nth-child(2) > a').should('be.visible').click()
        cy.url().should('eq', 'https://fineuploader.com/demos.html#gallery-view')

        cy.get('div.span2.left > ul > li:nth-child(4) > a').should('be.visible').click()
        cy.url().should('include', '#validation')

        cy.get('div.span2.left > ul > li:nth-child(5) > a').should('be.visible').click()
        cy.url().should('contain', '#amazon-demo')
    })
})