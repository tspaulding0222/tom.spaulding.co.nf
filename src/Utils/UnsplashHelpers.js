var axios = require('axios');

var UnsplashHelpers = {
    getUnsplashList: function(){
        return axios.get("https://unsplash.it/list").then(function(response){
            return response.data;
        }).catch(function(error){
            console.warn("Error in getting Unsplash Image List");
            console.log(error);
        });
    }
};

module.exports = UnsplashHelpers;