let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let loader = new THREE.GLTFLoader();
    loader.load('../3d/scene.gltf', function(gltf){
        // car = gltf.scene.children[0];
        // car.scale.set(0.5,0.5,0.5);
        scene.add(gltf.scene);
        renderer.render(scene,camera);
        // animate();
    });
}

init();