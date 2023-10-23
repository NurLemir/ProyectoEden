/// <reference types="cypress" /> 

describe("TEST DE SERVICIO DE EDEN", () => {
    it("Verificar Servicio de INICIO", () => {
        cy.request("GET", "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio",
            ).then((response) => {
                cy.log(`Respuesta del servicio de Inicio: ${JSON.stringify(response)}`);
            expect(response.status).to.eq(200);   
        });
    });

    it("Verificar Servicio de INICIO 2", () => {
        cy.request( {
            method: "GET", 
            url: "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/inicio",
        }).then((response) => {
                cy.log(`Respuesta del servicio de Inicio: ${JSON.stringify(response)}`);
            expect(response.status).to.eq(200);   
            cy.writeFile("cypress/fixtures/autogenerado/eventos.json", response["body"]);
        });
    });
})