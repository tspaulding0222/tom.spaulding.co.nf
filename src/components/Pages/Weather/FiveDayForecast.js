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
        humidity: PropTypes.string.isRequired,
        addBorder: PropTypes.bool.isRequired
    },
    getInitialState: function () {
        return {
            icon: this.props.icon
        }
    },
    getWeatherIcon: function () {
        var iconId = "wi-owm-" + this.state.icon;

        for (var i = 0; i < OpenWeatherIconMap.codes.length; i++) {
            if (OpenWeatherIconMap.codes[i].code == iconId) {
                this.setState({
                    icon: OpenWeatherIconMap.codes[i].desc
                });
            }
        }
    },
    componentDidMount: function () {
        var rows = Array.prototype.slice.call(document.querySelectorAll(".fiveDayForecastComponent"));
        Common.pageFadeIn(rows);
        this.getWeatherIcon();
    },
    render: function () {
        var rowStyle = styles.row;
        if (!this.props.addBorder) {
            rowStyle = styles.rowNoBorder
        }

        return (
            <div className="fiveDayForecastComponent" style={styles.pageContainer}>
                <div style={rowStyle}>
                    <Col xs={2} sm={2}>
                        <i style={styles.icon} className={"wi " + this.state.icon}/>
                    </Col>
                    <Col xs={3} sm={4}>
                        <div style={styles.date}>{this.props.date}</div>
                        <div style={styles.day}>{this.props.day}</div>
                    </Col>
                    <Col xs={3} sm={4}>
                        <div style={styles.desc}>{this.props.description}</div>
                        <div style={styles.wind}>{this.props.wind}</div>
                    </Col>
                    <Col xs={3} sm={2}>
                        <div style={styles.maxMinTemp}>{this.props.maxMinTemp}</div>
                        <div style={styles.humidity}>
                            <img style={styles.humidIcon} src={require("file-loader!../../../img/humidIndicator.png")}/>
                            <p style={styles.humidCopy}>{this.props.humidity}</p>
                        </div>
                    </Col>
                </div>
            </div>
        )
    }
});

module.exports = FiveDayForecast;

var styles = {
    pageContainer: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        opacity: '0',
        color: '#1761A0'
    },
    row: {
        borderBottom: '1px solid #1761A0',
        width: '80%',
        minHeigh: '50px',
        marginBottom: '5px'
    },
    rowNoBorder: {
        border: 'none',
        width: '80%',
        minHeigh: '50px',
        marginBottom: '5px'
    },
    icon: {
        fontSize: '2em',
        color: '#1761A0',
        marginTop: '7px'
    },
    date: {
        marginBottom: '5px',
        color: 'black',
        fontWeight: 'bold'
    },
    day: {
        marginBottom: '5px'
    },
    desc: {
        marginBottom: '5px'
    },
    wind: {
        marginBottom: '5px',
        color: 'black',
        fontWeight: 'bold'
    },
    maxMinTemp: {
        marginBottom: '5px'
    },
    humidity: {
        marginBottom: '5px',
        color: 'black',
        fontWeight: 'bold'
    },
    humidIcon:{
        width: '15px',
        height: 'auto'
    },
    humidCopy:{
        display: 'inline-block',
        marginLeft: '2px'
    }
};