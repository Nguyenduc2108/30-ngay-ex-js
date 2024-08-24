const container = document.querySelector(".container");

const length = 220;
for (let i = 0; i < length; i++) {
    let square = document.createElement("div");
    square.classList.add("square");

    container.appendChild(square);

    square.addEventListener("mouseenter", () => {
        square.style.background = radomColor();
        square.style.boxShadow = `0 0 2px ${radomColor()}, 0 0 10px ${radomColor()}`;
    });

    square.addEventListener("mouseleave", () => {
        square.style.background = "#1d1d1d";
        square.style.boxShadow = "none";
    });
}

function radomColor() {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
}
