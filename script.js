var playBtn = document.getElementById("playBtn");
var musicDiv = document.querySelector(".music");

var wavesurfer = WaveSurfer.create({
  container: "#wavefrom",
  waveColor: "white",
  progressColor: "#EA0505",
  barWidth: 3,
  responsive: true,
  height: 30,
  barRadius: 2,
});

wavesurfer.load("images/Comot.mp3");

playBtn.onclick = function () {
  wavesurfer.playPause();
  if (playBtn.src.includes("play.png")) {
    playBtn.src = "images/pauseR.png";
    musicDiv.style.backgroundColor = "#EA0505";
  } else {
    playBtn.src = "images/play.png";
    musicDiv.style.backgroundColor = "black";
  }
};

wavesurfer.on("finish", function () {
  playBtn.src = "images/play.png";
  musicDiv.style.backgroundColor = "black";
  wavesurfer.stop();
});
