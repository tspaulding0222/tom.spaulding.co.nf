var React = require('react');
var ProjectGridItem = require('./ProjectGridItem');

var PastProjects = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="container jumbotron">
                    <h3>
                        My Past Work
                    </h3>
                    <h5>Please click any item to link to see more info.</h5>
                </div>

                <div>
                    <a style={styles.blackText} href="http://makemeflinch.com/">
                        <ProjectGridItem
                            icon={require("file-loader!../img/flinch.png")}
                            title="Flinch"
                            desc="Video chat staring contest for Android. Flinch matches two players and automatically determines a winner based on who smiles first."/>
                    </a>
                    <a style={styles.blackText} href="http://http://heystaxapp.com/">
                        <ProjectGridItem
                            icon={require("file-loader!../img/heystax.png")}
                            title="Heystax"
                            desc="Heystax matches two users into a live timed video chat with facial recognition technologies that determine compatibility."/>
                    </a>
                    <a style={styles.blackText} href="http://www.protobuildbar.com/">
                        <ProjectGridItem
                            icon={require("file-loader!../img/proto.png")}
                            title="Proto Build Bar Website"
                            desc="Proto Build Bar with parallax scrolling, background video, gsap animations and custom created single page navigation"/>
                    </a>
                    <a style={styles.blackText} href="https://github.com/tspaulding0222/SplashWall">
                        <ProjectGridItem
                            icon={require("file-loader!../img/splashWalls.png")}
                            title="Splash Wall"
                            desc="Took the hit Splash Walls React Native Tutorial app created by Smashing Magazine and created an Android and iOS version using React Native"/>
                    </a>
                    <a style={styles.blackText} href="https://github.com/tspaulding0222/BreakoutGame">
                        <ProjectGridItem
                            icon={require("file-loader!../img/brickBreaker.png")}
                            title="Breakout Game"
                            desc="Basic Brick Braker Game for Android. Demonstrates knowledge of how to create a basic game engine using Java and Android Tools"/>
                    </a>
                </div>
            </div>
        )
    }
});

module.exports = PastProjects;

var styles = {
    blackText:{
        color: 'black'
    }
}