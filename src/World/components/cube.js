import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from 'three';

function createCube() {
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // Switch the old "basic" material to
  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: 'purple' });

  const cube = new Mesh(geometry, material);

  cube.rotation.set(-0.5, -0.1, 0.8);
  cube.scale.set(0.5, 3, 1.5);

  return cube;
}

export { createCube };
