import { createCamera } from './components/camera.js';
import { createTable } from './components/table.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createDisk } from './components/disk.js';
import { createFloor} from './components/floor.js';


import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { createAudio } from './systems/audio.js';
import { createListener } from './systems/listener.js';
import { Loop } from './systems/Loop.js';

import ProjectUtopia from './sounds/Project_Utopia.ogg';


let scene;
let camera;
let renderer;
let listener;
let loop;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    listener = createListener();

    loop = new Loop(camera, scene, renderer)
    
    container.append( renderer.domElement );

    const table = createTable();
    const disk = createDisk();
    const light = createLights();
    const floor = createFloor();
   

    // Animate disk
    loop.updatables.push(disk);

    // initialize audio 
    this.initAudio();

    scene.add(disk, table, light, floor);

    const resizer = new Resizer(container, camera, renderer);

  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  startAnimation() {
    loop.start();
  }

  stopAnimation() {
    loop.stop();
  }

  initAudio() {
    this.audio = createAudio( listener );
    camera.add( listener ); // for audio to play
    this.sound = this.audio[0];
    const audioLoader = this.audio[1];
    audioLoader.load( ProjectUtopia , ( buffer ) => {
      this.sound.setBuffer( buffer );
      this.sound.setLoop( true );
      this.sound.setVolume( 0.5 );
    });
  }

  playAudio() {
    this.sound.play();
  }

  pauseAudio() {
    this.sound.pause();
  }
}

export { World };
