const $ = document.querySelector.bind(document);

const searchBox = $(".search-box");
const searchBtn = $(".search-btn");
const searchInput = $(".search-input");

// method 1 / way 1 / making 1
// const toggleSearchBox = () => {
//     searchBox.classList.toggle("open");
// };

// searchBtn.addEventListener("click", () => {
//     toggleSearchBox();
//     if (searchBox.classList.contains("open")) {
//         searchInput.focus();
//     }
// });

// method 2 / way 2 / making 2
searchBtn.addEventListener("click", function () {
    this.parentElement.classList.toggle("open");
    this.previousElementSibling.focus();

    // if (searchBox.classList.contains("open")) {
    //     searchInput.focus();
    // }
});
