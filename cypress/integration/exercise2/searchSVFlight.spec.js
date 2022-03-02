import * as action from '../../fixtures/pageClasses/searchPage/searchPageCC' ;

describe('Exercise 2' , () => {

    it('Search saudia flight.',function(){
        cy.visit('https://next-staging-ae.almosafer.com/en/flights/DXB-JED/2022-05-22/2022-05-25/Economy/1Adult')
                action.clickDirectFlightRadio();
                action.clickShowAllLink();
                action.checkSaudiaCheckbox();
                action.clickSelectFlightButton();
          });
    })