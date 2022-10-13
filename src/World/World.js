import { createCamera } from './components/camera.js';
import { createTable } from './components/table.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createDisk } from './components/disk.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

let scene;
let camera;
let renderer;

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const table = createTable();
    const disk = createDisk();
    const light = createLights();

    scene.add(disk, table, light);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }
}

export { World };
