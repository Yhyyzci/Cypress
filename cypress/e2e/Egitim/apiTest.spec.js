/// <reference types="cypress" />


describe('Basit API Testi', () => {
    it('Headers Dogrulama Testi-1', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('headers')
        .its('content-type')
        .should('include', 'application/json; charset=utf-8')
    })

    it('Headers Dogrulama Testi-2', () => {
        cy.request({
            url: 'https://pokeapi.co/api/v2/pokemon/1',
            method: 'GET'
        }).then((response) => {
            expect(response.headers).to.have.property('content-type').and.to.be.include('application/json; charset=utf-8')
        })
    })

    it('Status Dogrulama Testi-1', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('status')
        .should('eq', 200)
    })

    it('Status Dogrulama Testi-2', () => {
        cy.request({
            url: 'https://pokeapi.co/api/v2/pokemon/1',
            method: 'GET'
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Body Name Dogrulama Testi-1', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('body')
        .should('include', {name: 'bulbasaur'})
    })

    it('Body Name Dogrulama Testi-2', () => {
        cy.request({
            url: 'https://pokeapi.co/api/v2/pokemon/1',
            method: 'GET'
        }).then((response) => {
            expect(response.body).to.be.include({name: 'bulbasaur'})
        })
    })

    it('Body Name Dogrulama Testi-Negatif', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('body')
        .should('include', {name: 'pikachu'})
    })

    it('Status Dogrulama Testi-Negatif', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('status')
        .should('eq', 404)
    })

    it.skip('Body Name Dogrulama Testi-2', () => {
        cy.request({
            url: 'url',
            method: 'POST',
            auth: {
                username: 'test',
                password: 'test123'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it.skip('Body Name Dogrulama Testi-2', () => {
        cy.request({
            url: 'url/logout',
            method: 'POST',
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it.skip('Body Name Dogrulama Testi-2', () => {
        cy.request({
            url: 'url',
            method: 'DELETE',
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

})