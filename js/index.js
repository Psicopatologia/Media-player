import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";


const video = document.querySelector("video");
const play = document.getElementById("play");
const mute = document.getElementById("mute");
const player = new MediaPlayer(video, [new AutoPlay(), new AutoPause()]);

play.onclick = () => player.togglePlay();
mute.onclick = () => player.toggleMute();