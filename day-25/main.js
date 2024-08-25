const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player = $(".player");
const video = $("video");
// const repeat = $(".repeat");
const play = $(".play");
const timer = $(".timer");
const progress = $(".progress");
const progressFilled = $(".progress-filled");
const prev = $(".prev");
const next = $(".next");
const setting = $(".setting");
const volume = $(".volume");
const volumeIcon = $(".volume-icon");
const volumeInput = $(".volume-input");

const icons = {
    play: `<i class="fa-solid fa-play"></i>`,
    pause: ` <i class="fa-solid fa-pause play-pause"></i>`,
    repeat: `<i class="fa-solid fa-rotate-right"></i>`,
    volumeUp: `<i class="fa-solid fa-volume-high"></i>`,
    volumeMute: `<i class="fa-solid fa-volume-xmark"></i>`,
};

/**
 * @param {number} volume
 * @returns {string} icon
 */
const togglePlay = () => {
    if (video.paused) {
        video.play();
        play.innerHTML = icons.pause;
    } else {
        video.pause();
        play.innerHTML = icons.play;
    }
};

/**
 *
 * @param {number} sec
 * @returns {void} minutes and seconds
 */
const calculateTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
};

/**
 * @param {number} time
 * @returns {void} update video time
 * @returns {void} update progress bar
 * */
const updateTimer = () => {
    timer.innerHTML = `${calculateTime(video.currentTime)} / ${calculateTime(video.duration)}`;
    const percent = Math.floor((video.currentTime / video.duration) * 100);
    progressFilled.style.width = `${percent}%`;

    if (video.currentTime === video.duration) {
        play.innerHTML = icons.repeat;
    }
};

/**
 *
 * @param {number} time
 * @returns {void} skip time
 */
const skipTime = (time) => {
    video.currentTime += time;
};

const toggleVolume = () => {
    video.volume = video.volume > 0 ? 0 : 1;
    volumeInput.value = video.volume;
    volumeIcon.innerHTML = video.volume > 0 ? icons.volumeUp : icons.volumeMute;
};

play.addEventListener("click", togglePlay);
video.addEventListener("click", () => togglePlay());
video.addEventListener("timeupdate", updateTimer);
prev.addEventListener("click", () => skipTime(-10));
next.addEventListener("click", () => skipTime(10));

volumeInput.addEventListener("input", () => {
    video.volume = volumeInput.value;
    volumeIcon.innerHTML = video.volume > 0 ? icons.volumeUp : icons.volumeMute;
});

volumeIcon.addEventListener("click", () => {
    toggleVolume();
});

// change speed and quality video setting
const settingSpeed = $(".setting-speed");
const speed = $("#speed");

setting.addEventListener("click", () => {
    settingSpeed.classList.toggle("active");
    // settingQuality.classList.toggle("active");
});

speed.addEventListener("change", () => {
    video.playbackRate = speed.value;
});

// const settingQuality = $(".setting-quality");
// const quality = $("#quality");
// quality.addEventListener("change", () => {
//     video.src = `./videos/video-${quality.value}.mp4`;
//     video.play();
// });
