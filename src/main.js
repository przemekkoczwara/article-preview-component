import './sass/main.scss';

const button = document.getElementById('button');
const detailsAbout = document.querySelector('.details__about');
const footer = document.getElementById('footer');

button.addEventListener('click', function () {
  const viewportWidth = window.innerWidth;
  if (viewportWidth < 768) {
    detailsAbout.classList.toggle('hide');
    footer.classList.toggle('active');
  } else {
    footer.classList.toggle('active');
  }
});
