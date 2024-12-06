/// <reference types="cypress" />

    describe("sauceDemo Login sayfasi", ()=>{

        // Her testten önce bu blok çalışacak ve belirtilen URL'yi ziyaret edecek
        beforeEach(() => {
            cy.get('.login-button').should('be.visible');

        });


  it("TC001 SauceDemo sayfasina git ve basligi dogrula",()=>{

      cy.title().should('eq',"Swag Labs")
  })

    it("TC002 Basarili login testi",()=>{

        cy.get("[data-test = 'username']").type('standard_user')

        cy.get("[data-test = 'password']").type('secret_sauce')

        cy.get("#login-button").click()//click
    })
    it("TC003 Basarisiz Login Test", ()=>{

        cy.get("#user-name").clear().type('standard_user')

        cy.get("#password").clear().type('1234gfd')

        cy.get("#login-button").click()

    })
})

