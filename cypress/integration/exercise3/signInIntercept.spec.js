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
                    expect(payload.email, 'Email matched.').to.eq(email);
                    expect(payload.password, 'Password matched.').to.eq(password);
                });

                let firstName = "Sheetalupdated";
                let lastName = "Bishtupdated";

                action1.clickMyAccountButton();
                action1.clickViewFullScreenLink();
                action1.clickViewAndEditProfileLink();
                action1.enterFirstName(firstName);
                action1.enterLastName(lastName);
                apiHandler.interceptUserProfileApi();
                action1.clickSaveButton();

                 cy.wait('@userProfileAPI').then((userProfile) => {
                     let requestPayload = userProfile.request.body;
                     let response = userProfile.response.body;
                     cy.log('userProfile - ', userProfile);

                     // Request payload validation
                     expect(requestPayload.FirstName, 'Firstname updated.').to.eq(firstName);
                     expect(requestPayload.LastName, 'Lastname updated.').to.eq(lastName);

                     // Response validation
                     expect(response.FirstName, 'Firstname updated.').to.eq(firstName);
                     expect(response.LastName, 'Lastname updated.').to.eq(lastName);
                     expect(response.email, 'Email is correct.').to.eq(email);
                 });
          });
    })