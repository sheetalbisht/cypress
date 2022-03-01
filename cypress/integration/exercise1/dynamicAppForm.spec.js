import applicationFormTestdata from '../../fixtures/testData/applicationFormTestdata';
import * as action from '../../fixtures/pageClasses/applicationFormCC' ;

/**
 * passing dynamic test data sets.
 */
context('Submit Application Form', () => {
    beforeEach(() => {
      cy.visit('https://qa-frontend-cypress.s3.eu-west-1.amazonaws.com/cypress-session2.html');
    });

    applicationFormTestdata.forEach(element => {
        it('Filling form with dynamic test data',function(){
            action.enterNameAndCredentials(element.nameAndCredentials);
            action.enterStreetAddress(element.streetAddress);
            action.enterPostalCode(element.postal);
            action.selectCountry(element.country);
            action.enterEmail(element.email);
            action.clickPrincipalInvestigatorRadio(element.principalInvestigator);
            action.checkResearchApplicationCheckbox(element.researchApplication);
            action.submitApplicationForm();
      });

    });

});