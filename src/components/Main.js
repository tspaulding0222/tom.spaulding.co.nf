var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

//Global Requirement for entire webapp here!!!!
var TomNavBar = require('./TomNavBar');
require('style-loader!css-loader!../styles/CSS_Animations.css');
require('style-loader!css-loader!../styles/custom_theme.css');
//End of Global Requirements

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