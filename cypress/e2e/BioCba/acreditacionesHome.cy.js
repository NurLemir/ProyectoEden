/// <reference types="cypress" />

const acreditacionesHome = require("../../Page/BioCba/acreditacioneshome");

describe ("Tests sobre Acreditaciones del Parque de la Biodiversidad", () => {
    beforeEach(() => {
        cy.visit("https://acreditaciones.biocordoba.com.ar/");
    }); 
    
    it("Funcionamiento de Botones de Home", () => {
        acreditacionesHome.getMenuButton().contains("ESPAÑOL")
        .should("have.attr", "onclick");
        acreditacionesHome.getMenuButton().contains("ENGLISH")
        .should("have.attr", "onclick");
        acreditacionesHome.getMenuButton().contains("ANULAR MI INSCRIPCIÓN")
        .should("have.attr", 
        "href", 
        "https://acreditaciones.biocordoba.com.ar/anular-inscripcion");
    });

    it("Verificar Colores de Botones de Home", () => {
        acreditacionesHome.getMenuButton()
        .should("have.css", 
        "Background", 
        "rgb(254, 250, 224) none repeat scroll 0% 0% / auto padding-box border-box");

    });

    it.only("Verificar Barra Fija", () => {
        acreditacionesHome.getFixedNav().invoke('css', 'position', 'absolute');
        });

    /*it("Verificar Imagen de Flamencos", () => {
        acreditacionesHome.getImgFlamingo()
        .should("have.attr", "[data-url]", "https://acreditaciones.biocordoba.com.ar");
        });*/
    });
    