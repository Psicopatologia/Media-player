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

    togglePlay () {
        this.video.paused ? this.play() : this.pause();
    }

    _initPlugins() {
        this.plugins.forEach(
            plugin => plugin.run(this)
        );
    }
 }

 export default MediaPlayer;