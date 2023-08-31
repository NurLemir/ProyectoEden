  <reference types="cypress" />

 class EdenHeaderLocators {
    constructor() {
        //Botonera y Header Principal
        this.menuButtons = "#navbar a";
        this.imageLogo = "#header-logo";
        //Sección de Búsqueda
        this.searchInput = "#espectaculoList";
        this.searchSuggestion = ".ui-menu-item";
        /*this.searchSuggestion = ".desc-buscar-home";*/
    }
 }

 export default class EdenHeader {
    constructor() {
        this.locators = new EdenHeaderLocators();
    }
    //Botonera y Header Principal 
    getMenuButtons() {
        return cy.get(this.locators.menuButtons);
    }

    getImageLogo(){
        return cy.get(this.locators.imageLogo);
    }

    //Sección de Búsqueda
    getSearchInput(){
    return cy.get(this.locators.searchInput);
    } 

    getSearchSuggestion(){
        return cy.get(this.locators.searchSuggestion);
    }
}
