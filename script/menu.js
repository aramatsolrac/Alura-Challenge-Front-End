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

//search bar

const searchBtn = document.getElementById("search-mobile");
const searchBar = document.getElementById("search-bar");
const searchIcon = document.getElementById("search-icon");
const xSearch = document.getElementById("close-search");
let showBar = false;

searchBtn.addEventListener("click", mobileSearch);

function mobileSearch() {
    if (!showMenu) {
        searchBar.style.display = "flex";
        xSearch.style.display = "flex";
        searchIcon.style.display = "none";
        showMenu = true;
    } else {
        searchBar.style.display = "none";
        xSearch.style.display = "none";
        searchIcon.style.display = "flex";
        showMenu = false;
    }
};

//menu active/desactive