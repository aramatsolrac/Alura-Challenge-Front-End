//search
const field = document.getElementById("search-bar");
field.addEventListener("keyup", search);

function search() {
    fetch(`https://alura-challenge-front-end-default-rtdb.firebaseio.com/codes.json?orderBy="language"&equalTo="${field.value}"&print=pretty`)
        .then(response => response.json())
        .then(data => populateData(data));
}