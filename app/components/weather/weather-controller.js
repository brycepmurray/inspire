function WeatherController() {
    var wc = this;
    var weatherService = new WeatherService();

    function getWeather() {
        weatherService.getWeather(weather => {
            console.log(weather);
            let farenheith = Math.floor(((weather.main.temp - 273) * 1.8) + 32)
            let tempLow = Math.floor(((weather.main.temp_min - 273) * 1.8) + 32)
            let tempHigh = Math.floor(((weather.main.temp_max - 273) * 1.8) + 32)
                //What can you do with this weather object?
            document.getElementById('weather').innerHTML = `
                <div class = "inner-card col-md-4">
                <h2>${farenheit}°</h2>
                <p>${weather.name}<p/>
                </div>
                <div class = "inner-card col-md-4">
                <img class="weather-icon" src="http://openweathermap.org/img/w/${weather.weather[0].icon}.png"></img>
                <p> low: ${ltempLow}°</p> <p> high: ${tempHigh}°</p>
                </div>
            `
        })
    }
    getWeather()
}