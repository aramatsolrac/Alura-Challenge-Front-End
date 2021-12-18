//hamburguer menu
const navMenu = document.querySelector(".nav-menu");
const hamburguerBtn = document.querySelector(".header__mobile__menu");
const barMenu = document.getElementById("bar-menu");
const xMenu = document.getElementById("close-menu");
let showMenu = false;

hamburguerBtn.addEventListener("click", mobileMenu);

function mobileMenu() {
    if (!showMenu) {
        navMenu.classList.toggle("active");
        barMenu.style.display = "none";
        xMenu.style.display = "flex";
        showMenu = true;
    } else {
        navMenu.classList.remove("active");
        xMenu.style.display = "none";
        barMenu.style.display = "flex";
        showMenu = false;
    }
};