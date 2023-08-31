class edenHeader2 {
    getMenuButtons() {
        return cy.get("#navbar a");
    }
    getImageLogo(){
        return cy.get("#header-logo");
    }
}

export default new edenHeader2();
