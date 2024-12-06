export class Login{

    navigator(){
        cy.visit('https://www.saucedemo.com/')
    }
    title(){
    //    cy.title().should('eq',"Swag Labs")
    }

    username(){
        cy.get('#user-name').type('user')
    return this;
    }
    password(){
        cy.get('#password').type('4324gd')
    }

    loginBtn(){
        cy.get('#login-button').click()
    }
}