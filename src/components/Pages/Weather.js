var React = require('react');

var Weather = React.createClass({
    getInitialState: function(){
        return {
            lat: 1,
            long: 1,
            showLoader: true
        }
    },
    geoLocationSuccess: function(position){
        this.setState({
            lat: position.coords.latitude,
            long: position.coords.longitude,
            showLoader: false
        });
    },
    geoLocationError: function(error){
        switch(error.code) {
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
    getGeolocation: function(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.geoLocationSuccess, this.geoLocationError, {});
        }
        else{
            alert("Geolocation is not supported on your browser");
        }
    },
    componentDidMount: function(){
        this.getGeolocation();
    },
    render: function(){
        var loader = <div className="loader">Loading...</div>;
        if(this.state.showLoader == false){
            var loader = '';
        }

        return(
            <div style={styles.weather} className="weather container">
                {loader}
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
    }
};