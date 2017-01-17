var React = require('react');
var PropTypes = React.PropTypes;

var ExperienceGridItem = React.createClass({
    propTypes:{
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
        timePeriod: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
    },
    render: function(){
        return(
            <div style={styles.containerDiv}>
                <div style={styles.icon}>
                    <img style={styles.iconImg} src={this.props.icon}/>
                </div>
                <h5>{this.props.title}</h5>
                <div>
                    <h6 style={styles.jobTitle}>{this.props.job}</h6>
                    <p style={styles.timeline}>{this.props.timePeriod}</p>
                </div>
                <p>{this.props.desc}</p>
            </div>
        );
    }
});

module.exports = ExperienceGridItem;

var styles = {
    containerDiv:{
        marginBottom: '20px'
    },
    icon:{
        float: 'right',
        height: '70px',
        width: '70px'
    },
    iconImg:{
        width: '100%'
    },
    jobTitle:{
        display: "inline-block",
        marginRight: '10px'
    },
    timeline:{
        display: "inline-block",
        fontSize: '.7em',
        color: 'gray'
    }
};