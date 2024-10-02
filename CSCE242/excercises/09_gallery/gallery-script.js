/*
    Every one second go through and move the class of highlighted through the gallery
*/

/*
setInterval(() => {
    let currentSection = document.querySelector(".items section.highlighted");

    //Highlight the first item
    if(currentSection == null) {
        document.querySelector(".items section").classList.add("highlighted");
        return;
    }



    let nextSection = currentSection.nextElementSibling;

    //Hit the end
    if(nextSection == null) {
        nextSection = document.querySelector(".items section");
    }

    currentSection.classList.remove("highlighted");
    nextSection.classList.add("highlighted");

}, 1000);
*/


//  Alternate solution
let count = 1;

setInterval(() => {
    //  Remove highlighted from every section
    document.querySelectorAll(".items section").forEach((section)=> {
        section.classList.remove("highlighted");
    });

    //  Add highlighting to the section with the current count
    document.querySelector(`.items section:nth-child(${count})`).classList.add("highlighted");

    count++;

    //  If you reached the end of the list of sections
    if(count > document.querySelectorAll(".items section").length) {
        count = 1;
    }
}, 1000);