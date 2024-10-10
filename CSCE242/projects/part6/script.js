const navHidden = document.getElementById("toggle-nav");
navHidden.onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
}

const url = "https://cadephillips.github.io/CSCE242/projects/part6/player-info.json";
const getPlayer = async() => {
    try {
        return (await fetch(url));
    } catch(error) {
        console.log(error);
    }
}

const showPlayer = async() => {
    const players = await getPlayer();

    players.forEach((player) => {
        const section = document.createElement("section");
        section.classList.add("player");
        document.getElementById("roster").append(section);
        
        const img = document.createElement("img");
        img.src = player.image;
        section.append(img);

        const nameP = document.createElement("p");
        nameP.innerHTML = player.name;
        nameP.append(p)
    });
}

showPlayer();