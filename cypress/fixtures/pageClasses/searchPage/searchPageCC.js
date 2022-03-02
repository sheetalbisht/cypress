import * as searchPageObject from './../searchPage/searchPagePO' ;

export function clickDirectFlightRadio()
{
    cy.get(searchPageObject.directFlightsRadio).check({force: true});
}

export function clickShowAllLink()
{
    cy.get(searchPageObject.showAllLink).click({force: true}) ;
}

export function checkSaudiaCheckbox()
{
    cy.get(searchPageObject.saudiaCheckbox).check({force: true});
}

export function clickSelectFlightButton()
{
    cy.get(searchPageObject.selectFlightButton).click({force: true}) ;
}



