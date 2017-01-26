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
            weatherDesc: '',
            forecastIcons: ['', '', '', '', ''],
            forecastDates: ['', '', '', '', ''],
            forecastDays: ['', '', '', '', ''],
            forecastDesc: ['', '', '', '', ''],
            forecastWindSpeed: ['', '', '', '', ''],
            forecastMaxMinTemp: ['', '', '', '', ''],
            forecastHumidity: ['', '', '', '', '']
        }
    },
    getForecastIconsFromWeatherData: function (forecastList) {
        var icons = [];
        for (var i = 1; i < 6; i++) {
            icons.push(forecastList[i].weather[0].id + '');
        }

        return icons;
    },
    getForecastTimestamps: function (forecastList) {
        var timestamps = [];
        for (var i = 1; i < 6; i++) {
            timestamps.push(this.convertTimeStampToDate(forecastList[i].dt));
        }

        return timestamps;
    },
    convertTimeStampToDate: function (timestamp) {
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var date = new Date(timestamp * 1000);
        var month = date.getMonth();
        var date = date.getDate();

        return months[month] + ' ' + date
    },
    getForecastDays: function (forecastList) {
        var days = [];

        for (var i = 1; i < 6; i++) {
            days.push(this.convertTimeStampToDay(forecastList[i].dt));
        }

        return days;

    },
    convertTimeStampToDay: function (timestamp) {
        var days = ["Sunday", "Monday", "Tuesday", "Wedensday", "Thursday", "Friday", "Saturday"];

        var date = new Date(timestamp * 1000);

        return days[date.getDay()];
    },
    getForecastDescriptions: function (forecastList) {
        var descs = [];

        for (var i = 1; i < 6; i++) {
            descs.push(forecastList[i].weather[0].description);
        }

        return descs;
    },
    getForecastWindData: function (forecastList) {
        var wind = [];

        for (var i = 1; i < 6; i++) {
            wind.push(forecastList[i].speed + ' mph');
        }

        return wind;
    },
    getForecastMinMaxTemp: function (forecastList) {
        var maxMinTemp = [];

        for (var i = 1; i < 6; i++) {
            var maxMinString = forecastList[i].temp.min + '/' + forecastList[i].temp.max;
            maxMinTemp.push(maxMinString);
        }

        return maxMinTemp;
    },
    getForecastHumidity: function (forecastList) {
        var humid = [];

        for (var i = 0; i < 6; i++) {
            humid.push(forecastList[i].humidity + '');
        }

        return humid;
    },
    getWeatherData: function (lat, lon) {
        openWeatherHelpers.getAllWeatherData(lat, lon).then(function (results) {
            console.log("Got Weather Data");
            console.log(results);

            var forecastList = results.forecast.list;

            this.setState({
                showLoader: false,
                icon: results.current.weather[0].id + '',
                currentTemp: Math.round(results.current.main.temp) + '',
                weatherDesc: results.current.weather[0].description,
                forecastIcons: this.getForecastIconsFromWeatherData(forecastList),
                forecastDates: this.getForecastTimestamps(forecastList),
                forecastDays: this.getForecastDays(forecastList),
                forecastDesc: this.getForecastDescriptions(forecastList),
                forecastWindSpeed: this.getForecastWindData(forecastList),
                forecastMaxMinTemp: this.getForecastMinMaxTemp(forecastList),
                forecastHumidity: this.getForecastHumidity(forecastList)
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

        var fiveDayForecasts = [];
        for(var i=0; i<5; i++){
            fiveDayForecasts.push(
                <FiveDayForecast
                    key={i}
                    icon={this.state.forecastIcons[i]}
                    date={this.state.forecastDates[i]}
                    day={this.state.forecastDays[i]}
                    description={this.state.forecastDesc[i]}
                    wind={this.state.forecastWindSpeed[i]}
                    maxMinTemp={this.state.forecastMaxMinTemp[i]}
                    humidity={this.state.forecastHumidity[i]}/>
            );
        }

        var weatherCopy =
            <div style={styles.weatherCopy}>
                <CurrentWeather
                    icon={this.state.icon}
                    currentTemp={this.state.currentTemp}
                    weatherDescription={this.state.weatherDesc}/>
                {fiveDayForecasts}
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