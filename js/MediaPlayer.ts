class MediaPlayer {
    video: HTMLMediaElement;
    plugins: Array<any>;

    constructor (video, plugins=[]) {
        this.video = video;
        this.plugins = plugins;
        this.initPlugins();
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

    private initPlugins() {
        this.plugins.forEach(
            plugin => plugin.run(this)
        );
    }
 }

 export default MediaPlayer;