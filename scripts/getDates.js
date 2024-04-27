document.getElementById('lastModified').innerHTML = document.lastModified;
const options = {year: "numeric"};
document.querySelector('#currentYear').textContent = new Date().toLocaleDateString('en-US',options);