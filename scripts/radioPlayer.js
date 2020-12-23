export const radioPlayerInit = () => {
     

    const radio  = document.querySelector('.radio'); 
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioCoverImg  = document.querySelector('.radio-cover__img');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioBtns = document.querySelectorAll('.radio-btn');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;
    
    const stopAndPlay = () => {    //остановка и пуск радио
        if (audio.paused) {
            audio.play();
            radio.classList.add('play');
            radioStop.classList.remove('fa-stop');
            radioStop.classList.add('fa-play');
        } else {
            audio.pause();
            radio.classList.remove('play');
            radioStop.classList.add('fa-stop');
            radioStop.classList.remove('fa-play');
         }
    }


    const pauseAndPlayOfCurrentStantion = () => { //функционал: если нажать на играющую станцию, она становится на паузу (не всегда срабатывает)
        radioBtns.forEach(item  => {
            if (item.checked) {
                item.addEventListener('click', () => {
                    stopAndPlay();
                })
            }
         })
    }
     

    radioNavigation.addEventListener('change', (event) => {
        pauseAndPlayOfCurrentStantion();
        const target = event.target;
        audio.src = target.dataset.radioStantion;
        radioStop.disabled = false;
        stopAndPlay();
        const parrent = target.closest('.radio-item');
        radioItem.forEach(item => {
            item.classList.remove('select');
        })
        parrent.classList.add('select');
        const imgUrl = parrent.querySelector('.radio-img').src;
        radioCoverImg.src = imgUrl;
        const nameStantion = parrent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = nameStantion;
    })

    radioStop.addEventListener('click', () => {
       stopAndPlay();
    })




}