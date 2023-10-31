// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const Ajv = require("ajv")
const ajv = new Ajv() 

/**
 * Abre la URL en tamaño de pantalla desktop o mobile
 * @method {openWeb}
 */
Cypress.Commands.add('openWeb', () => {
    let tamPantalla;

    if(Cypress.env("type")==="mobile"){
     tamPantalla = Cypress.env("viewportmobile").device;
    }else{
     tamPantalla = Cypress.env("viewportdesktop").device;
    }

    cy.viewport(tamPantalla);
    cy.visit("/");
});

/**
 * Valida la estructura de datos del servicio
 * @method validarSchema 
 * @param {String} schemaName - Nombre del archivo que está en la carpeta de fixtures/schemas 
 * correspondiente al archivo que posee la estruct de datos del servicio que se desea validar 
 * @param {String} servicioName - Nombre del archivo que está en la caréta de fixtures/autogenerado
 */
Cypress.Commands.add("validarSchema", (schemaName, servicioName) => {

    cy.fixture(`schemas/${schemaName}.json`).then((schema) => {
        //hacer algo con el schema
        cy.fixture(`autogenerado/${servicioName}.json`).then((dataServicio) => {
            const validate = ajv.compile(schema);
            const valid = validate(dataServicio);
            if (!valid) {
                cy.log((JSON.stringify(validate.errors)));
                throw new Error(`Error en el servicio ${JSON.stringify(validate.errors)}`);
            } else {
                cy.log(`El schema ${schemaName} se valido correctamente`);
            }
        });
    });      
});