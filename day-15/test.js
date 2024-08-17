const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// call api
const mockData = fetch("https://fakestoreapi.com/products")
    .then((res) => res.json()) // parse json
    .then((data) => {
        // handle data
        console.log(data);

        // render data
        const products = $(".products");
        products.innerHTML = "";

        data.forEach((product) => {
            const productEl = document.createElement("article");
            productEl.innerHTML = `
        <a href="#!" class="product">
            <div class="img-wrap">
                <img
                    src="${product.image}"
                    alt="product-1"
                />
            </div>
            <div class="info">
                <h3 class="name">${product.title}</h3>
                <span class="price">${product.price.toLocaleString()}đ</span>
            </div>
        </a>
    `;
            products.appendChild(productEl);
        });
    });

const inputSearch = $(".input");
inputSearch.addEventListener("change", (e) => {
    const value = e.target.value.trim().toLowerCase();
    const productEl = $$(".product");
    productEl.forEach((item) => {
        if (item.innerText.toLowerCase().includes(value)) {
            item.classList.remove("hide");
        } else {
            item.classList.add("hide");
        }
    });
});
