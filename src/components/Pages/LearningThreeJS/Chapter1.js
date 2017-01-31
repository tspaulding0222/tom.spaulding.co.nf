var React = require('react');

var ThreeJsPlayground = React.createClass({
    componentDidMount: function(){
        var container = document.getElementById("threeJsPlaygroundContainer");

        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(45, container.offsetWidth/container.offsetHeight, 0.1, 1000);

        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(new THREE.Color(0xEEEEEE));
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.shadowMapType = THREE.PCFSoftShadowMap;
        renderer.shadowMapEnabled = true;

        var axes = new THREE.AxisHelper(20);
        scene.add(axes);

        var planeGeometry = new THREE.PlaneGeometry(60, 20, 1, 1);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 15;
        plane.position.y = 0;
        plane.position.z = 0;
        scene.add(plane);

        var cubeGeometry = new THREE.CubeGeometry(4, 4, 4);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.castShadow = true;
        cube.position.x = -4;
        cube.position.y = 3;
        cube.position.z = 0;
        scene.add(cube);

        var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
        var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.castShadow = true;
        sphere.position.x = 20;
        sphere.position.y = 4;
        sphere.position.z = 2;
        scene.add(sphere);

        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);

        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-40, 60, -10);
        spotLight.castShadow = true;
        spotLight.shadowCameraVisible = true;
        spotLight.shadowMapHeight = 2048;
        spotLight.shadowMapWidth = 2048;
        scene.add(spotLight);

        container.appendChild(renderer.domElement);
        renderer.render(scene, camera);

    },
    render: function(){
        return (
            <div>
                <div className="container jumbotron">
                    <div className="jumbotron-overline"></div>
                    <h6>Learning ThreeJS Book Stuff Here</h6>
                    <h3>Three JS Playground</h3>
                </div>

                <div style={styles.threeJsPlaygroundContainer} id="threeJsPlaygroundContainer">

                </div>
            </div>
        )
    }
});

module.exports = ThreeJsPlayground;

var styles = {
    threeJsPlaygroundContainer:{
        height: '100vh',
        width: '100%'
    }
}