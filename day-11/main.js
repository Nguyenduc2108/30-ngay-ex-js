const $ = document.querySelector.bind(document);

const successBtn = $(".success");
const warningBtn = $(".warning");
const errorBtn = $(".error");

const toasts = $(".toasts");

const createToast = (status) => {
    const icons = {
        success: "fas fa-check",
        warning: "fas fa-triangle-exclamation",
        error: "fas fa-triangle-exclamation",
    };

    const toast = document.createElement("div");
    toast.classList.add("toast", `toast--${status}`);
    toast.innerHTML = `
        <div class="icon icon-${status}">
            <i class="${icons[status]}"></i>
        </div>
        <div class="message">
            <p>Lorem ipsum dolor sit amet ${status}.</p>
        </div>
        <div class="line line-${status}"></div>
    `;

    toasts.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 5000);
};

successBtn.addEventListener("click", () => createToast("success"));
warningBtn.addEventListener("click", () => createToast("warning"));
errorBtn.addEventListener("click", () => createToast("error"));
