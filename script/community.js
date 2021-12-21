function clickLikeBtn(id) {
    console.log('clickLikeBtn', id);
    const btnLike = document.getElementById(`like-${id}`);
    const likeNumber = document.getElementById(`like-number-${id}`);
    const iconLike = btnLike.querySelector('i');
    likeNumber.innerHTML = parseInt(likeNumber.innerHTML) + 1;
    if (likeNumber.innerHTML != "0") {
        iconLike.style.color = "red";
    }
}

fetch('https://alura-challenge-front-end-default-rtdb.firebaseio.com/codes.json')
    .then(response => response.json())
    .then(data => addCard(data));

function addCard(data) {
    const projectContainer = document.getElementById("container_codes")

    data.forEach((codeItem) => {
        projectContainer.innerHTML = `
        <div class="container__code-editor">
            <div class="container__code-editor__project">
                <div class="container__code-editor__border" style="background-color: var(--${codeItem.borderColor})">
                    <div class="container__code-editor__text">
                        <div class="container__code-editor__mac-buttons">
                            <div class="container__code-editor__mac-buttons__red"></div>
                            <div class="container__code-editor__mac-buttons__yellow"></div>
                            <div class="container__code-editor__mac-buttons--green"></div>
                        </div>
                        <pre class="code-ident">
                            <code id="code">${codeItem.code}</code>
                        </pre>
                    </div>
                </div>

                <div class="card-actions">
                    <div class="container__code-editor__project-details">
                        <h1>${codeItem.projectName}</h1>
                        <p>${codeItem.projectDescription}</p>
                    </div>
                    <div class="container__code-editor__project-details_metrics">
                        <div class="metrics-button">
                            <button class="btn-comment mobile">
                                <i class="fas fa-comment"></i>
                                <span>${codeItem.comments.length}</span>
                            </button>
                            <button class="btn-heart mobile" id="like-${codeItem.id}" onclick="clickLikeBtn(${codeItem.id})">
                                <i class="fas fa-heart" id="heart" ${codeItem.likes > 0 ? 'style="color: red"' : null}></i>
                                <span id="like-number-${codeItem.id}">${codeItem.likes}</span>
                            </button>
                        </div>

                        <div>
                            <button class="btn-profile mobile">
                            <img src="${codeItem.userImage}" alt="${codeItem.userName}">
                            <p>${codeItem.userName}</p>
                        </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        ` + projectContainer.innerHTML
    })

}