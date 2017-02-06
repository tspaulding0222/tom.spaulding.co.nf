var React = require('react');

var Chapter2A = React.createClass({
    initStats: function(){
        var stats = new Stats();
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';

        document.getElementById("Stats-output-ch2A").appendChild(stats.domElement);
        return stats;
    },
    threeJsInit: function(){
        var container = document.getElementById("threeJsPlaygroundContainerChapter2A");

        var stats = this.initStats();
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(45, container.offsetWidth/container.offsetHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setClearColor(new THREE.Color(0xEEEEEE));
        renderer.setSize(container.offsetWidth, container.offsetHeight);
        // renderer.shadowMapEnabled = true;

        //Added to make chrome mac shadows look softer
        // renderer.shadowMapType = THREE.PCFSoftShadowMap;

        var planeGeomety = new THREE.PlaneGeometry(60, 40, 1, 1);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
        var plane = new THREE.Mesh(planeGeomety, planeMaterial);
        // plane.receiveShadow = true;
        plane.rotation.x = -0.5 * Math.PI;
        plane.position.y = 0;
        plane.position.x = 0;
        plane.position.z = 0;
        scene.add(plane);

        camera.position.x = -50;
        camera.position.y = 30;
        camera.position.z = 20;
        camera.lookAt(new THREE.Vector3(-10, 0, 0));

        var ambientLight = new THREE.AmbientLight(0x090909);
        scene.add(ambientLight);

        var spotlight = new THREE.SpotLight(0xffffff);
        spotlight.position.set(-40, 40, 50);
        // spotlight.castShadow = true;
        scene.add(spotlight);

        addGeometries(scene);

        container.appendChild(renderer.domElement);

        render();

        function addGeometries(scene){
            var geoms = [];

            geoms.push(new THREE.CylinderGeometry(1, 4, 4));
            geoms.push(new THREE.BoxGeometry(2, 2, 2));
            geoms.push(new THREE.SphereGeometry(2));
            geoms.push(new THREE.IcosahedronGeometry(4));

            // var points = [
            //     new THREE.Vector3(2, 2, 2),
            //     new THREE.Vector3(2, 2, -2),
            //     new THREE.Vector3(-2, 2, -2),
            //     new THREE.Vector3(-2, 2, 2),
            //     new THREE.Vector3(2, -2, 2),
            //     new THREE.Vector3(2, -2, -2),
            //     new THREE.Vector3(-2, -2, -2),
            //     new THREE.Vector3(-2, -2, 2)
            // ];
            // geoms.push(new THREE.ConvexGeometry(points));

            // create a lathgeometry
            //http://en.wikipedia.org/wiki/Lathe_(graphics)
            var pts = [];//points array - the path profile points will be stored here
            var detail = .1;//half-circle detail - how many angle increments will be used to generate points
            var radius = 3;//radius for half_sphere
            for (var angle = 0.0; angle < Math.PI; angle += detail)//loop from 0.0 radians to PI (0 - 180 degrees)
                pts.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));//angle/radius to x,z
            geoms.push(new THREE.LatheGeometry(pts, 12));

            // create a OctahedronGeometry
            geoms.push(new THREE.OctahedronGeometry(3));

            // create a geometry based on a function
            // geoms.push(new THREE.ParametricGeometry(THREE.ParametricGeometries.mobius3d, 20, 10));

            geoms.push(new THREE.TetrahedronGeometry(3));

            geoms.push(new THREE.TorusGeometry(3, 1, 10, 10));

            geoms.push(new THREE.TorusKnotGeometry(3, 0.5, 50, 20));

            var j = 0;
            for(var i =0; i<geoms.length; i++){
                var materials = [
                    new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff, shading: THREE.FlatShading}),
                    new THREE.MeshBasicMaterial({color: 0x000000, wireframe: true})
                ];

                var mesh = THREE.SceneUtils.createMultiMaterialObject(geoms[i], materials);
                mesh.traverse(function (e) {
                    // e.castShadow = true
                });

                mesh.position.x = -24 + ((i % 4) * 12);
                mesh.position.y = 4;
                mesh.position.z = -8 + (j * 12);

                if ((i + 1) % 4 == 0) j++;
                scene.add(mesh);
            }
        }

        function render(){
            stats.update();

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
                    <h6>Chapter 2 Geometrys</h6>
                    <h3>Learning Three.js</h3>
                </div>

                <div style={styles.threeJsPlaygroundContainer} id="threeJsPlaygroundContainerChapter2A">
                    <div id="Stats-output-ch2A"></div>
                    <div style={styles.datGuiPlacement} id="datGuiContainerCH2A"></div>
                </div>
            </div>
        )
    }
});

module.exports = Chapter2A;

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