class AcreditacionesHome {
    getMenuButton() {
        return cy.get("a");
    }

    getImgFlamingo() {
        return cy.get("[data-url]");
    }
}

export default new AcreditacionesHome();
