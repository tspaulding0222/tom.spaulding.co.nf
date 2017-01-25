var React = require("react");
var Common = require('../../../libs/Common');
var LastContainerBottomMargin = require('../../../styles/CustomStyles').LastContainerBottomMargin;
var PlayButtonAnimation = require('./PlayButtonAnimation');
var CirclePathAnimation = require('./CirclePathAnimation');

var GreensockAnimations = React.createClass({
    componentDidMount: function(){
        Common.pageFadeIn(document.querySelector(".greensockAnimationPage"));
    },
    render: function () {
        return (
            <div style={Object.assign({}, LastContainerBottomMargin, styles.greensockAnimationPage)} className="container greensockAnimationPage">
                <div className="container jumbotron">
                    <div className="jumbotron-overline"></div>
                    <h6>My GSAP Animation Test Ground</h6>
                    <h3>Greensock Animations</h3>
                </div>

                <p style={{textAlign: 'center', color: '#1761A0', marginBottom: '60px', fontWeight: 'bold', fontSize: '1.1em'}}>
                    Best to play these on a desktop browser. Performance on mobile device may be lacking.
                </p>

                <PlayButtonAnimation/>
                <CirclePathAnimation/>
            </div>
        )
    }
});

module.exports = GreensockAnimations;

var styles= {
    greensockAnimationPage:{
        opacity: 0
    }
};