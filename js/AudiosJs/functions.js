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

export { addChangeEventListener, addClickEventListener };
