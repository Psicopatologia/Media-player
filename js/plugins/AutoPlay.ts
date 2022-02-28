import MediaPlayer from "../MediaPlayer";

class AutoPlay {
    run (player: MediaPlayer) {
        if (!player.video.muted) {
            player.video.muted = true;
        }
        player.play();
    }
}

export default AutoPlay;