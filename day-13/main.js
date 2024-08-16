const $ = document.querySelector.bind(document);

const upload = $("#mypicture");
const preview = $(".preview");
const error = $(".error");

upload.addEventListener("change", function () {
    let file = this.files[0];

    if (!file) return;

    if (!file.name.endsWith(".jpg") && !file.name.endsWith(".png")) {
        error.textContent = "Hinh danh phai dung dinh dang jpg hoac png";
        return;
    } else {
        error.textContent = "";
    }

    if (file.size / (1024 * 1024) > 5) {
        error.textContent = "Hinh khong duoc lon hon 5MB";
        return;
    } else {
        error.textContent = "";
    }

    preview.innerHTML = "";

    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.onload = function () {
        URL.revokeObjectURL(this.src);
    };
    preview.appendChild(img);
});
