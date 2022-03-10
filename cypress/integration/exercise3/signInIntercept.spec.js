import * as action from '../../fixtures/pageClasses/signInPage/signInPageCC';
import * as apiHandler from '../../fixtures/apiHandler/apiHandler';

describe('Exercise 3' , () => {

    it('Sign In Intercept.',function(){
        cy.visit('https://next-staging-ae.almosafer.com/en')
                let email = "testmailcypress@mailinator.com";
                let password = "Password@123";
                action.clickSignInButton();
                action.enterEmailId(email);
                action.enterPassword(password);

                apiHandler.interceptLoginApi();
                action.clickSignInSubmitButton();

                cy.wait('@loginAPI').then((login) => {
                    let payload = login.request.body;
                    cy.log('login - ', login);
                    expect(payload.email, 'Email matched').to.eq(email);
                    expect(payload.password, 'Password matched').to.eq(password);
                });
          });
    })