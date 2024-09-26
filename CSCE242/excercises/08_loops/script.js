/* When the hamburger is clicked, toggle between showing
and hiding the nav items */
//document.getElementById("toggle-nav")
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
  };

  /*
document.getElementById("btn-loop").onclick = () => {
    console.log("Hi");
    const p = document.getElementById("result");
    for(let i = 0; i < 10; i++) {
        p.innerHTML += i + 1 + " ";
    }
}
    */

document.getElementById("btn-loop").onclick = () => {
    const ul = document.getElementById("numbers");
    for(let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.innerHTML = i+1;
        ul.append(li);
        li.setAttribute("id", "li" + i);

        li.onclick = () => {
            console.log(`number ${i + 1}`);
        };
    }
}


document.getElementById("btn-go").onclick = () => {
    const start = parseInt(document.getElementById("num-start").value);
    const end = parseInt(document.getElementById("num-end").value);
    const ul = document.getElementById("num");

    if (end >= start){
        for(let i=start; i <= end; i++) {
            ul.append(createLi(i));
        }
    }
    else {
        for(let i=end; i >= start; i++) {
            ul.append(createLi(i));
        }
    }

}

const createLi = (num) => {
    const li = document.getElementById("li");
    li.innerHTML = num;
    li.setAttribute("id", "li" + num);

    li.onclick = () => {
        console.log(`Number: ${num}`);
    }
    return li;
}


let counter = 0;
let updateCount;

document.getElementById("btn-count").onclick = (e) => {
    const count = document.getElementById("count");

    if(e.target.innerHTML == "Start") {
        e.target.innerHTML = "Stop";
        updateCount = setInterval(() => {
            counter ++;
            count.innerHTML = counter;
        },1000);
    } else {
        e.target.innerHTML = "Start";
        clearInterval(updateCount);
    }
}


/* Learning arrays */
let toys = ["drum", "ball", "rope", "balloon", "tire"];

toys.forEach((toy) => {
    const p = document.createElement("p");
    p.innerHTML = toy
    document.getElementById("list").append(p);
});

/*
toys.forEach((toy, i) => {
    console.log(i + toy);
});
*/
/*
for(let i=0; i<toys.length; i++) {
    console.log(toys[i]);
}
*/

/* Santa's expenses */
let toyPrices = [];
toyPrices["barbie"] = 7.54;
toyPrices["doll house"] = 86.23;
toyPrices["slide"] = 34.28;
toyPrices["ken"] = 5.3;
toyPrices["bike"] = 7.4;

/* Associative Array */
const table = document.getElementById("list-prices");

for(let toy in toyPrices) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = toy;
    tr.append(createTd(toy));
    tr.append(createTd(toyPrices(toy)));
}

const createTd = (data) => {
    const td = document.createElement(td);
    td.innerHTML = data;
    return td;
};