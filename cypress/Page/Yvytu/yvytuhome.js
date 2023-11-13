class YvytuHome {
    getMenuPillButton() {
        return cy.get('a[class*="rounded-full py-2 px-4"]');
    }

    getMenuAllButton(){
        return cy.get("nav#menu-nav a");
    }

    getIrArribaButton(){
        return cy.get("#btn-scroll-top");
    }

    getGenericSubtitle() {
        return cy.get("h2");
    }

    getGenericButton() {
        return cy.get("a");
    }

    getImgCabaniaYaguarete() {
        return cy.get("#slick-slide00");
    }

    getImgCabaniaArasari() {
        return cy.get("#slick-slide00");
    }
}


export default new YvytuHome();
