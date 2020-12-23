export const videoPlayerInit = () => {
    
    const videoPlayer  = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimeTotal = document.querySelector('.video-time__total');

<<<<<<< HEAD

    const volumeButtonLow = document.querySelector('.volume-button__low');
    const volumeRange = document.querySelector('.volume-range');
    const volumeButtonUp = document.querySelector('.volume-button__up');
    const volumeButtonOff = document.querySelector('.volume-button__off');
    const fullScrinButton = document.querySelector('.fullScrin-button');

   videoPlayer.volume = volumeRange.value; // установим громкость при первоначальном включении на уровень ползунка, то есть на середину

=======
  
>>>>>>> d43e33fd7b36165e759d4b5eda128f87077405c3
    const toggleVideo = () => {
        if (videoPlayer.paused) {
            videoPlayer.play();
            videoButtonPlay.classList.remove('fa-pause');
            videoButtonPlay.classList.add('fa-play');
        } 
            else {
                videoPlayer.pause();
                videoButtonPlay.classList.add('fa-pause');
                videoButtonPlay.classList.remove('fa-play');
            }
    }
  
    const addZero = n => n < 10 ? '0' + n : n;

    const secAndMin = n => {
        const minutes = Math.floor (n / 60);
        const seconds = Math.floor (n % 60); 
        return addZero(minutes) + ':' + addZero(seconds);
    } 

    videoPlayer.addEventListener('click', toggleVideo);
    videoButtonPlay.addEventListener('click', toggleVideo);


    videoButtonStop.addEventListener('click', () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
    })


    videoPlayer.addEventListener('timeupdate', () => {
        const currentTime = videoPlayer.currentTime;
        const duration = videoPlayer.duration;
        videoTimePassed.textContent = secAndMin(currentTime);
        videoTimeTotal.textContent = secAndMin(duration);
        videoProgress.value = (currentTime / duration) * 100;
    })

<<<<<<< HEAD
    videoProgress.addEventListener('input', () => {
        videoPlayer.currentTime = (videoPlayer.duration * videoProgress.value) / 100;
    })

    fullScrinButton.addEventListener('click', () => {  //выводим изображение в полноэкранный режим
        videoPlayer.requestFullscreen();
    })

    volumeRange.addEventListener('input', () => { // регулировка громкости рэнджем. В отличии от урока сразу рендж сделела со шкалой от 0 до 1 с шагом 0,2
        const value = volumeRange.value;
        videoPlayer.volume = value ;
    })

    volumeButtonUp.addEventListener('click', () => { //увеличение громкости по нажатию на иконку
        const currentVolume =  videoPlayer.volume;
        if (currentVolume <= 0.9) {
            videoPlayer.volume = currentVolume + 0.1;
            volumeRange.value = videoPlayer.volume;
        }
    })

    volumeButtonLow.addEventListener('click', () => { //уменьшение громкости по нажатию на иконку
        const currentVolume =  videoPlayer.volume;
        if (currentVolume >= 0.1) {
            videoPlayer.volume = currentVolume - 0.1;
            volumeRange.value = videoPlayer.volume;
        }
    })

    volumeButtonOff.addEventListener('click', ()=> { //выключение звука. При выключении иконка становится красной
       if (videoPlayer.volume == 0) {
            videoPlayer.volume = volumeRange.value;
            volumeButtonOff.classList.remove('mute-red');
            return;
        }
        if (videoPlayer.volume > 0) {
            videoPlayer.volume = 0;
            volumeButtonOff.classList.add('mute-red');
        }
    })
=======
    videoProgress.addEventListener('change', () => {
        videoPlayer.currentTime = (videoPlayer.duration * videoProgress.value) / 100;
    })


>>>>>>> d43e33fd7b36165e759d4b5eda128f87077405c3

}