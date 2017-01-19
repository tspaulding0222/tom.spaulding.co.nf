var React = require('react');
var ProjectGridItem = require('./ProjectGridItem');
var LinkColor = require("../styles/CustomStyles").blackLinkTextColor;

var PastProjects = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="container jumbotron">
                    <h3>
                        My Current and Past Projects
                    </h3>
                    <h5>Please click any item to link to see more info.</h5>
                </div>

                <div>
                    <a style={LinkColor} href="http://makemeflinch.com/">
                        <ProjectGridItem
                            icon={require("file-loader!../img/flinch.png")}
                            title="Flinch"
                            desc="Video chat staring contest for Android. Flinch matches two players and automatically determines a winner based on who smiles first."/>
                    </a>
                    <a style={LinkColor} href="http://http://heystaxapp.com/">
                        <ProjectGridItem
                            icon={require("file-loader!../img/heystax.png")}
                            title="Heystax"
                            desc="Heystax matches two users into a live timed video chat with facial recognition technologies that determine compatibility."/>
                    </a>
                    <a style={LinkColor} href="http://www.protobuildbar.com/">
                        <ProjectGridItem
                            icon={require("file-loader!../img/proto.png")}
                            title="Proto Build Bar"
                            desc="Proto Build Bar website with parallax scrolling, background video, gsap animations and custom created single page navigation"/>
                    </a>
                    <a style={LinkColor} href="https://github.com/tspaulding0222/SplashWall">
                        <ProjectGridItem
                            icon={require("file-loader!../img/splashWalls.png")}
                            title="Splash Wall"
                            desc="Took the hit Splash Walls React Native Tutorial app created by Smashing Magazine and created an Android and iOS version using React Native"/>
                    </a>
                    <a style={LinkColor} href="https://github.com/tspaulding0222/BreakoutGame">
                        <ProjectGridItem
                            icon={require("file-loader!../img/brickBreaker.png")}
                            title="Breakout Game"
                            desc="Basic Brick Braker Game for Android. Demonstrates knowledge of how to create a basic game engine using Java and Android Tools"/>
                    </a>
                    <a style={LinkColor} href="http://handguncombatives.com/">
                        <ProjectGridItem
                            icon={require("file-loader!../img/handguncombatives.png")}
                            title="Handgun Combatives"
                            desc="Create website for Handgun Combatives. I still update this website with new blog posts, images, and various other content when client asks."/>
                    </a>
                    <a style={LinkColor} href="http://www.eventsplannedllc.com/">
                        <ProjectGridItem
                            icon={require("file-loader!../img/eventsplanned.jpg")}
                            title="Events Planned LLC"
                            desc="Events Planned LLC website. This was created with strikingly template and had custom code injected into to make the site more custom."/>
                    </a>
                    <a style={LinkColor} href="https://www.technologyfirst.org/magazines/2014/33-september/997-istable-new-application-technology-to-revolutionize-an-industry.html">
                        <ProjectGridItem
                            icon={require("file-loader!../img/pontac.png")}
                            title="Pontac Project"
                            desc="Series of Windows 8 apps that helped in tracking/managment of thoroughbred race horses. Created with Javascript, HTML5, and CSS3"/>
                    </a>
                </div>
            </div>
        )
    }
});

module.exports = PastProjects;