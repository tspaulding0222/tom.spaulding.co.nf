var React = require('react');

var Chapter2Mesh = React.createClass({
    initStats: function(){
        var stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';

        document.getElementById("Stats-output-Chapter2Mesh").appendChild(stats.domElement);
        return stats;
    },
    threeJsInit: function(){
        var container = document.getElementById("Chapter2MeshContainer");


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

                <div style={styles.threeJsPlaygroundContainer} id="Chapter2MeshContainer">
                    <div id="Stats-output-Chapter2Mesh"></div>
                    <div style={styles.datGuiPlacement} id="datGuiContainerChapter2Mesh"></div>
                </div>
            </div>
        )
    }
});

module.exports = Chapter2Mesh;

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