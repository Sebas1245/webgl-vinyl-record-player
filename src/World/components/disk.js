import {
    CircleGeometry,
    Mesh,
    MeshStandardMaterial
 } from "three";
import { createMaterial } from "../actions/createMaterial";
import VinylTextureSrc from '../textures/vinyl-texture-2.jpeg';


function createDisk() {
    const disk_geometry = new CircleGeometry(0.80, 32);
    const disk_material = createMaterial(VinylTextureSrc);
    const disk = new Mesh(disk_geometry, disk_material);

    disk.position.set(-0.1, 0.5, 1);
    disk.rotation.set(-0.5, -0.1, 0.8);

    const inner_circle_geometry = new CircleGeometry(0.10, 32);
    const inner_circle_material = new MeshStandardMaterial( {color: "white"} );
    const inner_circle = new Mesh(inner_circle_geometry, inner_circle_material);

    disk.add(inner_circle);

    disk.tick = () => {
        // increase the disk's rotation each frame
        disk.rotation.z += 0.01;
        // disk.rotation.x += 0.01;
        // disk.rotation.y += 0.01;
      }

    return disk;
}

export { createDisk }