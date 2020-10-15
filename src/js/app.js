import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/style.sass';


document.addEventListener('DOMContentLoaded', () => {
  const humburger = document.querySelector('.button');
  const navlist = document.querySelector('.nav-list');
  const loginButton = document.querySelector('.login-btn');
  const navLoginButton = document.querySelector('.nav-list-login');

  humburger.addEventListener('click', () => {
    loginButton.classList.toggle('display-none');
    navLoginButton.classList.toggle('nav-list-login');
    humburger.classList.toggle('active');
    navlist.classList.toggle('dropdown');
  });
});