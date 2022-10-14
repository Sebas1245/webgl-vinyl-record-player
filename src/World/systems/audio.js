import { 
    Audio,
    AudioLoader
 } from "three";

function createAudio( listener ) {
    // create global audio source
    const sound = new Audio( listener );
    const audioLoader = new AudioLoader();
    return [sound, audioLoader];
}

export { createAudio };