document.getElementById('lastModified').innerHTML = document.lastModified;
const options = { year: "numeric" };
document.querySelector('#currentYear').textContent = new Date().toLocaleDateString('de-DE', options);

document.getElementById('datetimeStamp').innerHTML = document.lastModified;