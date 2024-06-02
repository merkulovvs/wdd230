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

        weekEntry.textContent = `${entry.week}: `;

        entry.links.forEach((link, index) => {

            //skip divider pipe " | " for the first link in an array
            if (index === 0) {
                let linkItem = document.createElement('a');
                linkItem.setAttribute('href', link.url);
                linkItem.textContent = `${link.title}`;

                weekEntry.appendChild(linkItem);
                // add a devider pipe " | " before all the rest of the links in an array
            } else {

                let linkItem = document.createElement('a');
                const divider = document.createTextNode(' | ');
                linkItem.setAttribute('href', link.url);
                linkItem.textContent = `${link.title}`;

                weekEntry.appendChild(divider);
                weekEntry.appendChild(linkItem);
            }
        });

        actvivities.appendChild(weekEntry);

    });
}