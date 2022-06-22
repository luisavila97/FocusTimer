export default function () {
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

  buttonForest.addEventListener('click', function () {
    buttonForest.classList.toggle('active');

    if (buttonForest.classList.contains('active')) {
      forestAudio.play();
    } else {
      forestAudio.pause();
    }
  });

  buttonRain.addEventListener('click', function () {
    buttonRain.classList.toggle('active');

    if (buttonRain.classList.contains('active')) {
      rainAudio.play();
    } else {
      rainAudio.pause();
    }
  });

  buttonCafeteria.addEventListener('click', function () {
    buttonCafeteria.classList.toggle('active');

    if (buttonCafeteria.classList.contains('active')) {
      cafeteriaAudio.play();
    } else {
      cafeteriaAudio.pause();
    }
  });

  buttonFire.addEventListener('click', function () {
    buttonFire.classList.toggle('active');

    if (buttonFire.classList.contains('active')) {
      fireAudio.play();
    } else {
      fireAudio.pause();
    }
  });
}
