import { DirectionalLight } from 'three';

function createLights() {
  // Create a directional light
  const light = new DirectionalLight('white', 5);
  
  // move the light right, up, and towards us
  light.position.set(-10, 10, 40);
  light.castShadow = true;
  return light 
}

export { createLights };
