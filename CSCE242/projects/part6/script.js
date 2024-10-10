const navHidden = document.getElementById("toggle-nav");
navHidden.onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
}

const getPlayers = async() => {
    const url = "https://cadephillips.github.io/CSCE242/projects/part6/player-info.json";

    try {
        return (await fetch(url));
    } catch(error) {
        console.log(error);
    }
}

const showPlayers = async() => {
    const players = await getPlayers();

    players.forEach((player)=>{
        const section = document.createElement("section");
        section.classList.add("player");
        document.getElementById("roster").append(section);
        
        const img = document.createElement("img");
        img.src = player.image;
        section.append(img);

        const nameP = document.createElement("p");
        nameP.innerHTML = player.name;
        nameP.append(p);

        const numberP = document.createElement("p");
        numberP.innerHTML = player.number;
        numberP.append(p);

        const numberP = document.createElement("p");
        numberP.innerHTML = player.number;
        numberP.append(p);

        const yearP = document.createElement("p");
        yearP.innerHTML = player.year;
        yearP.append(p);

        const hometownP = document.createElement("p");
        hometownP.innerHTML = player.hometown;
        hometownP.append(p);
    
    });
    
}

showPlayers();