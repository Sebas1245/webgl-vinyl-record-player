import { BoxBufferGeometry, CubeCamera, Mesh, MeshStandardMaterial, TextureLoader } from 'three';
import CedarWoodTexture from '../textures/cedar-wood-texture.jpeg';


function createMaterial() {
  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load(
    CedarWoodTexture,
  );

  // create a "standard" material
  const material = new MeshStandardMaterial({ 
    map: texture
  });
  
  return material;
  }

function createTable() {
  const geometry = new BoxBufferGeometry(2, 2, 2);

  const material = createMaterial();

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
