const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const input = $("input");
const formInput = $(".form-input");
const eyeIconList = $$("i");
const lowercase = $(".lowercase");
const uppercase = $(".uppercase");
const number = $(".number");
const symbol = $(".symbol");
const length = $(".length");

eyeIconList.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
        if (input.type === "password") {
            input.type = "text";
            formInput.classList.add("show");
        } else {
            input.type = "password";
            formInput.classList.remove("show");
        }
    });
});

input.addEventListener("input", () => {
    const value = input.value;
    const lowercaseRegex = /[a-z]/;
    const uppercaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const symbolRegex = /[^a-zA-Z0-9]/;

    if (value.match(lowercaseRegex)) {
        lowercase.classList.add("valid");
    } else {
        lowercase.classList.remove("valid");
    }

    if (value.match(uppercaseRegex)) {
        uppercase.classList.add("valid");
    } else {
        uppercase.classList.remove("valid");
    }

    if (value.match(numberRegex)) {
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
    }

    if (value.match(symbolRegex)) {
        symbol.classList.add("valid");
    } else {
        symbol.classList.remove("valid");
    }

    if (value.length >= 8) {
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
    }
});
