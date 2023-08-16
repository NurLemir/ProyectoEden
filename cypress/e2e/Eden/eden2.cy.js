/// <reference types="cypress" />
const edenHome2 = new require("../../Page/edenHome2")
const edenHeader2 = require("../../Page/edenHeader2");

describe('Test sobre la pagina de EDEN ENTRADAS', () => {
    it('Verificar subtitulos', () => {
      cy.visit("https://www.edenentradas.com.ar/")
      edenHome2.getSubtitles().first().should("contain.text", "BUSCAR EVENTO");
      edenHome2.getSubtitles().last().should("contain.text", "CALENDARIO DE EVENTOS");
    });

    it.only('Verificar Menu', () => {
      cy.visit("https://www.edenentradas.com.ar/")
      edenHome2.getMenuButtons().eq(0).should("contain.text", "HOME");
      edenHome2.getMenuButtons().eq(1).should("contain.text", "TODOS");
      edenHome2.getMenuButtons().eq(2).should("contain.text", "AGENDA DEL FINDE");
      edenHome2.getMenuButtons().eq(3).should("contain.text", "RECITALES");
      edenHome2.getMenuButtons().eq(4).should("contain.text", "TEATROS");
      edenHome2.getMenuButtons().eq(5).should("contain.text", "CUARTETOS");
      edenHome2.getMenuButtons().eq(6).should("contain.text", "FESTIVALES");
      edenHome2.getMenuButtons().eq(7).should("contain.text", "SALAS");
    });

    it("Verificar pagina de recitales", () => {
      cy.visit("https://www.edenentradas.com.ar/");
      edenHome2.getMenuButtons().eq(3).click();
    });
  })
