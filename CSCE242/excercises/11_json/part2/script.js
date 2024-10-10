/*
const getBreweries = async() => {
    const url = "https://api.openbrewerydb.org/breweries";
    
    try {
        const response = await fetch(url);
        return response.json();
    } catch(error) {
        console.log(error);
    }
};

const showBreweries = async() => {
    const breweries = await getBreweries();
    
    breweries.forEach((brewery) => {
        document.getElementById("breweries-section").append(getBrewerySection(brewery));
    });
};

const getBrewerySection = (brewery) => {
    const section = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.innerHTML = brewery.name;
    section.append(h3);

    

    return section;
}


//  Show all shoes when the paid loads
showBreweries();
*/

const getBreweries = async() => {
    try {
        return (await fetch("https://api.openbrewerydb.org/breweries")).json();
    } catch(error) {
        console.log(error);
    }
}

const showBreweries = async() => {
    const breweries = await getBreweries();

    breweries.forEach((brewery)=> {
        const section = document.createElement("section");
        section.classList.add("brewery");
        document.getElementById("breweries-section").append(section);

        const a = document.createElement("a");
        a.href = brewery.website_url;
        section.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = brewery.name;
        a.append(h3);

        const p = document.createElement("p");
        p.innerHTML = brewery.brewery_type + " brewery";
        section.append(p);

    });
}




showBreweries();