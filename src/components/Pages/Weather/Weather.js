var React = require('react');
var openWeatherHelpers = require('../../../Utils/openWeatherHelpers');
var CurrentWeather = require('./CurrentWeather');
var Common = require('../../../libs/Common');
var FiveDayForecast = require('./FiveDayForecast');

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
    getWeatherData: function (lat, lon) {
        openWeatherHelpers.getAllWeatherData(lat, lon).then(function (results) {
            console.log("Got Weather Data");
            console.log(results);

            this.setState({
                showLoader: false,
                icon: results.current.weather[0].id + '',
                currentTemp: Math.round(results.current.main.temp) + '',
                weatherDesc: results.current.weather[0].description
            });
        }.bind(this));
    },
    geoLocationSuccess: function (position) {
        this.setState({
            lat: position.coords.latitude,
            long: position.coords.longitude
        });

        console.log("Got Position");
        console.log(position);
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
        this.getGeolocation(function (lat, lon) {
            this.getWeatherData(lat, lon)
        }.bind(this));
    },
    render: function () {
        var tempLoader = <div className="loader">Loading...</div>;

        var weatherCopy =
            <div style={styles.weatherCopy}>
                <CurrentWeather
                    icon={this.state.icon}
                    currentTemp={this.state.currentTemp}
                    weatherDescription={this.state.weatherDesc}/>
                <FiveDayForecast/>
            </div>;

        if (this.state.showLoader == false) {
            Common.componentFadeOut(document.querySelector(".loader"));
        }
        else {
            weatherCopy = '';
        }

        return (
            <div>
                <div style={styles.loaderContainer}>
                    {tempLoader}
                </div>
                <div style={styles.weather} className="weather container weatherPage">
                    {weatherCopy}
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
        minHeight: '83vh',
        opacity: '0'
    },
    loaderContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%'
    },
    weatherCopy: {
        width: '100%'
    }
};