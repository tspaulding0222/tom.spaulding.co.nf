var axios = require('axios');

var helpers ={
    getCurrentWeatherData: function(lat, lon){
        return axios.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +
        "&units=imperial&appid=bfe710029219cef1e4d990a726f1f696").then(function(json){
            return json.data;
        }).catch(function(err){
                console.warn("Error in getting current weather");
                console.log(err);
        });
    },
    getFiveDayForecastData: function(lat, lon){
        return axios.get("http://api.openweathermap.org/data/2.5/forecast/daily?lat=" + lat +"&lon=" + lon + "&5&units=imperial&appid=bfe710029219cef1e4d990a726f1f696").then(function(json){
            return json.data;
        }).catch(function(err){
            console.warn("Error in getting five day forecast");
            console.log(err);
        });
    },
    getAllWeatherData: function(lat, lon){
        return axios.all([this.getCurrentWeatherData(lat, lon), this.getFiveDayForecastData(lat, lon)]).then(
            axios.spread(function(curWeahter, forecastData){
                return {current: curWeahter, forecast: forecastData}
            })
        )
    }
};

module.exports = helpers;