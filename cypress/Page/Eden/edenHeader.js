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
        //Calendario
        this.calendarTitle = '.ui-datepicker-title';
        this.calendar = '.ui-datepicker-calendar';
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

    getCalendarTitle() {
        return cy.get(this.locators.calendarTitle);
    }
    getCalendar() {
        return cy.get(this.locators.calendar);
    }
}
