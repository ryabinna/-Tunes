import { videoPlayerInit } from './videoPlayer.js'
import { radioPlayerInit } from './radioPlayer.js'
import { musicPlayerInit } from './musicPlayer.js'

const playerBtn = document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');


const playerDeactivation = () => {
    temp.style.display = 'none';
    playerBtn.forEach(item => item.classList.remove('active'));
    playerBlock.forEach(item => item.classList.remove('active'));
}

const playerActivation = () => {
    playerBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            playerDeactivation();
            playerBlock[index].classList.add('active');
        })
    })
}

playerActivation();

videoPlayerInit();
radioPlayerInit();
musicPlayerInit();