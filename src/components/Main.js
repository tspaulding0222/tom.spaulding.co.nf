var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var TomNavBar = require('./TomNavBar');
require('style-loader!css-loader!../styles/test.css');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <TomNavBar/>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});

module.exports = Main;