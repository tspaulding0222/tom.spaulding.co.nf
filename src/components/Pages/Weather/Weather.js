var React = require('react');
var openWeatherHelpers = require('../../../Utils/openWeatherHelpers');
var CurrentWeather = require('./CurrentWeather');
var Common = require('../../../libs/Common');

var Weather = React.createClass({
    openWeatherApiEndPoint: "api.openweathermap.org",
    getInitialState: function () {
        return {
            lat: 1,
            long: 1,
            showLoader: true,
            icon: '',
            currentTemp: '',
            weatherDesc: ''
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
                showLoader: false,
                icon: results.weather[0].id + '',
                currentTemp: Math.round(results.main.temp) + '',
                weatherDesc: results.weather[0].description
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
            navigator.geolocation.getCurrentPosition(function (position) {
                this.geoLocationSuccess(position);
                callback(position.coords.latitude, position.coords.longitude);
            }.bind(this), this.geoLocationError, {});
        }
        else {
            alert("Geolocation is not supported on your browser");
        }
    },
    componentDidMount: function () {
        Common.pageFadeIn(document.querySelector(".weatherPage"));
        this.getGeolocation(this.getCurrentWeatherData);
    },
    render: function () {
        var tempLoader = <div className="loader">Loading...</div>;

        var weatherCopy =
            <div style={styles.weatherCopy}>
                <CurrentWeather
                    icon={this.state.icon}
                    currentTemp={this.state.currentTemp}
                    weatherDescription={this.state.weatherDesc}/>
            </div>;

        if (this.state.showLoader == false) {
            Common.componentFadeOut(document.querySelector(".loader"), function(){
                tempLoader = '';
            });
        }
        else {
            weatherCopy = '';
        }


        return (
            <div style={styles.weather} className="weather container weatherPage">
                {tempLoader}
                {weatherCopy}
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
        minHeight: '83vh',
        opacity: '0'
    },
    weatherCopy: {
        position: 'absolute'
    }
};