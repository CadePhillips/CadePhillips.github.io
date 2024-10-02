

const box = document.getElementById("main-content");

document.getElementById("btn-draw").onclick = () => {
    
    

    const numStar = document.getElementById("star-input").value;
    const error = document.getElementById("error-star");
    error.innerHTML = "";
    if (isNaN(numStar) || numStar <= 0) {
        error.innerHTML = "* Invalid Input";
        return;
    }

    const ul = document.getElementById("num-stars");
    for (let i = 0; i < numStar; i++) {
        const li = document.createElement("li");
        li.classList.add("six-pointed-star");
        ul.append(li);
        li.setAttribute("id", "li" + 1);

        li.onclick = () => {
            console.log(`number ${i+1}`);
            const starNum = document.getElementById("star-number");
            starNum.innerHTML = `You chose star number ${i+1}`;
        }

    }

    
}

/*

const box = document.getElementById("main-content");
const input = document.getElementById("star-input");
const draw = document.getElementById("btn-draw");
const error = document.getElementById("error-star");
const message = document.getElementById("error");
draw.addEventListener("click", () => {
    const numStars = parseInt(input.value, 10);
    if(numStars <= 0 || isNaN(numStars)) {
        error.textContent = "Invalid";
        error.style.display = "block";
        return;
    }
    else {
        error.style.display = "none";
    }
    box.innerHTML = "";
    for(let i = 0; i < numStars; i++) {
        drawStar(i + 1);
    }
});
function drawStar(starNum) {
    const star = document.createElement("div");
    star.classList.add("six-pointed-star");
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    box.appendChild(star);
    star.addEventListener("click", () => {
        message.textContent = `star number ${}`;
        message.classList.add("visible");
    });
}
    */