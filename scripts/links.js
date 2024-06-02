const baseURL = "https://merkulovvs.github.io/wdd230/";

const linksURL = "https://merkulovvs.github.io/wdd230/data/links.json";

const actvivities = document.querySelector('#activity-list');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

getLinks();

const displayLinks = (weeks) => {
    weeks.forEach((entry) => {
        let weekEntry = document.createElement('li');
        let link = document.createElement('a');

        weekEntry.textContent = `${entry.week}: `;
        
        link.setAttribute('href', entry.week.url);
        link.textContent = `${entry.week.title}`;


        weekEntry.appendChild(link);
        actvivities.appendChild(weekEntry);
        

    });
}