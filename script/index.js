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
let setHighlight = false;

function highlight() {
    const originalText = code.innerText;
    if (!setHighlight) {
        code.classList.remove('language-javascript', 'language-xml', 'language-css', 'language-html');
        code.classList.add(`language-${language.value}`);
        hljs.highlightElement(code)
        btn.innerText = "Remove Highlight";
        setHighlight = true;
    } else {
        code.classList.remove(`language-${language.value}`, 'hljs');
        code.textContent = originalText;
        btn.innerText = "Visualize Highlight";
        setHighlight = false;
    }
};