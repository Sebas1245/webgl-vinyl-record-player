import { World } from './World/World.js';
import WebGL from './WebGL.js';

function main() {

  if (WebGL.isWebGLAvailable) {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');
  
    // create a new world
    const world = new World(container);
  
    // start the animation loop
    world.start();

  } else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById( 'scene-container' ).appendChild( warning );
  }
}

main();