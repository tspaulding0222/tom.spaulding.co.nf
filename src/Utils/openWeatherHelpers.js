var axios = require('axios');

var helpers ={
    getCurrentWeatherData: function(lat, lon){
        return axios.get("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +
        "&units=imperial&appid=7ae464f32ccf89ffbee08427280a8fe0").then(function(json){
            return json.data;
        }).catch(function(err){
                console.warn("Error in getting weather");
                console.log(err);
        });
    }
};

module.exports = helpers;