/// <reference types="cypress" />
import EdenHome from "../../Page/edenHome";
import EdenHeader from "../../Page/edenHome";
const edenHome = new EdenHome();
const edenHeader = new EdenHeader();

describe('Test sobre la pagina de EDEN ENTRADAS', () => {
    it('Verificar subtitulos', () => {
      cy.visit("https://www.edenentradas.com.ar/")
      edenHome.getSubtitles().first().should("contain.text", "BUSCAR EVENTO");
      edenHome
      .getSubtitles()
      .last()
      .should("contain.text", "CALENDARIO DE EVENTOS");
    });

    it('Verificar Menu', () => {
      cy.visit("https://www.edenentradas.com.ar/")
      edenHeader.getMenuButtons().eq(0).should("contain.text", "HOME");
      edenHeader.getMenuButtons().eq(1).should("contain.text", "TODOS");
      edenHeader.getMenuButtons().eq(2).should("contain.text", "AGENDA DEL FINDE");
      edenHeader.getMenuButtons().eq(3).should("contain.text", "RECITALES");
      edenHeader.getMenuButtons().eq(4).should("contain.text", "TEATROS");
      edenHeader.getMenuButtons().eq(5).should("contain.text", "CUARTETOS");
      edenHeader.getMenuButtons().eq(6).should("contain.text", "FESTIVALES");
      edenHeader.getMenuButtons().eq(7).should("contain.text", "SALAS");
    });

    it("Verificar pagina de recitales", () => {
      cy.visit("https://www.edenentradas.com.ar/");
      edenPage.getMenuButtons().eq(3).click();
    });
  })
