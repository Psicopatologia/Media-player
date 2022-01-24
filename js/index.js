const video = document.querySelector("video");
const button = document.querySelector("button");

class mediaPlayer {
    constructor (video) {
        this.video = video;
    } 
    togglePlay () {
        video.paused ? video.play() : video.pause();
    }
 }

const player = new mediaPlayer(video);

button.onclick = () => player.togglePlay();