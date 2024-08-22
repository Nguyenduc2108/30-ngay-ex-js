const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// way 1
const control = $$("button");
const listImg = $$("img");

control.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let type = e.currentTarget.getAttribute("type");

        listImg.forEach((img) => {
            let foodType = img.getAttribute("type");

            if (type === "all" || foodType === type) {
                img.classList.remove("hide");
            } else {
                img.classList.add("hide");
            }
        });
    });
});

// way 2
// const imgWrap = $(".img-wrap");
// const control = $$("button");
// const listImg = $$("img");

// function render(list) {
//     imgWrap.innerHTML = "";
//     list.forEach((item) => {
//         let imgEl = document.createElement("img");
//         Object.assign(imgEl.style, {
//             width: "220px",
//             height: "220px",
//             objectFit: "cover",
//             borderRadius: "10px",
//             transition: "0.5s",
//             transitionProperty: "transform, rotate",
//         });
//         imgEl.src = item.src;
//         imgEl.setAttribute("type", item.type);
//         imgWrap.appendChild(imgEl);
//     });
// }

// let arr = [];
// listImg.forEach((img) => {
//     arr.push({
//         src: img.src,
//         type: img.getAttribute("type"),
//     });
// });

// control.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         let type = e.currentTarget.getAttribute("type");

//         let list = arr.filter((item) => item.type === type || type === "all");
//         render(list);
//     });
// });
