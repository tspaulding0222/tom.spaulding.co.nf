var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var PropTypes = React.PropTypes;
var Col = ReactBootstrap.Col;
var OpenWeatherIconMap = require('../../../Utils/OpenWeatherIconMap');

var FiveDayForecast = React.createClass({
    propTypes: {
        // icon: PropTypes.string.isRequired
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
        this.getWeatherIcon();
    },
    render: function () {
        return (
            <div style={styles.pageContainer}>
                <div style={styles.row}>
                    <Col xs={2}>
                        {/*<i style={styles.icon} className={"wi " + this.state.icon}/>*/}
                        icon
                    </Col>
                    <Col xs={4}>
                        <div>Day</div>
                        <div>Date</div>
                    </Col>
                    <Col xs={4}>
                        <div>Desc</div>
                        <div>Wind</div>
                    </Col>
                    <Col xs={2}>
                        <div>max/min temp</div>
                        <div>Humid</div>
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
        justifyContent: 'center'
    },
    row: {
        borderBottom: '1px solid #1761A0',
        width: '80%',
        minHeigh: '50px'
    },
    icon: {
        fontSize: '5em',
        color: '#1761A0'
    }
};