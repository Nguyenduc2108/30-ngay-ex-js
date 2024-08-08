const $ = document.querySelector.bind(document);

let content = $(".content");
const removeAllBtn = $(".remove-all");
const inputSearch = $(".search");

let tags = ["Html", "Css"];

const render = () => {
    content.innerHTML = "";
    for (let i = 0; i < tags.length; i++) {
        content.innerHTML += `
        <div class="tag">${tags[i]}
        <span class="close" onclick="removeTag(${i})">&times;</span>
        </div>
        `;
    }
    content.appendChild(inputSearch);
    inputSearch.focus();
};

const removeTag = (index) => {
    tags.splice(index, 1);
    render();
};

render();

inputSearch.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        tags.push(inputSearch.value.trim());
        render();
        inputSearch.value = "";
    }
});

removeAllBtn.addEventListener("click", () => {
    tags = [];
    render();
});
