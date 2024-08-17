const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imgFeature = $(".img-feature");
const listImg = $$(".list-img img");
const listItem = $$(".item");

const prevBtn = $(".prev");
const nextBtn = $(".next");

let currentIndex = 0;

const handleImage = (index) => {
    listItem.forEach((item) => {
        item.classList.remove("active");
    });

    currentIndex = index;
    imgFeature.src = listImg[currentIndex].src;

    listImg[index].parentElement.classList.add("active");
};

listImg.forEach((img, index) => {
    img.addEventListener("click", () => {
        imgFeature.style.opacity = 0;

        setTimeout(() => {
            handleImage(index);
            imgFeature.style.opacity = 1;
        }, 400);
    });
});

prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : listImg.length - 1;

    imgFeature.style.animation = "";

    setTimeout(() => {
        handleImage(currentIndex);
        imgFeature.style.animation = "sideLeft 0.5s forwards";
    }, 400);
});

nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex < listImg.length - 1 ? currentIndex + 1 : 0;

    imgFeature.style.animation = "";

    setTimeout(() => {
        handleImage(currentIndex);
        imgFeature.style.animation = "sideRight 0.5s forwards";
    }, 400);
});
