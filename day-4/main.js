const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const images = $$(".images img");

const gallery = $(".gallery");
const innerGallery = $(".inner");
const galleryImage = $(".gallery img");
const overlay = $(".overlay");
const closeGallery = $(".close");
const dots = $$(".dot");

const prevBtn = $(".prev");
const nextBtn = $(".next");

let currentImageIndex = 0;

// func show Gallery
const showGallery = () => {
    gallery.classList.add("show");
};

// func hide Gallery
const hideGallery = () => {
    gallery.classList.remove("show");
};

// func toggle active dot
const toggleActiveDot = (index) => {
    dots.forEach((dot, dotIndex) => {
        dot.classList.toggle("active", dotIndex === index);
    });
};

images.forEach((image, index) => {
    image.addEventListener("click", () => {
        currentImageIndex = index;
        galleryImage.src = image.src;
        showGallery();
        toggleActiveDot(currentImageIndex);
    });
});

// hide Gallery
closeGallery.addEventListener("click", hideGallery);
overlay.addEventListener("click", hideGallery);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        hideGallery();
    }
});

// next image
nextBtn.addEventListener("click", () => {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    galleryImage.src = images[currentImageIndex].src;
    toggleActiveDot(currentImageIndex);
});

// prev image
prevBtn.addEventListener("click", () => {
    currentImageIndex--;
    if (currentImageIndex <= 0) {
        currentImageIndex = images.length - 1;
    }
    galleryImage.src = images[currentImageIndex].src;
    toggleActiveDot(currentImageIndex);
});

// click dot to change image and active dot
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentImageIndex = index;
        galleryImage.src = images[currentImageIndex].src;
        toggleActiveDot(currentImageIndex);
    });
});
