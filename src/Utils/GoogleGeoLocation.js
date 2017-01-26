var axios = require('axios');

var GoogleGeoLocatoin={
    tryGoogleApiLocation: function(){
        return axios.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBeSiHlBIUkXMFSvb3xQipm5pSmuN5Q-1w").then(function(response){
            console.log("trying google api");
            console.log(response);

            return response.data;
        }).catch(function(error){
            console.log("trying google api");
            console.log(error);
        });
    },
};

module.exports = GoogleGeoLocatoin;