import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
console.log("Three");

const div = document.getElementById("app") as HTMLElement;

// sizes
const sizes = {
  width: 800,
  height: 600,
};
//Scene
const scene = new THREE.Scene();

//Object
const cube = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(cube, mat);
scene.add(mesh);

//Camera
const pCamera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
pCamera.position.z = 3;
scene.add(pCamera);

//Renderer
const renderer = new THREE.WebGLRenderer();
div.append(renderer.domElement);

renderer.setSize(sizes.width, sizes.height);

//Controls
const controls = new OrbitControls(pCamera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, pCamera);
}

animate();
