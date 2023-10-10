/// <reference types="cypress" />
const yvytuHome = require("../../Page/Yvytu/yvytuhome");

describe("Tests sobre la página de YVYTU", () => {
beforeEach(() => {
    cy.visit("https://vientosdelaselva.com.ar/");
});

it ("Verificar barra de navegación", () => {

const menu = ["LA RESERVA", "CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONÁ"];

yvytuHome.getMenuPillButton().each((boton, indice) => {
    cy.wrap(boton).should("have.text", menu[indice]).and("be.visible");
});
});

it("Verficiar Barra de Navegación - Iterar en Botones", () => {

    const menu = [
        "",
        "LA RESERVA",
        "CABAÑAS",
        "COMO LLEGAR",
        "CONTACTO",
        "DONÁ",
    ];

    yvytuHome.getMenuAllButton().each((boton, indice) => {
        if (indice != 0) {
            cy.wrap(boton).should("have.text", menu[indice]);
        };
    });
    });

    it("Verificar comportamiento del botón Ir Arriba", () => {
        yvytuHome.getIrArribaButton().should("not.be.visible");
        yvytuHome.getGenericSubtitle().contains("Conocé una historia mágica.").scrollIntoView();
        yvytuHome.getIrArribaButton().should("be.visible");
        yvytuHome.getIrArribaButton().should("contain.text", "Ir arriba");
        yvytuHome.getIrArribaButton().click();

        yvytuHome.getMenuPillButton().each((boton) => {
            cy.wrap(boton).should("be.visible");
    });
        yvytuHome.getIrArribaButton().should("not.be.visible");
});

});