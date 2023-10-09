 /// <reference types="cypress" />

 class EdenEventLocators {
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
        this.eventTitle = ".fechas-funciones span";
    }
 }

 export default class EdenEvent {
    constructor() {
        this.locators = new EdenEventLocators();
    }

    getEventTitle() {
        return cy.get(this.locators.eventTitle).first();
    }


 }
