const buttonForest = document.querySelector('#forest');
const buttonRain = document.querySelector('#rain');
const buttonCafeteria = document.querySelector('#cafeteria');
const buttonFire = document.querySelector('#fire');

const forestAudio = new Audio('./audios/Floresta.wav');
const rainAudio = new Audio('./audios/Chuva.wav');
const cafeteriaAudio = new Audio('./audios/Cafeteria.wav');
const fireAudio = new Audio('./audios/Lareira.wav');

forestAudio.loop = true;
rainAudio.loop = true;
cafeteriaAudio.loop = true;
fireAudio.loop = true;

const volumeControlForest = document.querySelector('#volume-control-forest');
const volumeControlRain = document.querySelector('#volume-control-rain');
const volumeControlCafeteria = document.querySelector('#volume-control-cafeteria');
const volumeControlFire = document.querySelector('#volume-control-fire');

const sectionForest = document.querySelector('#section-forest');
const sectionRain = document.querySelector('#section-rain');
const sectionCafeteria = document.querySelector('#section-cafeteria');
const sectionFire = document.querySelector('#section-fire');

export {
  buttonForest,
  buttonRain,
  buttonCafeteria,
  buttonFire,
  forestAudio,
  rainAudio,
  cafeteriaAudio,
  fireAudio,
  volumeControlForest,
  volumeControlRain,
  volumeControlCafeteria,
  volumeControlFire,
  sectionForest,
  sectionRain,
  sectionCafeteria,
  sectionFire,
};
