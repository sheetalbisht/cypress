import * as action from '../../fixtures/pageClasses/signInPage/signInPageCC';
import * as action1 from '../../fixtures/pageClasses/myAccountPage/myAccountPageCC';
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

                let firstName = "Sheetal";
                let lastName = "Bisht";
                action1.clickMyAccountButton();
                action1.clickViewFullScreenLink();
                action1.clickViewAndEditProfileLink();
                action1.enterFirstName(firstName);
                action1.enterLastName(lastName);
                action1.clickSaveButton();

          });
    })