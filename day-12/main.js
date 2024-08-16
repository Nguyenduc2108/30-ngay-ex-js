const $ = document.querySelector.bind(document);

const body = $("body");
const range = $(".range");
const process = $(".process");
const text = $(".text");

const updateProcess = (percent) => {
    percent = Math.min(100, Math.max(0, percent));

    process.style.width = `${percent}%`;
    text.textContent = `${percent}%`;
};

range.addEventListener("mousemove", function (e) {
    const processWidth = e.pageX - this.offsetLeft;
    let percent = Math.round((processWidth / this.offsetWidth) * 100);
    updateProcess(percent);

    const alpha = percent / 100;
    body.style.backgroundColor = `rgba(0, 0, 0, ${alpha})`;
});

updateProcess(50);
