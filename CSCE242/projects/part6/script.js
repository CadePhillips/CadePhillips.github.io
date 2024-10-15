const navHidden = document.getElementById("toggle-nav");
navHidden.onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
}

const getPlayers = async() => {
    const url = "https://cadephillips.github.io/CSCE242/projects/part6/player-info.json";

    try {
        return (await fetch(url)).json();
    } catch(error) {
        console.log(error);
    }
}

const showPlayers = async() => {
    const players = await getPlayers();
    players.forEach((player)=>{

        console.log(player.image);
        const section = document.createElement("section");
        section.classList.add("player");
        document.getElementById("roster").append(section);
        
        const img = document.createElement("img");
        img.src = player.image;
        section.append(img);

        const nameP = document.createElement("p");
        nameP.innerHTML = player.name;
        section.append(nameP);

        const numberP = document.createElement("p");
        numberP.innerHTML = player.number;
        section.append(numberP);

        const ul = document.createElement("ul");
        section.append(ul);

        console.log(player.name);
        player.postion.forEach((position)=>{
            const li = document.createElement("li");
            li.innerHTML = position;
            ul.append(li);
        });

        const yearP = document.createElement("p");
        yearP.innerHTML = player.year;
        section.append(yearP);

        const hometownP = document.createElement("p");
        hometownP.innerHTML = player.hometown;
        section.append(hometownP);
    
        const prevP = document.createElement("p");
        prevP.innerHTML = player.previous-school;
        section.append(prevP);

        const heightP = document.createElement("p");
        heightP.innerHTML = player.height;
        section.append(heightP);

        const weightP = document.createElement("p");
        weightP.innerHTML = player.weight;
        section.append(weightP);

        const batsP = document.createElement("p");
        batsP.innerHTML = player.bats;
        section.append(batsP);

        const throwsP = document.createElement("p");
        throwsP.innerHTML = player.throws;
        section.append(throwsP);
    });
    
}

showPlayers();