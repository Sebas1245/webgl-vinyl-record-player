import { createCamera } from './components/camera.js';
import { createTable } from './components/table.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createDisk } from './components/disk.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { createAudio } from './systems/audio.js';
import { createListener } from './systems/listener.js';

import { playAudio } from './actions/playAudio.js'

let scene;
let camera;
let renderer;
let listener;
let audio;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    listener = createListener();
    audio = createAudio( listener );
    camera.add( listener ); // for audio to play
    playAudio( audio );
    
    container.append( renderer.domElement );

    const table = createTable();
    const disk = createDisk();
    const light = createLights();

    scene.add(disk, table, light);

    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
