/// <reference types="cypress" />

describe("Read ve Write File",()=>{
    it("Write File",()=>{
        cy.writeFile('Notdefteri.txt','Merhaba\n')
        cy.writeFile('Notdefteri.txt','Cypress deneme çalişmalari',{flag:'a+'})
    })

    it('Read File',()=>{
        cy.readFile('Notdefteri.txt').should('contain','Cypress')
    })

    it('Read File 2',()=>{
        cy.readFile('Notdefteri.txt').then((Text)=>{
            expect(Text).to.contain('Merhaba')
        })
    })
    
})