var React = require('react');
var PropTypes = React.PropTypes;

var ContactGridItem = React.createClass({
    propTypes:{
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    },
    render: function(){
        return(
            <div style={styles.container}>
                <span style={styles.copyContainer}>
                    {this.props.title}
                </span>
                <span style={styles.imgContainer}>
                    <img style={styles.img} src={this.props.icon}/>
                </span>
            </div>
        )
    }
});

module.exports = ContactGridItem;

var styles = {
    container:{
        marginBottom: "10px"
    },
    imgContainer: {
        height: "40px",
        width: "40px",
        display: "inline-block",
        marginLeft: "10px"
    },
    img:{
        width: '100%',
        height: '100%'
    },
    copyContainer: {

    }
};