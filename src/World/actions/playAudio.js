import ProjectUtopia from '../sounds/Project_Utopia.ogg'
function playAudio ( audio ) {
    console.log(ProjectUtopia);
    const sound = audio[0];
    const audioLoader = audio[1];
    audioLoader.load( ProjectUtopia , function( buffer ) {
        sound.setBuffer( buffer );
        sound.setLoop( true );
        sound.setVolume( 0.5 );
        sound.play();
      });
}

export { playAudio };