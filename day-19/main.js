const $ = document.querySelector.bind(document);

const colorInput = $(".input-color");
const eraserBtn = $(".eraser-btn");
const minusBtn = $(".minus-btn");
const plusBtn = $(".plus-btn");
const saveBtn = $(".save-btn");
const clearBtn = $(".clear-btn");
const sizeEl = $(".size");
const canvas = $(".canvas");
const ctx = canvas.getContext("2d"); // ctx để có thể vẽ trên canvas

let beginPos = {
    x: 0,
    y: 0,
};

let currentPos = {
    x: 0,
    y: 0,
};

let isDrawing = false;
let colorPaint = "#000";
let sizePaint = 10;

sizeEl.textContent = sizePaint;

canvas.addEventListener("mousedown", (e) => {
    beginPos = {
        x: e.offsetX,
        y: e.offsetY,
    };
    isDrawing = true;
});

canvas.addEventListener("mousemove", (e) => {
    if (isDrawing) {
        currentPos = {
            x: e.offsetX,
            y: e.offsetY,
        };

        ctx.beginPath();
        ctx.arc(beginPos.x, beginPos.y, sizePaint, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath(); // Bắt đầu vẽ
        ctx.moveTo(beginPos.x, beginPos.y); // Điểm bắt đầu
        ctx.lineTo(currentPos.x, currentPos.y); // Điểm kết thúc
        ctx.lineWidth = sizePaint * 2; // Độ rộng của đường vẽ
        ctx.stroke(); // Vẽ đường thẳng

        beginPos.x = currentPos.x;
        beginPos.y = currentPos.y;
    }
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
});

colorInput.addEventListener("change", (e) => {
    colorPaint = e.target.value;
    ctx.fillStyle = colorPaint;
    ctx.strokeStyle = colorPaint;
});

eraserBtn.addEventListener("click", () => {
    colorPaint = "#fff";
    ctx.fillStyle = colorPaint;
    ctx.strokeStyle = colorPaint;
});

minusBtn.addEventListener("click", () => {
    sizePaint > 5 ? (sizePaint -= 5) : sizePaint;
    sizeEl.textContent = sizePaint;
    // ctx.lineWidth = sizePaint * 2;
    console.log(sizePaint);
});

plusBtn.addEventListener("click", () => {
    sizePaint < 30 ? (sizePaint += 5) : sizePaint;
    sizeEl.textContent = sizePaint;
    // ctx.lineWidth = sizePaint * 2;
    console.log(sizePaint);
});

clearBtn.addEventListener("click", () => {
    confirm("Do you want to clear the canvas?") && ctx.clearRect(0, 0, canvas.width, canvas.height);
});

saveBtn.addEventListener("click", () => {
    const dataURL = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataURL;

    a.download = "my-painting.png";

    a.click();

    a.remove();

    alert("Your painting has been saved!");
});
