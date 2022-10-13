import {
    CircleGeometry,
    Mesh,
    MeshStandardMaterial
 } from "three";

function createDisk() {
    const disk_geometry = new CircleGeometry(0.80, 32);
    const disk_material = new MeshStandardMaterial( {color: "black"} );
    const disk = new Mesh(disk_geometry, disk_material);

    disk.position.set(-0.1, 0.5, 1);
    disk.rotation.set(-0.5, -0.1, 0.8);

    const inner_circle_geometry = new CircleGeometry(0.10, 32);
    const inner_circle_material = new MeshStandardMaterial( {color: "white"} );
    const inner_circle = new Mesh(inner_circle_geometry, inner_circle_material);

    disk.add(inner_circle);

    return disk;
}

export { createDisk }