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