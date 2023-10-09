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
         //Calendario
         this.calendarTitle = '.ui-datepicker-title';
         this.calendar = '.ui-datepicker-calendar';
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
    getCalendarTitle() {
        return cy.get(this.locators.calendarTitle);
    }
    getCalendar() {
        return cy.get(this.locators.calendar);
    }
 }

 