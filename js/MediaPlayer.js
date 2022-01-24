class MediaPlayer {
    constructor (video) {
        this.video = video;
    } 
    togglePlay () {
        this.video.paused ? this.video.play() : this.video.pause();
    }
 }

 export default MediaPlayer;