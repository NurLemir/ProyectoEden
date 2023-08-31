 /// <reference types="cypress" />

 class EdenHomeLocators {
    constructor() {
        //Menu
        this.menuButtons = "#navbar a";
        //Titulos
        this.subTitles = "h5";
        //Logo
        this.imageLogo = "#header-logo";
        //Sección de Búsqueda
        this.searchInput = "#espectaculoList";
        this.searchSuggestion = ".ui-menu-item";
        /*this.searchSuggestion = ".desc-buscar-home";*/
    }
 }

 export default class EdenHome {
    constructor() {
        this.locators = new EdenHomeLocators();
    }

    getMenuButtons() {
        return cy.get(this.locators.menuButtons);
    }

    getSubTitles(){
        return cy.get(this.locators.subTitles)
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
