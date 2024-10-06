/*
class Dog {
    constructor(title, breed, color, age, size, pic) {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("dog");
        section.classList.add("columns");
        const imageDiv = document.createElement("div");
        const image = document.createElement("img");
        const h1 = document.createElement("h1");
        h1.innerHTML = this.title;
        imageDiv.append(h1);
        image.src = this.pic;
        imageDiv.append(image);
        section.append(imageDiv);

        const dataDiv = document.createElement("div");
        const breed = document.createElement("h2");
        const color = document.createElement("h2");
        const age = document.createElement("h2");
        const size = document.createElement("h2");

        breed.innerHTML = "Breed: " + this.breed;
        color.innerHTML = "Color: " + this.color;
        age.innerHTML = "Age: " + this.age;
        size.innerHTML = "Size: " + this.size;

        dataDiv.append(breed, color, age, size);
        section.append(dataDiv);        


        return section;
    }
}

const dogs = [];
//  const myDog = new Dog("molly", "pit bull", "brown", 4, "xs", "images/molly.jpg");
dogs.push(new Dog("Coco", "Yorkie", "Black", 5, "small", "images/yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "medium", "images/golden-retriever.jpg"));
dogs.push(new Dog("Gerald", 'Pitbull', "White", 3, "large", "images/pitt-bull.jpg"));

dogs.forEach((dog) => {
    document.getElementById("dog-list").append(dog.item);
});
*/

class Dog {
    constructor(title, breed, color, age, size, pic){
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("dog");

        //create a header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        //create my columns
        const columnsDiv = document.createElement("div");
        columnsDiv.classList.add("columns");
        section.append(columnsDiv);
        const firstColumn = document.createElement("div");
        columnsDiv.append(firstColumn);
        const secondColumn = document.createElement("div");
        columnsDiv.append(secondColumn);

        //create image and add to first column
        firstColumn.append(this.picture(this.pic));

        //create info data and add to second column
        secondColumn.classList.add("hidden");
        secondColumn.append(this.paragraph("Breed", this.breed));
        secondColumn.append(this.paragraph("Color", this.color));
        secondColumn.append(this.paragraph("Age", this.age));
        secondColumn.append(this.paragraph("Size", this.size));

        const expCon = document.createElement("a");
        expCon.href="#";
        expCon.innerHTML = "&#x2964";
        h3.append(expCon);

        expCon.onclick = () => {
            secondColumn.classList.toggle("hidden");
        };

        return section;
    }

    picture(info){
        const pic = document.createElement("img");
        pic.src = "images/" + info;
        return pic;
    }

    paragraph(title, info){
        const p =document.createElement("p");
        p.innerHTML = `<strong>${title}</strong>: ${info}`;
        return p;
    }
}

const dogs = [];
//const myDoc = new Dog("molly", "pit bull", "brown", 4, "xs", "images/molly.jpg");
dogs.push(new Dog("Coco", "Morkie", "Black", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald","Pit Bull", "White", 3, "lg", "pitt-bull.jpg"));

dogs.forEach((dog)=>{
    document.getElementById("dog-list").append(dog.item);
});

/*  Homework for classes
    
*/