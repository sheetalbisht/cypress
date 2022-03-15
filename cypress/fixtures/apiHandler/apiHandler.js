export function interceptLoginApi() {
    cy.intercept('POST', 'api/account/v2/auth/local').as('loginAPI');
}

//export function interceptUpdateProfileApi(userId) {
//    cy.intercept('POST', 'api/account/v2/user/'+userId).as('userProfileAPI');

export function interceptUserProfileApi() {
    cy.intercept('POST', 'api/account/v2/user/6226fe127c894a121a1c28c4').as('userProfileAPI');
}