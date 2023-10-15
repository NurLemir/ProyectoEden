/// <reference types="cypress" />
import EdenHome from "../../Page/Eden/edenHome";
import EdenHeader from "../../Page/Eden/edenHome";
import EdenEvent from "../../Page/Eden/edenEvent";
import EdenSalas from "../../Page/Eden/edenSalas"; 
import utils from "../../Page/Eden/utils";

const edenHome = new EdenHome();
const edenHeader = new EdenHeader();
const edenEvent = new EdenEvent();
/**const edenSalas = new EdenSalas();*/

describe('Test sobre la pagina de EDEN ENTRADAS', { tags: '@regression'}, () => {
    beforeEach(() => {
      cy.openWeb();
    });
    it('Verificar subtitulos', { tags: '@regression'}, () => {
      const txtBuscar = "BUSCAR EVENTO";
      const txtCalendar = "CALENDARIO DE EVENTOS";

      edenHome.getSubTitles().first().should("contain.text", txtBuscar);
      edenHome
      .getSubTitles()
      .last()
      .should("contain.text", txtCalendar);
    });

    it('Verificar Menu', () => {
      const menuBtn = ["HOME","TODOS","AGENDA DEL FINDE","RECITALES","TEATROS","CUARTETOS","FESTIVALES","SALAS"];

      edenHeader.getMenuButtons().each((button, $index) => {
        cy.wrap(button).should("contain.text", menuBtn[$index]);
    });

      /*edenHeader.getMenuButtons().eq(0).should("contain.text", menuBtn[0]);
      edenHeader.getMenuButtons().eq(1).should("contain.text", menuBtn[1]);
      edenHeader.getMenuButtons().eq(2).should("contain.text", menuBtn[2]);
      edenHeader.getMenuButtons().eq(3).should("contain.text", menuBtn[3]);
      edenHeader.getMenuButtons().eq(4).should("contain.text", menuBtn[4]);
      edenHeader.getMenuButtons().eq(5).should("contain.text", menuBtn[5]);
      edenHeader.getMenuButtons().eq(6).should("contain.text", menuBtn[6]);
      edenHeader.getMenuButtons().eq(7).should("contain.text", menuBtn[7]);*/
    });

    it("Verificar pagina de recitales", () => {
      edenHeader.getMenuButtons().contains("RECITALES").click();
      //const newUrl = "https://www.edenentradas.com.ar/sitio/contenido/recitales"; 
      //cy.url().should("eq", newUrl);
      cy.url().should("include", "/sitio/contenido/recitales");
    });

    it("Verificar Imagen de Logo", () => {
      edenHeader.getImageLogo().should("be.visible").and("have.prop", "naturalHeight").and("be.greaterThan", 0);
      const imgSource = "https://static.edenentradas.com.ar/sitio/images/logo.gif";
      edenHeader.getImageLogo().should("have.attr", "src", imgSource);
      edenHeader.getImageLogo().should("have.attr", "alt", "EdenEntradas");
      edenHeader.getImageLogo()
    });

    it("Verificar el funcionamiento del buscador", () => {
      edenHeader. getSearchInput().type("Cosquin");
      edenHeader.getSearchSuggestion().click();
      const eventTxt = "Cosquin Rock 2024 ";
      edenEvent.getEventTitle().should("contain.text", eventTxt);
    });

    it("Validación del calendario", () => {
      const [dia, mes, anio] = utils.getCompleteDate();
    
      edenHeader.getCalendarTitle().should("contain.text", mes, anio);

      edenHeader.getCalendar().find('td').each((cuadradoDia, $inx) => {
        if($inx < dia){
        cy.wrap(cuadradoDia).should("have.class", 
        "ui-datepicker-unselectable ui-state-disabled");
      }
      });
    });

    it.skip("Verificar nombre de salas", () => {
      //cy.visit("https://www.edenentradas.com.ar/sitio/contenido/salas");
      cy.visit("/");
      edenHeader.getMenuButtons().contains("SALAS").click();

       const titulosSalas = [
        "Plaza de la Música",
        "Sala del Rey",
        "Refugio Guernica",
        "Captain Blue XL",
        "Teatro Cultural Cañada",
        "Sala Agustín Tosco - Luz y Fuerza - B° Centro",
        "Sala de las Américas",
        "Studio Theater",
        "Casa Babylon",
       ];

       //Validación de los títulos iteración por elemento
       edenSalas.getSalaBlock().each((block, $inx) => {
        cy.wrap(block).should("be.visible");
        cy.wrap(block).should("contain.text", titulosSalas[$inx])
       });

       //Validación de títulos por array 
       titulosSalas.forEach((titulo, $inx) => {
        edenSalas.getSalaBlock().eq($inx).should("contain.text", titulo);
       });
    });
  })
