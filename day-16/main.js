const $$ = document.querySelectorAll.bind(document);

const tagElement = $$(".show-scroll");

const checkAnimation = (element) => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
        element.classList.add("end");
    } else {
        element.classList.remove("end");
    }
};

window.addEventListener("scroll", () => {
    tagElement.forEach((element) => {
        checkAnimation(element);
    });
});
