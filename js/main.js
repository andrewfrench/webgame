var WIDTH = 500;
var HEIGHT = 500;

var VIEW_ANGLE = 45;
var ASPECT = WIDTH / HEIGHT;
var NEAR = 0.1;
var FAR = 10000;

var $container = $('.container');

var renderer = new THREE.WebGLRenderer();
var camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
var scene = new THREE.Scene();

scene.add(camera);

camera.position.z = 300;

renderer.setSize(WIDTH, HEIGHT);

$container.append(renderer.domElement);

var radius = 50;
var segments = 16;
var rings = 16;

var sphereMaterial = new THREE.MeshLambertMaterial(
						{
							color: 0xCC0000
						});

var sphere = new THREE.Mesh(
				new THREE.SphereGeometry(
					radius,
					segments,
					rings),

				sphereMaterial);

scene.add(sphere);

var pointLight = new THREE.PointLight(0xFFFFFF);

pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);

renderer.render(scene, camera);