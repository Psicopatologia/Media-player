class MediaPlayer {
    constructor (video, plugins=[]) {
        this.video = video;
        this.plugins = plugins;
        this._initPlugins();
    }

    play() {
        this.video.play();
    }
    
    pause() {
        this.video.pause();
    }

    mute() {
        this.video.muted = true;
    }

    unmute() {
        this.video.muted = false;
    }

    togglePlay () {
        this.video.paused ? this.play() : this.pause();
    }

    toggleMute() {
        this.video.muted ? this.unmute() : this.mute(); 
    }

    _initPlugins() {
        this.plugins.forEach(
            plugin => plugin.run(this)
        );
    }
 }

 export default MediaPlayer;