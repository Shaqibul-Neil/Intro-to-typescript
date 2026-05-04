//idea
//clear implementation later

//implementation type :
//interface
//abstract class

//interface
/*
interface TMediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}
//implementation
class MusicPlayer implements TMediaPlayer {
  play(): void {
    console.log("interface -- Music is playing...");
  }
  pause(): void {
    console.log("interface -- Music is paused.");
  }
  stop(): void {
    console.log("interface -- Music stopped.");
  }
}

const myPlayer = new MusicPlayer();
myPlayer.play();
myPlayer.pause();
myPlayer.stop();
*/

//abstract class
abstract class TMediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}
//implementation
class MusicPlayer extends TMediaPlayer {
  play(): void {
    console.log("Abstract -- Music is playing...");
  }
  pause(): void {
    console.log("Abstract -- Music is paused.");
  }
  stop(): void {
    console.log("Abstract -- Music stopped.");
  }
}

const myPlayer = new MusicPlayer();
myPlayer.pause();
myPlayer.play();
myPlayer.stop();
