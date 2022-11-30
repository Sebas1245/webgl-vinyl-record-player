import { World } from './World/World.js';
import WebGL from './WebGL.js';

function main() {
  
  if (WebGL.isWebGLAvailable) {
    // Get a reference to the container element
    const container = document.querySelector('#scene-container');
  
    // create a new world
    const world = new World(container);
    // start and stop the animation in 100ms to enable the rendering of sufficient frames to load the entire scene
    world.startAnimation();
    setTimeout(() => {
      world.stopAnimation();
    }, 100);
  
    // song controller 
    const startSongBtn = document.getElementById('start-song-btn');
    const pauseSongBtn = document.getElementById('pause-song-btn');
    startSongBtn.onclick = () => {
      world.playAudio();
      // start the animation loop
      world.startAnimation();
      startSongBtn.style.display = 'none';
      pauseSongBtn.style.display = 'block';
    };

    pauseSongBtn.onclick = () => {
      world.pauseAudio();
      world.stopAnimation();
      pauseSongBtn.style.display = 'none';
      startSongBtn.style.display = 'block';
    }



  } else {
    const warning = WebGL.getWebGLErrorMessage();
    document.getElementById( 'scene-container' ).appendChild( warning );
  }
  const canvas = document.getElementById('canvas');
  gl = canvas.getContext('webgl');
  const ext = gl.getExtension('WEBGL_depth_texture');
  if(!ext){
    return alert('need WEBGL_depth_texture');
  }
}

main();