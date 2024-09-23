const navHidden = document.getElementById("toggle-nav1");
navHidden.onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
    document.getElementById("toggle-nav2").classList.toggle("hidden-small");
    document.getElementById("toggle-nav1").classList.toggle("hidden-small");
}

const navHidden2 = document.getElementById("toggle-nav2");
navHidden2.onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
    document.getElementById("toggle-nav2").classList.toggle("hidden-small");
    document.getElementById("toggle-nav1").classList.toggle("hidden-small");
}


const sec1 = document.getElementById("section1");
sec1.onclick = (event) => {
    event.preventDefault();
    document.getElementById("content1").classList.toggle("hidden1");
    document.getElementById("content2").classList.toggle("hidden2");
    console.log("clicked 1");
}

const sec2 = document.getElementById("section2");
sec2.onclick = (event) => {
    event.preventDefault();
    document.getElementById("content1").classList.toggle("hidden2");
    document.getElementById("content2").classList.toggle("hidden1");
    console.log("clicked 2");
}


document.getElementById("slider").onchange = (event) => {
    document.querySelector(":root").style.setProperty("--r-value", event.target.value);
    const color = event.target.value;
    const messageP = document.getElementById("message");
    if(color > 150) {
        messageP.innerHTML = "Bright red";
    }
    else if(color < 80) {
        messageP.innerHTML = "Dark Red";
    }
    else {
        messageP.innerHTML = "Red";
    }
};


function showImage(size) {
    const image = document.getElementById("pic-chosen");
    let imageSize;
    if(size == "small") {
        imageSize = '100/100';
    }
    else if(size == "medium") {
        imageSize = '200/200';
    }
    else if(size == "large") {
        imageSize = '300/300';
    }
    image.src = `https://picsum.photos/${imageSize}`;
    image.style.display = "block";
}


/*
document.querySelector("button").onclick = (event) => {
    if (event.target.innerHTML == "Small") {
        document.getElementById("size1").classList.toggle("hidden");
        document.getElementById("size2").classList.add("hidden");
        document.getElementById("size3").classList.add("hidden");
    }
    else if (event.target.innerHTML == "Medium") {
        document.getElementById("size1").classList.add("hidden");
        document.getElementById("size2").classList.toggle("hidden");
        document.getElementById("size3").classList.add("hidden");
    }
    else if (event.target.innerHTML == "Large") {
        document.getElementById("size1").classList.add("hidden");
        document.getElementById("size2").classList.add("hidden");
        document.getElementById("size3").classList.toggle("hidden");
    }
}
*/



/*
const size = document.getElementById("content-pic");
size.onclick = () => {
    if(size == "size1") {
        document.getElementById("content-pic").classList.add("size1");
        console.log("hello");
    }
}
*/
