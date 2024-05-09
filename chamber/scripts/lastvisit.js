const visitsGreeting = document.querySelector(".visit-greeting");

const today = Date.now();

let lastVisit = Number(window.localStorage.getItem("lastVisitDate-ls")) || 0;

if (lastVisit == 0) {
    visitsGreeting.textContent = `This is your first visit. Welcome!`;
    localStorage.setItem("lastVisitDate-ls", today);
}

else if ((today - lastVisit) / 84600000 < 1) {
    visitsGreeting.textContent = `Welcome back so soon!`;
    localStorage.setItem("lastVisitDate-ls", today);
}

else if (((today - lastVisit)/84600000) > 1) {
    visitsGreeting.textContent = `You last visited ${(today - lastVisit) / 84600000} days ago`;
    localStorage.setItem("lastVisitDate-ls", today);
}
