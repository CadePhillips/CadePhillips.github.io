var images = [
    "images/birthday.jpg",
    "images/clown.jpg",
    "images/rain.jpg",
    "images/read.jpg",
    "images/shovel.jpg",
    "images/work.jpg"
];

var titles = [
    "Birthday",
    "Clown",
    "Rain",
    "Reading",
    "Shovel",
    "Work"
];

var comments = [
    "Happy Birthday",
    "A clown showed up to the party",
    "Oh no it's raining",
    "Reading a good book",
    "Digging a hole",
    "Working hard"
];

const showImages = () => {
    const title = document.getElementById("title");
    const comment = document.getElementById("comment");
    const image = document.getElementById("image");
    
    title.innerHTML = "";
    comment.innerHTML = "";
    image.innerHTML = "";

    for(let i in images) {
        const element = document.createElement("img");
        element.src = images[i];
        element.alt = "Image";
        element.onclick = () => {
            title.innerHTML = titles[i];
            comment.innerHTML = comments[i];
        }
        image.appendChild(element);
    }
}

window.onload = () => {
    showImages();
}