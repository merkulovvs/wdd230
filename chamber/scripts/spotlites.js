const spotlightUrl = "https://merkulovvs.github.io/wdd230/chamber/data/members.json";

const spotliteCard = document.getElementById('#spotlights');

const premiumMembers = [];

async function getMembersData() {
    try {
        const response = await fetch(spotlightUrl);
        if (response.ok) {
            const data = await response.json();
            selectPremiumMembers(data.members);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getMembersData();

premiumMembers = selectPremiumMembers(data);

function selectPremiumMembers(members) {
    const goldSilverMembers = members(member => member.membershipLevel === "Gold" || member.membershipLevel === "Silver");
    return goldSilverMembers;
}



const randomMember = getRandomMember(premiumMembers);

function getRandomMember(premiumMembers) {
    // Check if the array has at least one element

    const randomIndex = Math.floor(Math.random() * premiumMembers.length);

    const randomMember = premiumMembers[randomIndex];

    return randomMember;
}

const displayPremiumMember = (randomMember) => {
    randomMember.forEach((member) => {
        let companyName = document.createElement("h2");
        let companyAddress = document.createElement("p");
        let companyPhone = document.createElement('p');
        let companyWebsite = document.createElement("a");
        let companyLogo = document.createElement("img");

        companyName.textContent = `${member.companyname}`;
        companyAddress.textContent = `${member.address}`;
        companyWebsite.textContent = `${member.website}`;
        membership.textContent = `Membership level - ${member.membershiplevel}`;
        companyPhone.textContent = `${member.phone}`;
        companyLogo.setAttribute("src", member.companylogo);
        companyLogo.setAttribute("alt", `Company logo of ${member.companyname}`);
        companyLogo.setAttribute("loading", "lazy");

        spotliteCard.appendChild(companyLogo);
        spotliteCard.appendChild(companyName);
        spotliteCard.appendChild(companyAddress);
        spotliteCard.appendChild(companyPhone);
        spotliteCard.appendChild(companyWebsite);
    });
}





