import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/style.sass';


document.addEventListener('DOMContentLoaded', () => {
  const humburger = document.querySelector('.button');
  const navlist = document.querySelector('.nav-list');
  const presentationBlock = document.querySelector('.presentation');

  humburger.addEventListener('click', () => {
    presentationBlock.classList.toggle('visibility-hidden');
    humburger.classList.toggle('active');
    navlist.classList.toggle('dropdown');
  });
});