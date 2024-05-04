const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const header = document.querySelector("header");
const footer = document.querySelector("footer")

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("⚫")) {
        body.style.background = "#000";
        body.style.color = "#fff";
        header.style.background = "#000";
        footer.style.background = "#000"
        modeButton.textContent = "⚪";
    } else {
        body.style.background = "#eee";
        body.style.color = "#000";
        header.style.background = "#bff3e9";
        footer.style.background = "#bff3e9";
        modeButton.textContent = "⚫";
    }
});