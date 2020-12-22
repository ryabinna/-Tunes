export const videoPlayerInit = () => {
    
    const videoPlayer  = document.querySelector('.video-player');
    const videoButtonPlay = document.querySelector('.video-button__play');
    const videoButtonStop = document.querySelector('.video-button__stop');
    const videoTimePassed = document.querySelector('.video-time__passed');
    const videoProgress = document.querySelector('.video-progress');
    const videoTimeTotal = document.querySelector('.video-time__total');

  
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

    videoProgress.addEventListener('change', () => {
        videoPlayer.currentTime = (videoPlayer.duration * videoProgress.value) / 100;
    })



}