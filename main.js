const menuHamburguer =   document.querySelector(".cabecalho__menu__img")
const slideMenu = document.querySelector(".cabecalho__menu-hidden");

menuHamburguer.addEventListener("click", () => {
    if(slideMenu.className == "cabecalho__menu-hidden") {
        slideMenu.className = "cabecalho__menu-appear"
    }
    else {
        slideMenu.className = "cabecalho__menu-hidden"
    }
}
);