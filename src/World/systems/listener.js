import { AudioListener } from "three";

function createListener() {
    const listener = new AudioListener();

    return listener;
}

export { createListener };