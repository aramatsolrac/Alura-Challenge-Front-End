//hamburguer menu
const navMenu = document.querySelector(".nav-menu");
const hamburguerBtn = document.querySelector(".header__mobile__menu");

hamburguerBtn.addEventListener("click", mobileMenu);

function mobileMenu() {
    navMenu.classList.toggle("active");
}

function closeMenu() {
    navMenu.classList.remove("active");
}