const body = document.body;
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');

export default function () {
  sun.addEventListener('click', () => {
    moon.classList.remove('hide');
    sun.classList.add('hide');
    body.classList.add('dark');
  });

  moon.addEventListener('click', () => {
    moon.classList.add('hide');
    sun.classList.remove('hide');
    body.classList.remove('dark');
  });
}
