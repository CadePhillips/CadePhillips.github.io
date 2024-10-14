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

        const ul = document.createElement("ul");
        section.append(ul);

        player.position.forEach((position)=>{
            const li = document.createElement("li");
            li.innerHTML = position;
            ul.append(li);
        });

        const yearP = document.createElement("p");
        yearP.innerHTML = player.year;
        yearP.append(p);

        const hometownP = document.createElement("p");
        hometownP.innerHTML = player.hometown;
        hometownP.append(p);
    
        const prevP = document.createElement("p");
        prevP.innerHTML = player.previous-school;
        numberP.append(p);

        const heightP = document.createElement("p");
        heightP.innerHTML = player.height;
        heightP.append(p);

        const weightP = document.createElement("p");
        weightP.innerHTML = player.weight;
        weightP.append(p);

        const batsP = document.createElement("p");
        batsP.innerHTML = player.bats;
        batsP.append(p);

        const throwsP = document.createElement("p");
        throwsP.innerHTML = player.throws;
        throwsP.append(p);
    });
    
}

showPlayers();