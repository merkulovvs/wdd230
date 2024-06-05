const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const weatherDescr = document.querySelector('#weather-description');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=50.23&lon=8.62&appid=6a0c3bacd0b218a211c8b23253e28aa9&units=metric';

async function getWeather() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getWeather();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let descript = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', descript);
    weatherDescr.textContent = `${descript}`;
}

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=50.23&lon=8.62&appid=ac6e0150a6824018c05f41ce6769e29d&units=metric';

const forecastCard = document.querySelector('.forecast');

async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data.list);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

    // try {
    // const response = await fetch(forecastUrl);
    // if (response.ok) {
    // const data = await response.json();
    // displayForecast(data.list);
    // } else {
    // throw Error(await response.text());
    // }
    // } catch (error) {
    //   console.log(error);  
    // }
}

getForecast();

const displayForecast = (list) => {

    // reduce 3 hours (8 times a day) forecast to 24 hours (1 time a day) forecast
    const fiveDaysOnce = list.filter((_item,index) => index % 8 === 0);
    
    //reduce number of days to 3
    const threeDaysForecast = fiveDaysOnce.slice(0,3);

    threeDaysForecast.forEach((day) => {

        let dayCard = document.createElement('section');
        let dayTxt = document.createElement('h2');
        let date = new Date(day.dt_txt);
        let dayName = date.toLocaleDateString("en-EU", { weekday: "long" })
        let weatherIcon = document.createElement('img');
        let temperature = document.createElement('p');


        dayTxt.textContent = `${dayName}`;
        temperature.textContent = `${day.main.temp}\u00B0C`;

        weatherIcon.setAttribute('src', `https://openweathermap.org/img/w/${day.weather[0].icon}.png`);
        weatherIcon.setAttribute('alt', `${day.weather.main}`);

        dayCard.appendChild(dayTxt);
        dayCard.appendChild(weatherIcon);
        dayCard.appendChild(temperature);

        forecastCard.appendChild(dayCard);

    });
}