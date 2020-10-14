import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/style.sass';


document.addEventListener('DOMContentLoaded', () => {
  const humburger = document.querySelector('.button');
  const navlist = document.querySelector('.nav-list');

  humburger.addEventListener('click', () => {
    humburger.classList.toggle('active');
    navlist.classList.toggle('dropdown');
  });
});