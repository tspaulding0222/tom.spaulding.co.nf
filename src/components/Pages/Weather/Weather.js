var React = require('react');
var openWeatherHelpers = require('../../../Utils/openWeatherHelpers');

var Weather = React.createClass({
    openWeatherApiEndPoint: "api.openweathermap.org",
    getInitialState: function () {
        return {
            lat: 1,
            long: 1,
            showLoader: true
        }
    },
    geoLocationSuccess: function (position) {
        this.setState({
            lat: position.coords.latitude,
            long: position.coords.longitude
        });

        console.log("Got Position");
        console.log(position);
    },
    getCurrentWeatherData: function (lat, lon) {
        openWeatherHelpers.getCurrentWeatherData(lat, lon).then(function (results) {
            console.log("Got weather");
            console.log(results);

            this.setState({
                showLoader: false
            });
        }.bind(this));
    },
    geoLocationError: function (error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                alert("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                alert("The request to get user location timed out.");
                break;
            default:
                alert("An unknown error occurred.");
                break;
        }
    },
    getGeolocation: function (callback) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position){
                this.geoLocationSuccess(position);
                callback(position.coords.latitude, position.coords.longitude);
            }.bind(this), this.geoLocationError, {});
        }
        else {
            alert("Geolocation is not supported on your browser");
        }
    },
    componentDidMount: function () {
        this.getGeolocation(this.getCurrentWeatherData);
    },
    render: function () {
        var loader = <div className="loader">Loading...</div>;
        if (this.state.showLoader == false) {
            var loader = '';
        }

        return (
            <div style={styles.weather} className="weather container">
                {loader}
                <div style={styles.weatherCopy}>
                    Behind Loader
                </div>
            </div>
        )
    }
});

module.exports = Weather;

var styles = {
    weather: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '83vh'
    },
    weatherCopy:{
        position: 'absolute'
    }
};