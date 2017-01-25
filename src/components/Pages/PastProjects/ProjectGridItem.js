var React = require('React');
var PropTypes = React.PropTypes;
var ReactBootstrap = require('react-bootstrap');
var Col = ReactBootstrap.Col;

var ProjectGridItem = React.createClass({
    propTypes:{
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
    },
    componentDidMount: function(){
        //JS library that is added via CDN in the index.html template inside public folder.
        //This keeps all the items in the bootstrap grid the same height
        $(".sameHeightBox").matchHeight();
    },
    render: function(){
        return(
            <Col style={Styles.col} xs={12} sm={6} md={4}>
                <div style={Styles.backgroundContainer} className="sameHeightBox">
                    <div style={Styles.icon}>
                        <img style={Styles.img} src={this.props.icon}/>
                    </div>
                    <div style={Styles.copyContainer}>
                        <h4 style={Styles.title}>{this.props.title}</h4>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </Col>
        )
    }
});

module.exports = ProjectGridItem;

var Styles = {
    icon:{
        float: 'left',
        maxHeight: '80px',
        width: '80px',
        marginRight: '15px',
        marginBottom: '25px',
        marginTop: '15px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundContainer:{
        padding: '20px',
        backgroundColor: '#A9A9A9',
        height: '100%',
        width: '100%'
    },
    img:{
        height: '100%',
        width: '100%',
        overflow: 'none'
    },
    copyContainer:{
        minHeight: '110px'
    },
    title:{
        marginTop : '0px'
    },
    col:{
        paddingBottom: '15px',
        minHeight: "175px",
    }
};