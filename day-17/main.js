const $ = document.querySelector.bind(document);

const facebook = $(".facebook p");
const youtube = $(".youtube p");
const tiktok = $(".tiktok p");

const count = (el, to) => {
    let count = 0;
    const interval = setInterval(() => {
        count += to / 100;
        el.innerText = count;
        if (count === to) {
            clearInterval(interval);
        }
    }, 1000 / to);
};

count(facebook, 3000);
count(youtube, 10000);
count(tiktok, 9000);
