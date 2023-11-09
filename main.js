import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

if (WebGL.isWebGLAvailable()) {
  console.log('WebGL is available');
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById('container').appendChild(warning);
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create materials for different sides of the cube
const materialFront = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const materialBack = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const materialTop = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const materialBottom = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const materialLeft = new THREE.MeshBasicMaterial({ color: 0xff00ff });
const materialRight = new THREE.MeshBasicMaterial({ color: 0x00ffff });

// Apply materials to the cube faces
const materials = [
  materialFront,
  materialBack,
  materialTop,
  materialBottom,
  materialLeft,
  materialRight,
];

const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
