import {
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
} from './variables.js';

import { addClickEventListener, addChangeEventListener } from './functions.js';

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
