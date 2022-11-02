import { BoxBufferGeometry, CubeCamera, Mesh, MeshStandardMaterial } from 'three';

function createTable() {
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // Switch the old "basic" material to
  // a physically correct "standard" material
  const material = new MeshStandardMaterial({ color: 'brown' });

  const table = new Mesh(geometry, material);

  table.rotation.set(-0.5, -0.1, 0.8);

  table.tick = () => {
    // increase the table's rotation each frame
    table.rotation.z += 0.01;
    table.rotation.x += 0.01;
    table.rotation.y += 0.01;
  }

  return table;
}

export { createTable };
