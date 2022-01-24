import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/Autoplay.js"

const video = document.querySelector("video");
const play = document.getElementById("play");
const player = new MediaPlayer(video, [new AutoPlay()]);

play.onclick = () => player.togglePlay();