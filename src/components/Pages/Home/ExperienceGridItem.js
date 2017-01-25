var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
var PropTypes = React.PropTypes;

var ExperienceGridItem = React.createClass({
    propTypes:{
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
        timePeriod: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        buttonColor: PropTypes.string.isRequired
    },
    render: function(){
        return(
            <div style={styles.containerDiv}>
                <div style={styles.companyLogoContainer}>
                    <img style={styles.companyLogo} src={this.props.icon}/>
                </div>
                <div style={styles.companyTitle} className="companyLogo">
                    {this.props.title}
                </div>
                <div style={styles.bottomInfoContainer}>
                    <div style={styles.timeLineContainer}>
                        <img style={styles.timelineCalendarIcon} src={require('file-loader!../../../img/icon-calendar.png')} />
                        <p style={styles.timelineCopy}>{this.props.timePeriod}</p>
                    </div>
                    <h2 style={styles.jobTitle}>{this.props.job}</h2>
                    <h6 style={styles.jobDesc}>{this.props.desc}</h6>
                    <Button bsStyle="primary" style={styles.button}>About {this.props.title}</Button>
                </div>
            </div>
        );
    }
});

module.exports = ExperienceGridItem;

var styles = {
    containerDiv:{
        backgroundColor: "#565656",
        width: '100%',
        height: '600px',
        marginBottom: '30px',
        overflow: 'hidden'
    },
    companyTitle:{
        position: 'absolute',
        top: '15px',
        marginLeft: '15px',
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '5px',
        paddingBottom: '5px',
        backgroundColor: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#565656'
    },
    companyLogoContainer:{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    companyLogo:{
        height: '100%',
        flex: 'none'
    },
    bottomInfoContainer:{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        display: 'flex',
        flexDirection: 'column',
        width: '70%',
        color: 'white'
    },
    timeLineContainer:{
        display: 'flex',
        flexDirection: 'row',
        height: '30px'
    },
    timelineCalendarIcon:{
        height: '100%',
        width: 'auto',
        marginRight: '7px'
    },
    timelineCopy:{
        marginTop: '7px',
    },
    jobTitle: {
        marginTop: '10px',
        marginBottom: '10px'
    },
    jobDesc:{
        marginTop: '0px',
        marginBottom: '20px'
    },
    button:{
        backgroundColor: 'white',
        color: '#565656',
        marginRight: 'auto',
        borderColor: '#565656',
        borderSize: '3px',
        fontWeight: 'bold',
        fontSize: '1.1em'
    }
};