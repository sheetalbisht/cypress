import * as applicationFormPageObject from './applicationFormPO' ;

export function enterNameAndCredentials(nameAndCredentials)
{
    cy.get(applicationFormPageObject.nameAndCredentialsInput).type(nameAndCredentials) ;
}

export function enterStreetAddress(streetAddress)
{
    cy.get(applicationFormPageObject.streetAddressInput).type(streetAddress) ;
}

export function enterPostalCode(postal)
{
    cy.get(applicationFormPageObject.postalInput).type(postal) ;
}

export function selectCountry(country)
{
    cy.get(applicationFormPageObject.countrySelect).select(country) ;
}

export function enterEmail(email)
{
    cy.get(applicationFormPageObject.emailInput).type(email) ;
}

export function clickPrincipalInvestigatorRadio(radio)
{
    cy.get(applicationFormPageObject.principalInvestigatorRadio).check(radio, { force: true });
}

export function checkResearchApplicationCheckbox(check)
{
    cy.get(applicationFormPageObject.researchApplicationCheckbox).check(check, {force: true});
}

export function submitApplicationForm()
{
    cy.get(applicationFormPageObject.submitButton).click() ;
}
