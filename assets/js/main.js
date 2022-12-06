document.addEventListener(`DOMContentLoaded`, () => {
    const elementosCarousel = document.querySelectorAll(`.carousel`);
    M.Carousel.init(elementosCarousel, {
        duration: 500,
        dis: -80,
        shift:5,
        padding:5,
        numVisible: 3,
        indicators: true,
    });
});

// nav toggle y nav menu clases del proyecto del profe

const boton = document.querySelector("#boton")
const navMenu = document.querySelector(".nav__menu")

boton.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
});