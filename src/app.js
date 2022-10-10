import {
    BoxGeometry,
    CameraHelper,
    Color,
    CylinderGeometry,
    Mesh,
    MeshBasicMaterial,
    MeshDepthMaterial,
    PerspectiveCamera, 
    Scene, 
    WebGLRenderer, } from 'three';
import WebGL from './WebGL';


function main() {
    // Only if we have WebGL available should we display our animations
    if ( WebGL.isWebGLAvailable() ) {
        // basic setup of the scene, camera and renderer to append it to the DOM
        const scene = new Scene();
        const sceneBackgroundColor = new Color( 0xFFFFFF );
        scene.background = sceneBackgroundColor;
        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const renderer = new WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );
        
        // candidate for refactoring into another function outside the main function
        const leg = (xpos, ypos, zpos) => {
            const legMaterial = new MeshBasicMaterial({color: 'black'});
            const legGeometry = new CylinderGeometry(1, 1, 8, 32)
            const legMesh = new Mesh(legGeometry, legMaterial);
            legMesh.position.x = xpos;
            legMesh.position.y = ypos;
            legMesh.position.z = zpos;
            return legMesh;
        }

        const tableTopGeometry = new BoxGeometry(9.5, 0.75, 7);
        const tableTopMaterial = new MeshBasicMaterial({color: 'black'})
        const tableTopMesh = new Mesh(tableTopGeometry, tableTopMaterial);
        tableTopMesh.position.x = 4;
        tableTopMesh.position.z = 0;
        tableTopMesh.position.y = 6;

        scene.add(leg(0, 0, 0));
        scene.add(leg(8, 0, 0));
        scene.add(leg(0, 0, -8));
        scene.add(leg(8, 0, -8));
        scene.add(tableTopMesh);

        camera.position.z = 35;
        camera.position.y = 20;
        camera.position.x = 10;
        const helper = new CameraHelper( camera );
        scene.add( helper );
        renderer.render( scene, camera );
    } else {
        const warning = WebGL.getWebGLErrorMessage();
	    document.getElementById( 'container' ).appendChild( warning );
    }
}

main()