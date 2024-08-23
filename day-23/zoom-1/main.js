const $ = document.querySelector.bind(document);

const img = $("img");
const mirror = $("#mirror");
const zoomImage = 3;

img.addEventListener("mousemove", function (e) {
    const { offsetWidth, offsetHeight, offsetLeft, offsetTop } = this;
    const { pageX, pageY, clientX, clientY } = e;

    mirror.style.top = `${clientY}px`;
    mirror.style.left = `${clientX}px`;

    const mouseWidthImage = pageX - offsetLeft;
    const mouseHeightImage = pageY - offsetTop;

    const x = (mouseWidthImage / offsetWidth) * 100;
    const y = (mouseHeightImage / offsetHeight) * 100;

    mirror.style.backgroundImage = `url(${img.src})`;
    mirror.style.backgroundSize = `${offsetWidth * zoomImage}px ${offsetHeight * zoomImage}px`;
    mirror.style.backgroundPosition = `${x}% ${y}%`;
    mirror.style.display = "block";
});

img.addEventListener("mouseleave", () => {
    mirror.style.display = "none";
});
