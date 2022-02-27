describe('Session 1' , () => {
    it('Fill application form', () =>
    {
        //Open web form
        cy.visit('https://qa-frontend-cypress.s3.eu-west-1.amazonaws.com/cypress-session2.html')

        //Enter data in Name and Credentials text box
        cy.get('[name=namec]').type('Sheetal Bisht And Password')

        //Enter data in Mailing Address text box
        cy.get('[name=street]').type('Dubai Street')

        //Enter data in Postal/Zip code text box
        cy.get('[name=zipcode]').type('123456')

        //Select data in country dropdown
        cy.get('select').select(5)

        //Enter data in email text box
        cy.get('[name=email]').type('sheetal.bisht@seera.sa')

        //Select Principle investigator radio button
        cy.get('[type=radio]').check('Yes', {force: true})

        //Select Research Application Checklist checkboxes
        cy.get('[type="checkbox"]').check(['Narrative','Abstract'], {force: true})

        //Click on Send Application button
        cy.get('[type=submit]').click
    }
    )
})