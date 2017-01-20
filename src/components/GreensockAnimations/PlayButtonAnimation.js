var React = require('react');
var ReactBootstrap = require("react-bootstrap");
var Button = ReactBootstrap.Button;
var TweenMax = require("../../libs/TweenMax.min.js");

var tl = null;

var PlayButtonAnimation = React.createClass({
    getContainerWidth: function (container) {
        return container.offsetWidth;
    },
    getContainerHeight: function (container) {
        return container.offsetHeight;
    },
    runPlayButtonAnimation: function () {
        var playButton = document.getElementById("greensockAnimationsPlayButton");
        var playButtonContainer = document.getElementById("play_button_animations");

        var containerWidth = this.getContainerWidth(playButtonContainer);
        var containerHeight = this.getContainerHeight(playButtonContainer);
        var playButtonWidth = this.getContainerWidth(playButton);
        var animateXTo = (containerWidth / 2) + (playButtonWidth / 2);
        var animateYTo = containerHeight + this.getContainerHeight(playButton);

        tl = new TimelineMax();
        tl.add("start", 0);
        tl.add(TweenMax.to(playButton, 2, {x: animateXTo, ease: Power0.easeOut}), "start");
        tl.add(TweenMax.to(playButton, 1, {rotationY: 360, repeat: 1}), "start");
        tl.add(TweenMax.to(playButton, 1, {y: animateYTo, ease: Back.easeIn}));
    },
    componentDidMount: function () {
        //Assign the on click to the play button
        var that = this;
        $(".playButtonAnimationStartButton").click(function(){
            that.runPlayButtonAnimation();
        });

        $(".playButtonResetButton").click(function(){
            tl.timeScale(5);
            tl.reverse();
        });
    },
    render: function(){
        return(
            <div style={styles.playAnimationContainer}>
                <div style={styles.playButtonAnimationContainer} id="play_button_animations">
                    <img id="greensockAnimationsPlayButton" style={styles.playButtonImg}
                         src={require("file-loader!../../img/play_button.png")}/>
                </div>
                <div style={styles.buttonContainer}>
                    <Button className="playButtonAnimationStartButton" style={styles.playButtonStartButton}>Start</Button>
                    <Button className="playButtonResetButton" style={styles.playButtonStartButton}>Reset/Reverse</Button>
                </div>
            </div>
        )
    }
});

module.exports = PlayButtonAnimation;

var styles = {
    playAnimationContainer:{
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center'
    },
    playButtonAnimationContainer: {
        width: '80%',
        height: '60vh',
        backgroundColor: 'gray',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
    },
    playButtonImg: {
        width: '100px',
        height: '100px',
        position: 'relative',
        left: '-100px'
    },
    buttonContainer:{
        width: '50%'
    },
    playButtonStartButton: {
        marginTop: '0px',
        width: '50%',
        borderRadius: '0px'
    },
    playButtonResetButton:{
        marginTop: '0px',
        width: '50%',
        borderRadius: '0px'
    }
};