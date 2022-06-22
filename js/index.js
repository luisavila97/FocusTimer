import Audios from './audios.js';
const audio = Audios();
const endTimerAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
);

const buttonPlay = document.querySelector('#play');
const buttonStop = document.querySelector('#stop');
const buttonPlus = document.querySelector('#plus');
const buttonMinus = document.querySelector('#minus');

const minutesDisplay = document.querySelector('#minutes');
const secondsDisplay = document.querySelector('#seconds');

let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);
let timer;

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('active');
  buttonStop.classList.remove('active');

  clearTimeout(timer);
  countdown();
});

buttonStop.addEventListener('click', function () {
  buttonStop.classList.add('active');
  buttonPlay.classList.remove('active');

  clearTimeout(timer);
  minutes = 25;
  seconds = 0;
  updateDisplay(minutes, seconds);
});

buttonPlus.addEventListener('click', () => {
  minutes += 5;
  updateDisplay(minutes, seconds);
});

buttonMinus.addEventListener('click', () => {
  minutes -= 5;
  if (minutes <= 0) {
    minutes = 0;
  }
  updateDisplay(minutes, seconds);
});

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function countdown() {
  timer = setTimeout(() => {
    if (seconds <= 0) {
      minutes--;
      updateDisplay(minutes);

      seconds = 60;
    }
    seconds--;

    if (minutes < 0) {
      minutes = 0;
      seconds = 0;
      endTimerAudio.play();
      updateDisplay(minutes, seconds);
      return;
    }

    updateDisplay(minutes, seconds);
    countdown();
  }, 1000);
}
