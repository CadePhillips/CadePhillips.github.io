const doStuff = () => {
    alert("Hello World");
};

//constant - not going to change - default
const myButton = document.getElementById("btn-click");
//myButton.onclick = doStuff;

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello everyone";
    document.getElementById("stuff").classList.add("special");
};

//  add a second button, called say goodbye
//  when clicked change the text to say goodbye everyone, and remove the speical styles
//  Make a button that hides a column
const secButton = document.getElementById("2btn-click");
secButton.onclick = () => {
    document.getElementById("message").innerHTML = "Goodbye everyone";
    document.getElementById("stuff").classList.remove("special");
};

const thirdButton = document.getElementById("3btn-click");
thirdButton.onclick = () => {
    document.getElementById("sec3").classList.add("remove");
};

/*
const fourthButton = document.getElementById("4btn-click");
fourthButton.onclick = () => {
    document.getElementById("sec2").classList.style("animate");
};
*/

//  Showing data from an input field
/*
document.getElementById("txt-first-name").onkeyup = () => {
    //console.log(event.target);
    const textBox = document.getElementById("txt-first-name");
    document.getElementById("result").innerHTML = textBox.value;
    console.log(textBox.value);
}
*/

document.getElementById("txt-first-name").onkeyup = (event) => {
    //console.log(event.target);
    document.getElementById("result").innerHTML = event.target.value;
}
