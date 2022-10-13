import { 
    CircleGeometry,
    Mesh,
    MeshStandardMaterial
 } from "three";

function createDisc() {
    const geometry = new CircleGeometry(0.5, 32);
    const material = new MeshStandardMaterial( {color: "black"} );
    const circle = new Mesh(geometry, material);

    circle.position.set(5, 2, 0);
    circle.rotation.set(-0.5, -0.1, 0.8);


    return circle;
}

export { createDisc }