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
        return axios.get("http://http://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon +
            "&units=imperial&appid=bfe710029219cef1e4d990a726f1f696").then(function(json){
            return json.data;
        }).catch(function(err){
            console.warn("Error in getting five day forecast");
            console.log(err);
        });
    }
};

module.exports = helpers;