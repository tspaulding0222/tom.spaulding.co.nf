var React = require('react');

var Chapter2 = React.createClass({
    initStats: function(){
        var stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';

        document.getElementById("Stats-output-ch2").appendChild(stats.domElement);
        return stats;
    },
    threeJsInit: function(){
        var container = document.getElementById("threeJsPlaygroundContainerChapter2");

        var stats = this.initStats();

        //Container for all the thigns in the scene
        var scene = new THREE.Scene();

        //add a fog to the scene
        scene.fog = new THREE.Fog(0xffffff, 0.015, 100);

        //Below line will force all the scene objects to use a specific material
        //scene.overrideMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});

        //caret the camera, defines what we are looking at
        var camera = new THREE.PerspectiveCamera(45, container.offsetWidth/container.offsetHeight, 0.1, 1000);
        scene.add(camera);

        //create a renderer and set the size
        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(new THREE.Color(0xEEEEEE));
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        renderer.shadowMapEnabled = true;

        //Added to make chrome mac shadows look softer
        renderer.shadowMapType = THREE.PCFSoftShadowMap;

        //Create the ground plane
        var planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
        var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.receiveShadow = true;

        //rotate and position the plane
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.x = 0;
        plane.position.y = 0;
        plane.position.z = 0;

        scene.add(plane);

        //position and point camera to center of the scene
        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 30;
        camera.lookAt(scene.position);

        //add subtle ambient lighting
        var ambientLight = new THREE.AmbientLight(0x0c0c0c);
        scene.add(ambientLight);

        //add spotlight for the shadows
        var spotlight = new THREE.SpotLight(0xffffff);
        spotlight.position.set(-40, 60, -10);
        spotlight.castShadow = true;

        //Added to make chrome mac shadows look better
        spotlight.shadowMapHeight = 2048;
        spotlight.shadowMapWidth = 2048;

        scene.add(spotlight);

        //add the output of the renderer to the hmtl container
        container.appendChild(renderer.domElement);

        var controls = new function(){
            this.rotationSpeed = 0.02;
            this.numberOfObjects = scene.children.length;

            this.removeCube = function(){
                var allChildren = scene.children;
                var lastObject = allChildren[allChildren.length - 1];
                if(lastObject instanceof THREE.Mesh){
                    scene.remove(lastObject);
                    controls.numberOfObjects = scene.children.length;
                }
            };

            this.addCube = function(){
                //Create the cube
                var cubeSize = Math.ceil((Math.random() * 3));
                var cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
                var cubeMaterial = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
                var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
                cube.castShadow = true;
                cube.name = "cube" + scene.children.length;

                //position the cube inside the scene
                cube.position.x = -30 + Math.round(Math.random() * planeGeometry.parameters.width);
                cube.position.y = Math.round(Math.random() * 5);
                cube.position.z = -20 + Math.round((Math.random() * planeGeometry.parameters.height));

                //add the cube to the scene
                scene.add(cube);
                controls.numberOfObjects = scene.children.length;
            };

            this.outputObjects = function(){
                console.log(scene.children);
            }
        };

        var gui = new dat.GUI({autoPlace: false});
        gui.add(controls, 'rotationSpeed', 0, 0.5);
        gui.add(controls, 'addCube',);
        gui.add(controls, 'removeCube');
        gui.add(controls, 'outputObjects');
        gui.add(controls, 'numberOfObjects').listen();
        document.getElementById("datGuiContainerCH2").appendChild(gui.domElement);

        render();

        function render(){
            stats.update();

            scene.traverse(function(e){
                if(e instanceof  THREE.Mesh && e != plane){
                    e.rotation.x += controls.rotationSpeed;
                    e.rotation.y += controls.rotationSpeed;
                    e.rotation.z += controls.rotationSpeed;
                }
            });

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
                    <h6>Chapter 2</h6>
                    <h3>Learning Three.js</h3>
                </div>

                <div style={styles.threeJsPlaygroundContainer} id="threeJsPlaygroundContainerChapter2">
                    <div id="Stats-output-ch2"></div>
                    <div style={styles.datGuiPlacement} id="datGuiContainerCH2"></div>
                </div>
            </div>
        )
    }
});

module.exports = Chapter2;

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