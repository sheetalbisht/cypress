export function interceptLoginApi() {
    cy.intercept('POST', 'api/account/v2/auth/local').as('loginAPI');
}

export function interceptUpdateProfileApi(userId) {
    cy.intercept('POST', 'api/account/v2/user/'+userId).as('userProfileAPI');
}