var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var PropTypes = React.PropTypes;
var Col = ReactBootstrap.Col;
var Common = require('../../../libs/Common');
var OpenWeatherIconMap = require('../../../Utils/OpenWeatherIconMap');

var FiveDayForecast = React.createClass({
    propTypes: {
        icon: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        day: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        wind: PropTypes.string.isRequired,
        maxMinTemp: PropTypes.string.isRequired,
        humidity: PropTypes.string.isRequired
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
        var rows = Array.prototype.slice.call(document.querySelectorAll(".fiveDayForecastComponent"));
        Common.pageFadeIn(rows);
        this.getWeatherIcon();
    },
    render: function () {
        return (
            <div className="fiveDayForecastComponent" style={styles.pageContainer}>
                <div style={styles.row}>
                    <Col xs={2}>
                        <i style={styles.icon} className={"wi " + this.state.icon}/>
                    </Col>
                    <Col xs={4}>
                        <div>{this.props.day}</div>
                        <div>{this.props.date}</div>
                    </Col>
                    <Col xs={4}>
                        <div>{this.props.description}</div>
                        <div>{this.props.wind}</div>
                    </Col>
                    <Col xs={2}>
                        <div>{this.props.maxMinTemp}</div>
                        <div>{this.props.humidity}</div>
                    </Col>
                </div>
            </div>
        )
    }
});

module.exports = FiveDayForecast;

var styles = {
    pageContainer:{
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        opacity: '0'
    },
    row: {
        borderBottom: '1px solid #1761A0',
        width: '80%',
        minHeigh: '50px'
    },
    icon: {
        fontSize: '2em',
        color: '#1761A0'
    }
};