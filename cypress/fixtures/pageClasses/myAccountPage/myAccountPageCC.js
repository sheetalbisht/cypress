import * as myAccountPageObject from './../myAccountPage/myAccountPagePO' ;

export function clickMyAccountButton()
{
    cy.get(myAccountPageObject.myAccountButton).contains('My account').click() ;
}

export function clickViewFullScreenLink()
{
    cy.get(myAccountPageObject.viewFullScreenLink).contains('View full screen').click() ;
}

export function clickViewAndEditProfileLink()
{
    cy.get(myAccountPageObject.viewAndEditProfileLink).contains('Profile').click() ;
}

export function enterFirstName(firstName)
{
    cy.get(myAccountPageObject.firstNameInput).type(firstName) ;
}

export function enterLastName(lastName)
{
    cy.get(myAccountPageObject.lastNameInput).type(lastName) ;
}

export function clickSaveButton()
{
    cy.get(myAccountPageObject.saveButton).contains('Save').click() ;
}
