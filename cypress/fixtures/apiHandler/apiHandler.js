export function interceptLoginApi() {
    cy.intercept('POST', 'api/account/v2/auth/local').as('loginAPI');
}

export function interceptUserProfileApi() {
    cy.intercept('POST', 'api/account/v2/user/**').as('userProfileAPI');
}