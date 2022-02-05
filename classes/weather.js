class Weather {
    // with this the class can be used so that if we do Weather(Tartu) then a Weather object Tartu is created.
    constructor(city) {
        this.city = city;
        this.key = 'e187a92b0f0e7b0d085b55e9fbd90abd';
    }

    //function to fetch weather data
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`);
        //if the data exists, convert it into json
        const responseData = await response.json();
        //if the above function works, return me the data it gets
        return responseData;
    }

    changeCity(city) {
        this.city = city
    }
}