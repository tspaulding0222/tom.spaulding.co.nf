var React = require('react');
var ThreeCube = require('./ThreeCube');
var ThreeParticles = require('./ThreeParticles');
var Common = require('../../../libs/Common');

var ThreeJS = React.createClass({
    componentDidMount: function(){
        Common.pageFadeIn(document.querySelector(".threeJSPage"));
    },
    render: function () {
        return (
            <div style={{opacity: '0'}} className="threeJSPage container">
                <div className="container jumbotron">
                    <div className="jumbotron-overline"></div>
                    <h6>Having Some fun with WebGL and ThreeJS</h6>
                    <h3>Three JS</h3>
                </div>

                <ThreeCube/>
                {/*<ThreeParticles/>*/}
            </div>
        )
    }
});

module.exports = ThreeJS;