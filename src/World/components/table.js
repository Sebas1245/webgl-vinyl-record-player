import { BoxBufferGeometry, Mesh } from 'three';
import { createMaterial } from '../actions/createMaterial';
// TODO: Change the lighting on the table to improve the way the texture is seen
import CedarWoodTexture from '../textures/cedar-wood-texture.jpeg';


function createTable() {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = createMaterial(CedarWoodTexture);
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
