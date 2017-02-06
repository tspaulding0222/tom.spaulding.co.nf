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

        var stats = this.initStats();

        // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        var camera = new THREE.PerspectiveCamera(45, container.offsetWidth / container.offsetHeight, 0.1, 1000);

        // create a render and set the size
        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(new THREE.Color(0xEEEEEE));
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.shadowMapEnabled = true;

        // create the ground plane
        var planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 0;
        plane.position.y = 0;
        plane.position.z = 0;
        scene.add(plane);

        // position and point the camera to the center of the scene
        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);

        // add subtle ambient lighting
        var ambientLight = new THREE.AmbientLight(0x0c0c0c);
        scene.add(ambientLight);

        // add spotlight for the shadows
        var spotLight = new THREE.SpotLight(0xffffff);
        spotLight.position.set(-40, 60, 20);
        spotLight.castShadow = true;
        scene.add(spotLight);

        container.appendChild(renderer.domElement);

        var controls = new function(){
            this.scaleX = 1;
            this.scaleY = 1;
            this.scaleZ = 1;

            this.positionX = 0;
            this.positionY = 4;
            this.positionZ = 0;

            this.rotationX = 0;
            this.rotationY = 0;
            this.rotationZ = 0;
            this.scale = 1;

            this.translateX = 0;
            this.translateY = 0;
            this.translateZ = 0;

            this.visible = true;

            this.translate = function () {

                cube.translateX(controls.translateX);
                cube.translateY(controls.translateY);
                cube.translateZ(controls.translateZ);

                controls.positionX = cube.position.x;
                controls.positionY = cube.position.y;
                controls.positionZ = cube.position.z;
            }
        };

        var material = new THREE.MeshLambertMaterial({color: 0x44ff44});
        var geom = new THREE.BoxGeometry(5, 8, 3);
        var cube = new THREE.Mesh(geom, material);
        cube.position.y = 4;
        cube.castShadow = true;
        scene.add(cube);

        var gui = new dat.GUI({autoPlace: false});

        var guiScale = gui.addFolder('scale');
        guiScale.add(controls, 'scaleX', 0, 5);
        guiScale.add(controls, 'scaleY', 0, 5);
        guiScale.add(controls, 'scaleZ', 0, 5);

        var guiPosition = gui.addFolder('position');
        var contX = guiPosition.add(controls, 'positionX', -10, 10);
        var contY = guiPosition.add(controls, 'positionY', -4, 20);
        var contZ = guiPosition.add(controls, 'positionZ', -10, 10);

        contX.listen();
        contX.onChange(function (value) {
            cube.position.x = controls.positionX;
        });

        contY.listen();
        contY.onChange(function (value) {
            cube.position.y = controls.positionY;
        });

        contZ.listen();
        contZ.onChange(function (value) {
            cube.position.z = controls.positionZ;
        });

        var guiRotation = gui.addFolder('rotation');
        guiRotation.add(controls, 'rotationX', -4, 4);
        guiRotation.add(controls, 'rotationY', -4, 4);
        guiRotation.add(controls, 'rotationZ', -4, 4);

        var guiTranslate = gui.addFolder('translate');
        guiTranslate.add(controls, 'translateX', -10, 10);
        guiTranslate.add(controls, 'translateY', -10, 10);
        guiTranslate.add(controls, 'translateZ', -10, 10);
        guiTranslate.add(controls, 'translate');

        gui.add(controls, 'visible');
        document.getElementById("datGuiContainerChapter2Mesh").appendChild(gui.domElement);

        render();

        function render() {
            stats.update();

            // render using requestAnimationFrame


            cube.visible = controls.visible;


            cube.rotation.x = controls.rotationX;
            cube.rotation.y = controls.rotationY;
            cube.rotation.z = controls.rotationZ;

            cube.scale.set(controls.scaleX, controls.scaleY, controls.scaleZ);


            requestAnimationFrame(render);
            renderer.render(scene, camera);
        }
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