import { BoxBufferGeometry, Mesh, Texture } from 'three';
import { createMaterial } from '../actions/createMaterial';
// TODO: Change the lighting on the floor to improve the way the texture is seen
import maderaTexture from '../textures/madera-texture.jpg';


function createFloor() {
  const geometry = new BoxBufferGeometry(2.5, 2.5, 1);

  const material = createMaterial(maderaTexture);

  const floor = new Mesh(geometry, material);

  floor.rotation.set(-0.5, -0.1, 0.8);
  
  floor.receiveShadow = true;
  floor.tick = () => {
    // increase the table's rotation each frame
    floor.rotation.z += 1;
    floor.rotation.x += 1;
    floor.rotation.y += 1;
  }

  return floor;
}

export { createFloor };
