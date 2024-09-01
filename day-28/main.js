const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const cardImg = $(".card-img img");
const cardTitle = $(".card-title");
const cardText = $(".card-desc");
const cardLink = $(".card-btn");

fetch("https://api.github.com/users/akshaymarch7")
    .then((res) => res.json())
    .then((data) => {
        cardImg.parentElement.classList.remove("loading");
        cardTitle.classList.remove("loading");
        cardText.classList.remove("loading");
        cardLink.classList.remove("loading");

        cardImg.src = data.avatar_url;
        cardTitle.textContent = data.name;
        cardText.textContent = data.bio;
        cardLink.href = data.html_url;
    });
