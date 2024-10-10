
//"https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"


const getRum = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=rum";

    try {
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const showRum = async () => {
    const rum = await getRum();
    drinks.forEach((drinks) => {
        document.getElementById("coctails").append(getRumSection(drinks));
    });
}

const getRumSection = (drinks) => {
    const RumSection = document.createElement("section");
    
    const h3 = document.createElement("h3");
    h3.innerHTML = drinks.rum.name;
    section.append(h3);




    return section;
}


showRum();

