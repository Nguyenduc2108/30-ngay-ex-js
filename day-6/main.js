const $ = document.querySelector.bind(document);

const alertBtn = $(".alert");
const result = $(".result");
const box = $(".box");
const eKey = $(".item.key .desc");
const eLocation = $(".item.location .desc");
const eWhich = $(".item.which .desc");
const eCode = $(".item.code .desc");

const hideAlert = () => {
    alertBtn.classList.add("hide");
};

const showBox = () => {
    box.classList.remove("hide");
};

document.addEventListener("keydown", (e) => {
    hideAlert();
    eKey.textContent = e.key;
    eLocation.textContent = e.location;
    eWhich.textContent = e.which;
    eCode.textContent = e.code;
    result.textContent = e.keyCode;
    showBox();
});
