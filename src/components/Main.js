var React = require('react');
var TomNavBar = require('./TomNavBar');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <TomNavBar/>
                <div className="main-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

module.exports = Main;