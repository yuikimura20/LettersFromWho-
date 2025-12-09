// @ts-check

const cd = document.getElementById("cd");
const audio = document.getElementById("music");

cd.addEventListener("click", function () {
    cd.classList.toggle("active");

    if (cd.classList.contains("active")) {
        audio.play();
    } else {
        audio.pause();
    }
});