/// <reference types="cypress" />

describe ("Tests sobre Acreditaciones del Parque de la Biodiversidad", () => {
    beforeEach(() => {
        cy.visit("https://acreditaciones.biocordoba.com.ar/");
    }); 
    
    it("Funcionamiento del boton Español", () => {
        cy.get("a").should("contain.text", "ESPAÑOL");
    });
});

