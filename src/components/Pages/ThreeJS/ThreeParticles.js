var React = require('react');
var spriteTex = require('file-loader!../../../img/perlin-512.png');
var noiseTex = require('file-loader!../../../img/particle2.png');

var ThreeParticles = React.createClass({
    init: function(){
        var camera, tick = 0,
            scene, renderer, clock = new THREE.Clock(true),
            options, spawnerOptions, particleSystem, controls;

        var container = document.querySelector(".threeJsParticleContainer");

        camera = new THREE.PerspectiveCamera(28, container.offsetWidth / container.offsetHeight, 1, 10000);
        camera = new THREE.PerspectiveCamera(28, container.offsetWidth / container.offsetHeight, 1, 10000);
        camera.position.z = 100;
        scene = new THREE.Scene();

        var textureLoader = new THREE.TextureLoader();
        particleSystem = new THREE.GPUParticleSystem({
            maxParticles: 25000,
            particleNoiseTex: textureLoader.load(spriteTex),
            particleSpriteTex: textureLoader.load(noiseTex)
        });
        scene.add(particleSystem);

        options = {
            position: new THREE.Vector3(),
            positionRandomness: .3,
            velocity: new THREE.Vector3(),
            velocityRandomness: .5,
            color: 0x344456,
            colorRandomness: .9,
            turbulence: .2,
            lifetime: 2,
            size: 5,
            sizeRandomness: 1
        };
        spawnerOptions = {
            spawnRate: 15000,
            horizontalSpeed: 1.5,
            verticalSpeed: 1.33,
            timeScale: 1
        };

        renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        container.appendChild(renderer.domElement);

        // setup controls
        controls = new THREE.TrackballControls(camera, renderer.domElement);
        controls.rotateSpeed = 5.0;
        controls.zoomSpeed = 2.2;
        controls.panSpeed = 1;
        controls.dynamicDampingFactor = 0.3;

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            var delta = clock.getDelta() * spawnerOptions.timeScale;
            tick += delta;
            if (tick < 0) tick = 0;
            if (delta > 0) {
                options.position.x = Math.sin(tick * spawnerOptions.horizontalSpeed) * 20;
                options.position.y = Math.sin(tick * spawnerOptions.verticalSpeed) * 10;
                options.position.z = Math.sin(tick * spawnerOptions.horizontalSpeed + spawnerOptions.verticalSpeed) * 5;
                for (var x = 0; x < spawnerOptions.spawnRate * delta; x++) {
                    // Yep, that's really it.	Spawning particles is super cheap, and once you spawn them, the rest of
                    // their lifecycle is handled entirely on the GPU, driven by a time uniform updated below
                    particleSystem.spawnParticle(options);
                }
            }
            particleSystem.update(tick);
            renderer.render(scene, camera);
        }

        animate();
    },
    componentDidMount: function(){
        this.init();
    },
    render: function () {
        return (
            <div style={styles.container} className="threeJsParticleContainer">
            </div>
        )
    }
});

module.exports = ThreeParticles;

var styles = {
    container: {
        width: '100%',
        height: '500px',
        marginBottom: '20px'
    }
};