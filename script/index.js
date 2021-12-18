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

//picker color
const colorPicker = document.getElementById("color");
const border = document.getElementById("code-border");

colorPicker.addEventListener("change", changeColor);


function changeColor() {
    border.style.backgroundColor = colorPicker.value;
}

//highlight
const code = document.getElementById("code");
const languageSelector = document.getElementById("language");
const btn = document.getElementById("highlight");

btn.addEventListener("click", highlight);

function highlight() {
    code.classList.remove('language-javascript', 'language-xml', 'language-css', 'language-html');
    code.classList.add(`language-${language.value}`);
    hljs.highlightElement(code)
};