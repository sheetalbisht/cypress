/**
 * Page objects for application form.
 */

const applicationFormPageObject = {
     nameAndCredentialsInput : '[name=namec]',
     streetAddressInput : '[name=street]',
     postalInput : '[name=zipcode]',
     countrySelect : 'select',
     emailInput : '[name=email]',
     principalInvestigatorRadio : '[type=radio]' ,
     researchApplicationCheckbox : '[type=checkbox]',
     submitButton : '[type=submit]'
}

export default applicationFormPageObject ;
