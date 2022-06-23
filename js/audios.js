const buttonForest = document.querySelector('#forest');
const buttonRain = document.querySelector('#rain');
const buttonCafeteria = document.querySelector('#cafeteria');
const buttonFire = document.querySelector('#fire');

const forestAudio = new Audio('./audios/Floresta.wav');
const rainAudio = new Audio('./audios/Chuva.wav');
const cafeteriaAudio = new Audio('./audios/Cafeteria.wav');
const fireAudio = new Audio('./audios/Lareira.wav');

const volumeControlForest = document.querySelector('#volume-control-forest');
const volumeControlRain = document.querySelector('#volume-control-rain');
const volumeControlCafeteria = document.querySelector('#volume-control-cafeteria');
const volumeControlFire = document.querySelector('#volume-control-fire');

forestAudio.loop = true;
rainAudio.loop = true;
cafeteriaAudio.loop = true;
fireAudio.loop = true;

const sectionForest = document.querySelector('#section-forest');
const sectionRain = document.querySelector('#section-rain');
const sectionCafeteria = document.querySelector('#section-cafeteria');
const sectionFire = document.querySelector('#section-fire');

function changeVolume(audio, volumeControl) {
  audio.volume = volumeControl.value;
}

function clickEvent(section, audio) {
  section.classList.toggle('active');

  if (section.classList.contains('active')) {
    audio.play();
  } else {
    audio.pause();
  }
}

function addClickEventListener(btn, section, audio) {
  btn.addEventListener('click', () => {
    clickEvent(section, audio);
  });
}

function addChangeEventListener(volumeControl, audio) {
  volumeControl.addEventListener('change', () => {
    changeVolume(audio, volumeControl);
  });
}

export default function () {
  addClickEventListener(buttonForest, sectionForest, forestAudio);
  addClickEventListener(buttonRain, sectionRain, rainAudio);
  addClickEventListener(buttonCafeteria, sectionCafeteria, cafeteriaAudio);
  addClickEventListener(buttonFire, sectionFire, fireAudio);

  addChangeEventListener(volumeControlForest, forestAudio);
  addChangeEventListener(volumeControlRain, rainAudio);
  addChangeEventListener(volumeControlCafeteria, cafeteriaAudio);
  addChangeEventListener(volumeControlFire, fireAudio);
}
