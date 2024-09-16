document.addEventListener("DOMContentLoaded", () => {

    const slider = document.getElementById("slider");
const moveSquare = document.getElementById("section3-pic");
const container = document.getElementById("content-slider");

if (slider && moveSquare && container) {
    slider.value = 0;
    function updateMoveSquare() {
        const sliderValue = slider.value;
        const maxMove = container.offsetWidth - moveSquare.offsetWidth;
        const newLeft = (sliderValue / 100) * maxMove;
        moveSquare.style.left = `${newLeft}px`;
    }
    /*
    updateMoveSquare();
    slider.addEventListener('input', updateMoveSquare);
    */

function setInitialValue() {
    slider.value = 0;
    updateMoveSquare();
}

setInitialValue();
slider.addEventListener("input", updateMoveSquare);
window.addEventListener("resize", () => {
    setInitialValue();
});
}
});

for (let i = 0; i <= 1; i++){
    document.getElementById("main-section1").onclick = () => {
        document.getElementById("count").innerHTML = i++;
    }
}

const refresh = document.getElementById("section2-pic");
refresh.onclick = () => {
    window.location.reload();
}