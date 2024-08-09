const $ = document.querySelector.bind(document);

const form = $(".form");
const username = $("#username");
const email = $("#email");
const password = $("#password");
const confirmPassword = $("#confirm-password");
const btnSubmit = $(".btn");

const showError = (input, message) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    formControl.classList.add("error");
    small.innerText = message;
};

const showSuccess = (input) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    formControl.classList.remove("error");
    small.innerText = "";
};

const checkEmpty = (inputArr) => {
    inputArr.forEach((input) => {
        if (!input.value.trim()) {
            showError(input, `${input.placeholder} is required`);
        } else {
            showSuccess(input);
        }
    });
};

const checkEmail = (input) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regex.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not valid");
    }
};

const checkLength = (input, min) => {
    if (input.value.length < min) {
        showError(input, `${input.placeholder} must be at least ${min} characters`);
    } else {
        showSuccess(input);
    }
};

const checkPasswordMatch = (input1, input2) => {
    if (input1.value !== input2.value) {
        showError(input2, "Passwords do not match");
    }
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isCheckEmpty = checkEmpty([username, email, password, confirmPassword]);
    let isCheckEmail = checkEmail(email);
    let isCheckLengthPassword = checkLength(password, 3);
    let isCheckLengthConfirmPassword = checkLength(confirmPassword, 3);
    let isCheckPasswordMatch = checkPasswordMatch(password, confirmPassword);

    if (
        isCheckEmpty ||
        isCheckEmail ||
        isCheckLengthPassword ||
        isCheckLengthConfirmPassword ||
        isCheckPasswordMatch
    ) {
        // khong lam gi ca
    } else {
        // logic , call API...
    }
});
