var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var Col = ReactBootstrap.Col;
var PropTypes = React.PropTypes;
var Common = require('../../../libs/Common');
var shortId = require('shortid');

var UnsplashImageContainer = React.createClass({
    getInitialState: function(){
        return {
            colId: ''
        }
    },
    propTypes: {
        source: PropTypes.string.isRequired
    },
    componentWillMount: function(){
        this.setState({
            colId: shortId.generate()
        })
    },
    componentDidMount: function(){
        Common.pageFadeIn(document.querySelector("#" + this.state.colId));
    },
    render: function () {
        return (
            <Col id={this.state.colId} style={styles.col} xs={12} sm={6} md={4}>
                <img style={styles.img} src={this.props.source}/>
            </Col>
        )
    }
});

module.exports = UnsplashImageContainer;

var styles = {
    col: {
        overflow: 'hidden',
        marginBottom: '15px',
        opacity: '0'
    },
};