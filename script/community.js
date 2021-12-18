//like button
var btnLike = document.getElementById("like"),
    count = 0;
const span = btnLike.querySelector('span');
const icon = btnLike.querySelector('i');

btnLike.addEventListener("click", click);


function click() {
    console.log('click')
    count += 1;
    span.innerHTML = count;
    icon.style.color = "red";
};