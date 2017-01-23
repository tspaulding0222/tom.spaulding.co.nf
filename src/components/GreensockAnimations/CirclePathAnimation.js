var React = require("react");
var ReactBootstrap = require("react-bootstrap");
var Button = ReactBootstrap.Button;
var TweenMax = require("../../libs/TweenMax.min.js");

var tl = null;

var CirclePathAnimation = React.createClass({
    componentDidMount: function(){
        //Assign the on click to the play button
        var that = this;
        $(".playButtonAnimationStartButton").click(function(){
            that.runAnimation();
        });

        $(".playButtonResetButton").click(function(){
            tl.timeScale(5);
            tl.reverse();
        });
    },
    componentWillUnmount: function(){
        tl = null;
    },
    runAnimation:function(){
        var container = document.querySelector(".circleAnimContainer");
        var containerWidth = container.offsetWidth;
        var containerHeight = container.offsetHeight;
        var containerRect = container.getBoundingClientRect();
        var containerleft = containerRect.left;

        var circleWidth = 100;
        var circleHeight = 100;

        var pinkBallX = (containerleft - document.getElementById("pinkBall").getBoundingClientRect().left);

        tl = new TimelineMax();
        tl.add(TweenMax.to("#blueBall", 1, {y: containerHeight, ease: Bounce.easeOut}));
        tl.add(TweenMax.to("#greenBall", 1.5, {y: containerHeight, ease: Bounce.easeOut}), '-=.5');
        tl.add(TweenMax.to("#pinkBall", .75, {y: containerHeight, ease: Bounce.easeOut}), '-=.8');
        tl.add(TweenMax.to("#purpleBall", 1.5, {y: containerHeight, ease: Bounce.easeOut}), '-=.5');
        tl.add(TweenMax.to("#whiteBall", .5, {y: containerHeight, ease: Bounce.easeOut}), '-=.9');
        tl.add(TweenMax.to("#pinkBall", 2, {y: '-=' + containerHeight/3, ease: Power0.easeInOut}));
        tl.add(TweenMax.to("#pinkBall", .35, {x: '+=' + pinkBallX, delay: 0.25, ease: Power4.easeIn, onComplete: function(){
            var pinkBall = document.getElementById("pinkBall");
            var pinkBallRect = pinkBall.getBoundingClientRect();
            var top = pinkBallRect.top;

            var miniPinkBall = document.querySelector(".miniPinkBall");
            var miniPinkBallRect = miniPinkBall.getBoundingClientRect();
            var miniPinkBallTop = miniPinkBallRect.top;

            var y = miniPinkBallTop - top;

            tl.add(TweenMax.to(".miniPinkBall", 0, {y: '+=' + y}));
        }}));
        tl.add(TweenMax.to("#pinkBall", .15, {scale: 0, transformOrigin:"0% 50%"}));

        var dotsTimeline = new TimelineMax();
        dotsTimeline.add("start", 0);

        Array.prototype.slice.call(document.querySelectorAll(".miniPinkBall")).forEach(function(index){
            var randX = Math.floor(Math.random() * 600) + 400;
            var randY = Math.floor(Math.random()*200) + 1;
            randY *= Math.floor(Math.random()*2) == 1 ? 1 : -1;

            dotsTimeline.add(TweenMax.to(index, 2, {x: randX, y: randY, opacity: 0}), 'start')
        });

        tl.add(dotsTimeline);
    },
    render: function () {
        var miniPinkBalls = [];
        for(var i=0; i<50; i++){
            miniPinkBalls.push(<div style={styles.miniPinkBall} className="miniPinkBall" key={i}></div>);
        }

        return (
            <div style={styles.animationContainer}>
                <div className="circleAnimContainer"  style={styles.circleAnimationContainer}>
                    <div id="blueBall" style={Object.assign({}, {background: 'blue', right: '10%'}, styles.circle)}></div>
                    <div id="greenBall" style={Object.assign({}, {background: 'green', right: '25%'}, styles.circle)}></div>
                    <div id="pinkBall" style={Object.assign({}, {background: 'pink', right: '40%'}, styles.circle)}></div>
                    <div id="purpleBall" style={Object.assign({}, {background: 'purple', left: '10%'}, styles.circle)}></div>
                    <div id="whiteBall" style={Object.assign({}, {background: 'white', left: '25%'}, styles.circle)}></div>

                    {miniPinkBalls}
                </div>
                <div style={styles.buttonContainer}>
                    <Button className="playButtonAnimationStartButton" style={styles.button}>Start</Button>
                    <Button className="playButtonResetButton" style={styles.button}>Reset/Reverse</Button>
                </div>
            </div>
        )
    }
});

module.exports = CirclePathAnimation;

var styles = {
    animationContainer: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '40px'
    },
    circleAnimationContainer: {
        width: '80%',
        height: '60vh',
        backgroundColor: 'gray',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative'
    },
    svg: {
        width: '500px',
        height: '500px',
        "enableBackground":"new 0 0 600 400",
        margin: 'auto'
    },
    buttonContainer: {
        width: '50%'
    },
    button: {
        marginTop: '0px',
        width: '50%',
        borderRadius: '0px'
    },
    circle:{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        position: 'absolute',
        top: '-100px'
    },
    miniPinkBall:{
        width: '5px',
        height: '5px',
        position: 'absolute',
        backgroundColor: 'pink',
        borderRadius: '50%',
        left: '-5px'
    }
};