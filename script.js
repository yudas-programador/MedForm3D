const container = document.getElementById('threejs-canvas-container');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
camera.position.z = 25;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

const geometry = new THREE.IcosahedronGeometry(10, 3);
const positions = geometry.attributes.position.array;
for (let i = 0; i < positions.length; i += 3) {
    const x = positions[i];
    const y = positions[i+1];
    positions[i+2] += Math.sin(x * 0.5) * Math.cos(y * 0.5) * 1.2;
}
geometry.computeVertexNormals();

const material = new THREE.MeshBasicMaterial({
    color: 0x06b6d4,
    wireframe: true,
    transparent: true,
    opacity: 0.6
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const lineGeometry = new THREE.BoxGeometry(24, 0.2, 12);
const lineMaterial = new THREE.MeshBasicMaterial({ color: 0x22c55e, transparent: true, opacity: 0.4 });
const laserLine = new THREE.Mesh(lineGeometry, lineMaterial);
scene.add(laserLine);

let isDragging = false;
let previousMousePosition = { x: 0, y: 0 };

container.addEventListener('mousedown', () => isDragging = true);
container.addEventListener('mousemove', (e) => {
    const deltaMove = { x: e.offsetX - previousMousePosition.x, y: e.offsetY - previousMousePosition.y };
    if (isDragging) {
        mesh.rotation.y += deltaMove.x * 0.005;
        mesh.rotation.x += deltaMove.y * 0.005;
    }
    previousMousePosition = { x: e.offsetX, y: e.offsetY };
});
window.addEventListener('mouseup', () => isDragging = false);

let laserDirection = 1;
function animate() {
    requestAnimationFrame(animate);
    if (!isDragging) mesh.rotation.y += 0.002;
    laserLine.position.y += 0.08 * laserDirection;
    if (laserLine.position.y > 11 || laserLine.position.y < -11) laserDirection *= -1;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});

function handleFormSubmit(event) {
    event.preventDefault();
    document.querySelector('.btn-submit').classList.add('hidden');
    document.getElementById('formSuccessMessage').classList.remove('hidden');
    document.getElementById('onboardingForm').reset();
}