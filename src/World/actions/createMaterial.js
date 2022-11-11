import { MeshStandardMaterial, TextureLoader } from 'three';

export function createMaterial(textureSrc) {
    // create a texture loader.
    const textureLoader = new TextureLoader();
  
    // load a texture
    const texture = textureLoader.load(
      textureSrc,
    );
  
    // create a "standard" material
    const material = new MeshStandardMaterial({ 
      map: texture
    });
    
    return material;
}