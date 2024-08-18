const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const boxList = $$(".box");
const targetList = $$(".target");

let currentTarget = null;

targetList.forEach((target) => {
    target.addEventListener("dragstart", function () {
        this.classList.add("dragging");
        currentTarget = this;
    });

    target.addEventListener("dragend", function () {
        this.classList.remove("dragging");
    });
});

boxList.forEach((box) => {
    box.addEventListener("dragover", function (e) {
        e.preventDefault();
    });

    box.addEventListener("drop", function () {
        if (!box.querySelector(".target")) this.appendChild(currentTarget);
    });
});
