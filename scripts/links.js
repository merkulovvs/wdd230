const baseURL = "https://merkulovvs.github.io/wdd230/";

const linksURL = "https://merkulovvs.github.io/wdd230/data/links.json";

const actvivities = document.querySelector('#activity-list');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((entry) => {
        let weekEntry = document.createElement('li');

        weekEntry.textContent = `${entry.week}`;

        actvivities.appendChild(weekEntry);

    });
}