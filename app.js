//LS object
const ls = new LS();
//init city data
const initCity = ls.getCity()

// Weather Object
const weather = new Weather(initCity);

// UI object
const ui = new UI();

// events
const form = document.querySelector('#change-city');
console.log(form)
form.addEventListener('submit', changeWeather)

// change weather
function changeWeather(event) {
    const city = document.querySelector('#city-name').value;
    weather.changeCity(city);
    ls.setCity(city)
    getWeather()
    document.querySelector('#city-name').value = ''
    event.preventDefault()
}

// get city weather
function getWeather() {
    weather.getWeather()
        //if the weather gives the data then ..
        .then(data => {
            // ..
            console.log(data)
            ui.drawWeather(data)
        })
        // if no data, present it in console
        .catch(error => console.log(error))
}

getWeather();