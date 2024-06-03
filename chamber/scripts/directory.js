const url = "https://merkulovvs.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector("#cards");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayMembers(data.members);
}

getMembersData();

const displayProphets = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let companyAddress = document.createElement("p");
        let companyWebsite = document.createElement("a");
        let companyLogo = document.createElement("img");

        companyName.textContent = `${member.companyname}`;
        companyAddress.textContent = `${member.address}`;
        companyWebsite.textContent = `${member.website}`;

        companyLogo.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);    
    });

}