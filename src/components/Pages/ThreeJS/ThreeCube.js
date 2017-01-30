var React = require('react');

var ThreeCube = React.createClass({
    threeCubeInit: function () {
        var tCont = document.querySelector(".threeJsCubeContainer");

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, tCont.offsetWidth / tCont.offsetHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize(tCont.offsetWidth, tCont.offsetHeight);
        tCont.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshNormalMaterial({depthTest: true, depthWrite: true});
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        var render = function () {
            requestAnimationFrame(render);

            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera);
        };

        render();
    },
    componentDidMount: function(){
        this.threeCubeInit();
    },
    render: function(){
        return(
            <div style={styles.container} className="threeJsCubeContainer">
            </div>
        )
    }
});

module.exports = ThreeCube;

var styles = {
    container: {
        width: '100%',
        height: '500px',
        marginBottom: '20px'
    }
};