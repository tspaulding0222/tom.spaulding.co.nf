var React = require('react');

var Template = React.createClass({
    initStats: function(){
        var stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';

        document.getElementById("Stats-output-template").appendChild(stats.domElement);
        return stats;
    },
    threeJsInit: function(){
        var container = document.getElementById("templateContainer");


    },
    componentDidMount: function(){
        this.threeJsInit();
    },
    render: function(){
        return (
            <div className="learn3JsPage" style={{opacity: '1'}}>
                <div className="container jumbotron">
                    <div className="jumbotron-overline"></div>
                    <h6>Chapter 2 A</h6>
                    <h3>Learning Three.js</h3>
                </div>

                <div style={styles.threeJsPlaygroundContainer} id="templateContainer">
                    <div id="Stats-output-template"></div>
                    <div style={styles.datGuiPlacement} id="datGuiContainerTemplate"></div>
                </div>
            </div>
        )
    }
});

module.exports = Template;

var styles = {
    threeJsPlaygroundContainer:{
        height: '100vh',
        width: '100%',
        position: 'relative'
    },
    datGuiPlacement:{
        position: 'absolute',
        top: '0',
        right: '0'
    }
};