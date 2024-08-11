const $ = document.querySelector.bind(document);

const input = $(".input");
const form = $(".form");
const list = $(".list");

window.onload = () => {
    input.focus();
};

const init = () => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos.forEach((todo) => {
        addListItem(todo);
    });
};

// add todo item to list
const addListItem = (todo) => {
    const li = document.createElement("li");
    // li.innerHTML = `
    //                 <span>${todo.text}</span>
    //                 <button class="delete"">Delete</button>
    // `;
    const span = document.createElement("span");
    span.textContent = todo.text;
    li.appendChild(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("class", "delete");
    // deleteBtn.classList.add("delete");
    li.appendChild(deleteBtn);

    if (todo.status === "completed") {
        li.setAttribute("class", "completed");
    }

    li.addEventListener("click", function () {
        this.classList.toggle("completed");
        saveToLocalStorage();
    });

    list.appendChild(li);
};

// Load todos from local storage
const saveToLocalStorage = () => {
    const listItem = list.querySelectorAll("li");
    const todos = [];

    listItem.forEach((li) => {
        const todo = {
            text: li.querySelector("span").innerText,
            status: li.classList.contains("completed") ? "completed" : "active",
        };
        todos.push(todo);
    });
    localStorage.setItem("todos", JSON.stringify(todos));
};

// Submit form to add new todo
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = input.value;
    if (inputValue) {
        addListItem({ text: inputValue });

        saveToLocalStorage();
    }
    input.value = "";
});

// click to delete todo item
list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
        saveToLocalStorage();
    }
});

init();
