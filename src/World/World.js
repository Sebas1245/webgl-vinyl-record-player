import { createCamera } from './components/camera.js';
import { createTable } from './components/table.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createDisk } from './components/disk.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { createAudio } from './systems/audio.js';
import { createListener } from './systems/listener.js';
import { Loop } from './systems/Loop.js';

import { playAudio } from './actions/playAudio.js'

let scene;
let camera;
let renderer;
let listener;
let audio;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer)
    listener = createListener();
    audio = createAudio( listener );
    camera.add( listener ); // for audio to play
    playAudio( audio );
    
    container.append( renderer.domElement );

    const table = createTable();
    const disk = createDisk();
    const light = createLights();

    // Animate disk
    loop.updatables.push(disk);

    scene.add(disk, table, light);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
