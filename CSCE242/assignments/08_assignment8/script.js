document.getElementById("btn-draw").onclick = () => {
    const numStar = document.getElementById("stars").value;
    const error = document.getElementById("error-star");
    error.innerHTML = "";
    if (isNaN(numStar) || numStar <= 0) {
        error.innerHTML = "* Invalid Input";
        return;
    }

    

    
}