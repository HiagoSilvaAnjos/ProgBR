const video = document.querySelector('#video');

function play() {
    video.play();
}

function pause() {
    video.pause();
    console.log(video.currentTime);
}

function retroceder() {
    video.currentTime -= 10;
}

function avancar() {
    video.currentTime += 10;
}

function diminuir() {
    video.playbackRate -= 0.1;
    console.log(video.playbackRate -= 0.1);
    if (video.playbackRate == 0.20000000000000015) {
        video.playbackRate = 0.40000000000000013;
    }
}

function aumentar() {
    video.playbackRate += 0.1;
}

function parar() {
    video.pause
    video.currentTime = 0;
}

function reiniciar() {
    video.load();
}

function telaCheia () {
    if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
      } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
      }
}