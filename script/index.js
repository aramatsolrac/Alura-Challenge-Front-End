//hamburguer manu

const navMenu = document.querySelector(".nav-menu");
const hamburguerBtn = document.querySelector(".header__mobile__menu");

hamburguerBtn.addEventListener("click", mobileMenu);

function mobileMenu() {
    navMenu.classList.toggle("active");
}

function closeMenu() {
    navMenu.classList.remove("active");
}

//picker color
const colorPicker = document.getElementById("color");
const border = document.getElementById("code-border");

colorPicker.addEventListener("change", changeColor)


function changeColor() {
    border.style.backgroundColor = colorPicker.value;
}