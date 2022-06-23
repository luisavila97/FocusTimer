import Audios from './audios.js';
import DarkMode from './darkMode.js';

DarkMode();
Audios();
const endTimerAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
);
endTimerAudio.volume = 0.3;

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
  updateDisplay();
});

buttonPlus.addEventListener('click', () => {
  minutes += 5;
  updateDisplay();
});

buttonMinus.addEventListener('click', () => {
  minutes -= 5;
  if (minutes <= 0) {
    minutes = 0;
  }
  updateDisplay();
});

function updateDisplay() {
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

function countdown() {
  timer = setTimeout(() => {
    if (seconds <= 0) {
      minutes--;
      updateDisplay();

      seconds = 60;
    }
    seconds--;

    if (minutes < 0) {
      minutes = 0;
      seconds = 0;
      endTimerAudio.play();
      updateDisplay();
      return;
    }

    updateDisplay();
    countdown();
  }, 1000);
}
