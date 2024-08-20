const p = document.querySelector("p");
let text = p.textContent;
let currentIndex = 0;
let isForward = true;

const typingText = () => {
    p.textContent = text.slice(0, currentIndex);
    if (isForward) {
        currentIndex++;
        if (currentIndex > text.length) {
            isForward = false;
            currentIndex = text.length;
        }
    } else {
        currentIndex--;
        if (currentIndex < 0) {
            isForward = true;
            currentIndex = 0;
        }
    }
};
setInterval(typingText, 100);
