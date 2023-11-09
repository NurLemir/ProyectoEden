/// <reference types="cypress" />

const acreditacionesHome = require("../../Page/BioCba/acreditacioneshome");

describe ("Tests sobre Acreditaciones del Parque de la Biodiversidad", () => {
    beforeEach(() => {
        cy.visit("https://acreditaciones.biocordoba.com.ar/");
    }); 
    
    it("Funcionamiento de Botones de Home", () => {

        acreditacionesHome.getMenuButton().contains("ESPAÑOL").should("have.attr", "onclick");
        acreditacionesHome.getMenuButton().contains("ENGLISH").should("have.attr", "onclick");
        acreditacionesHome.getMenuButton().contains("ANULAR MI INSCRIPCIÓN").should("have.attr", "href");

    });
});

