 /// <reference types="cypress" />

 class EdenHomeLocators {
    constructor() {
        //Menu
        this.menuButtons = "#navbar a";
        //Titulos
        this.subTitles = "h5";
    }
 }

 export default class EdenHome {
    constructor() {
        this.locators = new EdenHomeLocators();
    }

    getMenuButtons() {
        return cy.get(this.locators.menuButtons);
    }

    getSubtitles(){
        return cy.get(this.locators.subTitles)
    }
 }
