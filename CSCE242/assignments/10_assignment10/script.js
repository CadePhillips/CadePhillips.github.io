
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const modalContent = document.getElementById('details');

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

class Bird {
  constructor(title, size, lifespan, food, habitat, interestingFact, pic) {
    this.title = title;
    this.size = size;
    this.lifespan = lifespan;
    this.food = food;
    this.habitat = habitat;
    this.interestingFact = interestingFact;
    this.pic = pic;
  }

  get item() {
    const section = document.createElement("div");
    section.classList.add("bird");

    const h3 = document.createElement("h3");
    h3.innerHTML = this.title;
    section.append(h3);

    const birdImage = this.picture(this.pic);
    section.append(birdImage);

    section.onclick = () => {
      this.openModal();
    };

    return section;
  }

  picture(birdInfo) {
    const pic = document.createElement("img");
    pic.src = birdInfo;
    pic.style.cursor = "pointer";
    return pic;
  }

  paragraph(title, birdInfo, birdmod) {
    const p = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = title; 
    p.appendChild(strong);
    p.append(`${birdInfo}`); 
    p.classList.add(birdmod);
  
    return p;
  }
  

  openModal() {
    modalContent.innerHTML = "";

    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");

    detailsDiv.append(this.paragraph(" ", this.title, "bird-title"));
    detailsDiv.append(this.paragraph("Size: ", this.size, "bird-size"));
    detailsDiv.append(this.paragraph("Food: ", this.food, "bird-food"));
    detailsDiv.append(this.paragraph("Habitat: ", this.habitat, "bird-habitat"));
    detailsDiv.append(this.paragraph("Lifespan: ", this.lifespan, "bird-lifespan"));
    detailsDiv.append(this.paragraph("Interesting Fact: ", this.interestingFact, "bird-fact"));

    modalContent.append(detailsDiv);

    const birdImage = this.picture(this.pic);
    birdImage.style.width = "100%";
    modalContent.append(birdImage);

    modal.style.display = 'flex';
  }
}

const birds = [];
birds.push(new Bird("Hummingbird","3-6 inches", "3-4 years", "nectar", "grasslands and meadows", "Only birds that can fly backwards", "images/hummingbird.jpg"));
birds.push(new Bird("Blue Jay", "9-12 inches", "17-26 years", "nuts and seeds", "eastern and central US", "Frequently mimic the call of a hawk", "images/blue-jay.jpg"));
birds.push(new Bird("Cardinal", "1-2 inches", "3 years", "seeds and corn", "woodlands", "Has a MLB Baseball teamed named after them", "images/cardinal.jpg"));
birds.push(new Bird("Robin", "2-4 inches", "1-13 years", "worms", "North and Central America", "Eat a lot of fruit in fall and winter", "images/robin.jpg"));

birds.forEach((bird) => {
  document.getElementById("bird-list").append(bird.item);
});
