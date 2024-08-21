const html = document.querySelector("html");
const label = document.querySelector(".toggle");

const toggleTheme = () => {
    html.classList.toggle("dark");
};

label.addEventListener("click", toggleTheme);
