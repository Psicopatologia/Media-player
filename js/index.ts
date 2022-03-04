import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/ads"

const video = document.querySelector("video");
const playButton: HTMLElement = document.getElementById("play");
const muteButton: HTMLElement = document.getElementById("mute");
const player = new MediaPlayer(video, [new AutoPlay(), new AutoPause(), new Ads()]);

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(new URL('/sw.js', import.meta.url)).catch(error => {
        console.log(error.message)
    })
} 