let video = document.getElementById("video1");

function retroceder() {
  video.currentTime -= 10;
}

function avancar() {
  video.currentTime += 10;
}

function diminuir_vel() {
  video.playbackRate -= 0.1;
}

function aumentar_vel() {
  video.playbackRate += 2;
}

function play() {
  video.play();
}

function stop() {
  video.pause();
  // video.currentTime = 0;
}

// function esconder() {
//   console.log("oi");
//   let controls = document.querySelector(".controle");
//   if(controls.style.visibility = "hidden"; ){
//     controls.style.visibility = "hidden"; 
//   }
// }
