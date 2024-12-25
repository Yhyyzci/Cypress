/// <reference types="cypress" />

describe('GET APİ TEST',()=>{
    it("should fetch all users successfully",()=>{
        cy.request('GET','https://jsonplaceholder.typicode.com/users')
            .should((response)=>{
                expect(response.status).to.eq('200');
                expect(response.body).to.be.an('array');
                expect(response.body.length).to.be.greaterThan(0);
            })
    })
})