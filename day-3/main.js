const $ = document.querySelector.bind(document);

const btnOpenModal = $(".btn");
const modal = $(".modal");
const btnIconClose = $(".module-close");
const btnClose = $(".footer-close");
const overlay = $(".overlay");

// show / hide modal
const toggleModal = () => {
    modal.classList.toggle("show");
};

btnOpenModal.addEventListener("click", toggleModal);
btnIconClose.addEventListener("click", toggleModal);
btnClose.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);
