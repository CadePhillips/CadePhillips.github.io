/* When the hamburget is clicked, toggle between showing
and hiding the nav items */

const navHidden = document.getElementById("toggle-nav");
navHidden.onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
}

/*
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};
*/
// also works

/* Don't go to links destination when clicked */
document.getElementById("click-link").onclick = (event) => {
    event.preventDefault(); // Don't go to the links destination
    console.log ("you clicked a link");
};

document.getElementById("txt-color").onchange = (e) => {
    console.log(e.target.value);
    document.getElementById("ball").style.setProperty("background-color", e.target.value);
    //document.querySelector(":root").style.setProperty("--ball-color", e.target.value);
    //  also works
}

//  Move the ball down when the button is clicked
let position = 0;
document.getElementById("move-down").onclick = () => {
    position++;
    console.log(position);
    document.getElementById("ball").style.setProperty("top", position + "px");
}

/* Show color message */
document.getElementById("btn-show-color").onclick = () => {
    const color = document.getElementById("txt-enter-color").value.toLowerCase().trim();
    
    const messageP = document.getElementById("color-message");
    let mood = "";

    if(color == "red"){
        mood = "angry";
    }
    else if(color == "blue") {
        mood = "moody";
    }
    else {
        mood = "undefined";
    }

    messageP.innerHTML = `You chose ${color} so you are ${mood}.`;
}


/* Donations */
/* Get the number 
    - if it is not a number or it is negative, show an error
    - Otherwise first show the percent out of 10000 towards goal
    - next show a visual representation with a box and a gradient
*/

document.getElementById("btn-donate").onclick = () => {
    const goal = 10000;
    const donation = document.getElementById("txt-donations").value;
    const error = document.getElementById("error-donation");
    error.innerHTML = "";

    if (isNaN(donation) || donation<0) {
        error.innerHTML = "*INVALID*";
        return;
    }
    const percentGoal = donation / goal * 100;
    console.log (percentGoal+"%");

    document.querySelector(":root").style.setProperty("--funds", percentGoal + "%");
}