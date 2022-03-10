import * as signInPageObject from './../signInPage/signInPagePO' ;

export function clickSignInButton()
{
    cy.get(signInPageObject.signInButton).click({force: true}) ;
}

export function enterEmailId(email)
{
    cy.get(signInPageObject.emailInput).type(email) ;
}

export function enterPassword(password)
{
    cy.get(signInPageObject.passwordInput).type(password) ;
}

export function clickSignInSubmitButton()
{
    cy.get(signInPageObject.signInSubmitButton).click({force: true}) ;
}