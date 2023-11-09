var container,
  info,
  camera,
  scene,
  light,
  geometry,
  mesh,
  projector,
  renderer,
  controls;

// dom
container = document.createElement('div');
document.body.appendChild(container);

// info
info = document.createElement('div');
info.style.position = 'absolute';
info.style.top = '10px';
info.style.width = '100%';
info.style.textAlign = 'center';
info.innerHTML = "three.js - cut hole shape from shape";
container.appendChild(info);

// renderer
renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// scene
scene = new THREE.Scene();

// camera
camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
camera.position.set(0, 300, 500);
scene.add(camera);

// light
scene.add(new THREE.AmbientLight(0xDDDDDD));

// light
light = new THREE.PointLight(0xaaaaaa);
light.position = camera.position;
scene.add(light);

var path1 = new THREE.Path();

path1.moveTo(307.94, 275.49);
path1.lineTo(296.26, 275.23);
path1.lineTo(286.64, 272.99);
path1.lineTo(279.78, 269.31);
path1.lineTo(274.14, 263.55);
path1.lineTo(271.65, 260.21);
path1.lineTo(269.2, 261.06);
path1.lineTo(254.83, 268.51);
path1.lineTo(242.11, 272.97);
path1.lineTo(227.59, 275.23);
path1.lineTo(209.91, 275.48);
path1.lineTo(197.47, 273.63);
path1.lineTo(187.91, 270.13);
path1.lineTo(180.48, 265.09);
path1.lineTo(175.32, 258.88);
path1.lineTo(172.2, 251.44);
path1.lineTo(171.1, 242.23);
path1.lineTo(172.24, 233.63);
path1.lineTo(175.49, 226.24);
path1.lineTo(181, 219.54);
path1.lineTo(189.42, 213.3);
path1.lineTo(201.36, 207.73);
path1.lineTo(217.23, 203.25);
path1.lineTo(238.28, 200.1);
path1.lineTo(269.37, 198.47);
path1.lineTo(269.98, 182.93);
path1.lineTo(268.74, 171.32);
path1.lineTo(266.05, 163.7);
path1.lineTo(261.58, 157.72);
path1.lineTo(255.24, 153.24);
path1.lineTo(247.06, 150.32);
path1.lineTo(235.44, 149.13);
path1.lineTo(224.71, 150.05);
path1.lineTo(215.91, 153);
path1.lineTo(210.23, 156.86);
path1.lineTo(207.64, 160.85);
path1.lineTo(207.19, 165.28);
path1.lineTo(209.34, 169.86);
path1.lineTo(212.01, 174.15);
path1.lineTo(212.14, 177.99);
path1.lineTo(209.8, 181.78);
path1.lineTo(204.22, 185.79);
path1.lineTo(197.62, 187.68);
path1.lineTo(188.65, 187.43);
path1.lineTo(182.41, 185.39);
path1.lineTo(178.45, 181.77);
path1.lineTo(176.2, 176.9);
path1.lineTo(176.03, 170.64);
path1.lineTo(178.2, 164.13);
path1.lineTo(183.09, 157.69);
path1.lineTo(191.04, 151.36);
path1.lineTo(202.01, 145.82);
path1.lineTo(216.09, 141.57);
path1.lineTo(232.08, 139.24);
path1.lineTo(250.07, 139.18);
path1.lineTo(266.13, 141.23);
path1.lineTo(279.05, 145.06);
path1.lineTo(289.15, 150.3);
path1.lineTo(295.91, 156.19);
path1.lineTo(300.73, 163.41);
path1.lineTo(303.85, 172.47);
path1.lineTo(305.07, 183.78);
path1.lineTo(305.07, 241.97);
path1.lineTo(306, 251.51);
path1.lineTo(308.18, 256.39);
path1.lineTo(311.72, 259.09);
path1.lineTo(317.31, 260.01);
path1.lineTo(324.71, 259.01);
path1.lineTo(332.45, 255.86);
path1.lineTo(335.57, 257.53);
path1.lineTo(337.6, 260.44);
path1.lineTo(336.94, 262.33);
path1.lineTo(328.27, 268.74);
path1.lineTo(317.89, 273.41);
path1.lineTo(307.94, 275.49);

shapes = path1.toShapes();
shape1 = shapes[0];

var hole1 = new THREE.Path();

hole1.moveTo(221.69, 258.13);
hole1.lineTo(215.2, 255.08);
hole1.lineTo(210.86, 250.57);
hole1.lineTo(208.4, 244.49);
hole1.lineTo(207.92, 237.03);
hole1.lineTo(209.69, 230.71);
hole1.lineTo(213.82, 224.85);
hole1.lineTo(220.9, 219.34);
hole1.lineTo(230.95, 214.67);
hole1.lineTo(245.76, 210.86);
hole1.lineTo(266.59, 208.36);
hole1.lineTo(269.48, 208.76);
hole1.lineTo(269.99, 212.88);
hole1.lineTo(269.99, 244.81);
hole1.lineTo(269.34, 247.02);
hole1.lineTo(266.07, 250.04);
hole1.lineTo(255.27, 255.23);
hole1.lineTo(242.52, 258.58);
hole1.lineTo(230.57, 259.43);
hole1.lineTo(221.69, 258.13);

holes = hole1.toShapes();
shape1.holes = holes;

// shape
var shape2 = new THREE.Shape();

shape2.moveTo(245.79, 125.33);
shape2.lineTo(232.93, 124.53);
shape2.lineTo(222.21, 121.74);
shape2.lineTo(213.14, 117.11);
shape2.lineTo(207.36, 111.92);
shape2.lineTo(203.7, 105.75);
shape2.lineTo(201.94, 98.18);
shape2.lineTo(202.34, 90.12);
shape2.lineTo(204.86, 83.4);
shape2.lineTo(210.01, 76.81);
shape2.lineTo(217.49, 71.33);
shape2.lineTo(227.17, 67.31);
shape2.lineTo(238.35, 65.2);
shape2.lineTo(243.99, 64.95);
shape2.lineTo(255.92, 66.06);
shape2.lineTo(266.21, 69.28);
shape2.lineTo(274.98, 74.44);
shape2.lineTo(280.64, 80.19);
shape2.lineTo(284.02, 86.85);
shape2.lineTo(285.26, 94.52);
shape2.lineTo(284.27, 102.84);
shape2.lineTo(281.24, 109.66);
shape2.lineTo(276.03, 115.43);
shape2.lineTo(267.89, 120.46);
shape2.lineTo(257.68, 123.93);
shape2.lineTo(245.79, 125.33);

//hole
var hole2 = new THREE.Shape();

hole2.moveTo(238.44, 116.65);
hole2.lineTo(231.99, 114.29);
hole2.lineTo(227.23, 110.22);
hole2.lineTo(223.94, 104.53);
hole2.lineTo(222.41, 96.92);
hole2.lineTo(223.05, 88.57);
hole2.lineTo(225.65, 82.21);
hole2.lineTo(230.07, 77.36);
hole2.lineTo(235.93, 74.4);
hole2.lineTo(243.68, 73.34);
hole2.lineTo(246.08, 73.43);
hole2.lineTo(253.37, 75.08);
hole2.lineTo(258.65, 78.43);
hole2.lineTo(262.47, 83.41);
hole2.lineTo(264.59, 90.25);
hole2.lineTo(264.64, 98.93);
hole2.lineTo(262.63, 106.12);
hole2.lineTo(258.87, 111.5);
hole2.lineTo(253.73, 115.1);
hole2.lineTo(246.81, 116.94);
hole2.lineTo(238.44, 116.65);

// punch the hole
shape1.holes.push(hole1);

// punch the hole
shape2.holes.push(hole2);

// extrude
var extrusionSettings = {
  amount: 20,
  bevelEnabled: true,
  bevelThickness: 0.5,
  bevelSize: 0.5,
  bevelSegments: 8,
  material: 0,
  extrudeMaterial: 1
};

var geometry1 = new THREE.ExtrudeGeometry(shape1, extrusionSettings);
var geometry2 = new THREE.ExtrudeGeometry(shape2, extrusionSettings);

// material
var material = new THREE.MeshLambertMaterial({
  color: 0xff8800
});

var mesh1 = new THREE.Mesh(geometry1, material);
scene.add(mesh1);

// mesh
var mesh2 = new THREE.Mesh(geometry2, material);
scene.add(mesh2);

camera.lookAt(new THREE.Vector3(200, 200));

// render
function render() {
  renderer.render(scene, camera);
}

// animate            
(function animate() {
  requestAnimationFrame(animate);

//   mesh1.rotation.y += 0.001;
//   mesh2.rotation.y += 0.01;

//   mesh1.rotation.x += 0.01;
//   mesh2.rotation.x += 0.001;
  
  render();
}());
