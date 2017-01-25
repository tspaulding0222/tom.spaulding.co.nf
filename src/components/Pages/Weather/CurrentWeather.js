var React = require('react');
var PropTypes = React.PropTypes;
var Common = require('../../../libs/Common');
var OpenWeatherIconMap = require('../../../Utils/OpenWeatherIconMap');

var CurrentWeather = React.createClass({
    propTypes: {
        icon: PropTypes.string.isRequired,
        currentTemp: PropTypes.string,
        weatherDescription: PropTypes.string
    },
    getInitialState: function(){
        return {
            icon: this.props.icon
        }
    },
    getWeatherIcon: function(){
        var iconId = "wi-owm-" + this.state.icon;

        for(var i = 0; i < OpenWeatherIconMap.codes.length; i++){
            if(OpenWeatherIconMap.codes[i].code == iconId){
                this.setState({
                    icon: OpenWeatherIconMap.codes[i].desc
                });
            }
        }
    },
    componentDidMount: function(){
        Common.pageFadeIn(document.querySelector(".currentWeatherComponent"));
        this.getWeatherIcon();
    },
    render: function () {
        return (
            <div className="currentWeatherComponent" style={styles.container}>
                <div></div>
                <i style={styles.icon} className={"wi " + this.state.icon}/>
                <div>
                    <h4 style={styles.weatherDesc}>{this.props.weatherDescription}</h4>
                </div>
                <div>
                    <h1 style={styles.temperature}>{this.props.currentTemp}</h1>
                </div>
            </div>
        )
    }
});

module.exports = CurrentWeather;

var styles ={
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        opacity: '0'
    },
    icon: {
        fontSize: '10em',
        marginBottom: '5px',
        color: '#1761A0'
    },
    weatherDesc:{
        fontWeight: 'bold',
        fontSize: '2em',
        color: "#1761A0",
        margin: '0'
    },
    temperature: {
        fontWeight: 'bold',
        fontSize: '5em',
        color: "#1761A0",
        margin: '0'
    }
};