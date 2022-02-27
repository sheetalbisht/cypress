import applicationFormTestdata, * as testData from "../../fixtures/testdata/applicationFormTestdata" ;
import * as pageObject from '../../integration/exercise1/pageClasses/aapplicationFormPO' ;
import * as action from '../../integration/exercise1/pageClasses/aapplicationFormCC' ;

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
            action.enterStreet(element.streetAddress);
            action.enterPostalCode(element.postal);
            action.selectCountry(element.country);
            action.enterEmail(element.email);
            action.clickPrincipalInvestigatorRadio(element.principalInvestigator);
            action.checkResearchApplicationCheckbox(element.researchApplication);
            action.submitForm();
      });

    });

});
