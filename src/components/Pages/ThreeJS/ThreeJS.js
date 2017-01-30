var React = require('react');
var ThreeCube = require('./ThreeCube');

var ThreeJS = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="container jumbotron">
                    <div className="jumbotron-overline"></div>
                    <h6>Having Some fun with WebGL and ThreeJS</h6>
                    <h3>Three JS</h3>
                </div>

                <ThreeCube/>
            </div>
        )
    }
});

module.exports = ThreeJS;