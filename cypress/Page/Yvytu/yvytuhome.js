class YvytuHome {

    //Botones de Header
    getMenuPillButton() {
        return cy.get('a[class*="rounded-full py-2 px-4"]');
    }

    getMenuAllButton(){
        return cy.get("nav#menu-nav a");
    }

    //Banner de imagenes
    getImagenesBanner(){
        return cy.get(`[class*="bg-[url('public/images/header-gallery/"]`);
    }

    //Boton Ir Arriba
    getIrArribaButton(){
        return cy.get("#btn-scroll-top");
    }

    getGenericSubtitle() {
        return cy.get("h2");
    }

    getGenericButton() {
        return cy.get("a");
    }

    //Reel de Imagenes
    /*getReelImagenes() {
        return cy.get('[class="slick-list draggable"]').eq(1).find("img");
    }*/

    //Cabañas
    getImgCabaniaYaguarete() {
        return cy.get("#slick-slide00");
    }

    getImgCabaniaArasari() {
        return cy.get("#slick-slide00");
    }

    //Como llegar

    //Contacto

    //Colabora

    //Sponsor

    //Redes

    //Footer
}


export default new YvytuHome();
