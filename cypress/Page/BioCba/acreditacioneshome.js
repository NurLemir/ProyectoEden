class AcreditacionesHome {
    //Menu fijo
    getFixedNav() {
        return cy.get('[class="position-fixed nav-menu text-center"]');
    }

    //Botones de Home
    getMenuButton() {
        return cy.get("a");
    }

    //Imagen de fondo
    getImgFlamingo() {
        return cy.get('[cz-shortcut-listen="true"]');
    }
}

export default new AcreditacionesHome();
