const border = document.getElementById("code-border");
const code = document.getElementById("code");
const btn = document.getElementById("highlight");
// const highlightLanguage = document.getElementsByClassName(`language-${language.value}`, 'hljs');


const projectName = document.getElementById("project-name");
const projectDescription = document.getElementById("description");
const languageSelector = document.getElementById("language");
const colorPicker = document.getElementById("color");
const saveBtn = document.getElementById("save-project");

//color picker
colorPicker.addEventListener("change", changeColor);

function changeColor() {
    border.style.backgroundColor = colorPicker.value;
}

//highlight
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

//save project
saveBtn.addEventListener("click", saveProject);

function saveProject() {

    if (code.innerText == '' || projectDescription.value === '' || projectName.value === '' || languageSelector.value === '' || colorPicker.value === '') {
        alert("...")
    } else {
        const newCode = {
            "borderColor": colorPicker.value,
            "code": code.innerText,
            "highlight": setHighlight,
            "language": languageSelector.value,
            "likes": 0,
            "projectDescription": projectDescription.value,
            "projectName": projectName.value,
            "userImage": "./images/profile.png",
            "userName": "@Rob"
        }

        fetch('https://alura-challenge-front-end-default-rtdb.firebaseio.com/codes.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newCode),
            })
            .then(response => response.json())
            .then(codes => {
                console.log('Success:', codes);

                code.innerText = '';
                projectDescription.value = '';
                projectName.value = '';
                languageSelector.value = '';
                border.style.backgroundColor = '#6bd1ff';
                colorPicker.value = '#6bd1ff';
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
};