const url = "https://merkulovvs.github.io/wdd230/chamber/data/members.json";

const cards = document.querySelector("#cards");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let companyName = document.createElement("h2");
        let companyAddress = document.createElement("p");
        let companyPhone = document.createElement('p');
        let companyWebsite = document.createElement("a");    
        let companyLogo = document.createElement("img");    
        let membership = document.createElement('p');

        companyName.textContent = `${member.companyname}`;
        companyAddress.textContent = `${member.address}`;
        companyWebsite.textContent = `${member.website}`;
        membership.textContent = `Membership level - ${member.membershiplevel}`;
        companyPhone.textContent = `${member.phone}`;

        companyLogo.setAttribute("src", member.companylogo);
        companyLogo.setAttribute("alt", `Company logo of ${member.companyname}`);
        companyLogo.setAttribute("loading", "lazy");
        // companyLogo.setAttribute("width", "250");
        // companyLogo.setAttribute("height", "200");       

        card.appendChild(companyLogo);
        card.appendChild(companyName);
        card.appendChild(companyAddress);
        card.appendChild(companyPhone);
        card.appendChild(companyWebsite);        

        cards.appendChild(card);    
    });

}