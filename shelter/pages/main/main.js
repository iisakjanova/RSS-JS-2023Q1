document.getElementById('focus-main-nav').focus();

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const links = nav.querySelectorAll('a');

document.addEventListener('click', (event) => {
  if (!nav.contains(event.target) && !burger.contains(event.target)) {
    nav.classList.remove('show');
    burger.classList.remove('burger-active');
    document.body.style.overflow = 'auto';
  }
});

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
    burger.classList.remove('burger-active');
    document.body.style.overflow = 'auto';
  });
});

burger.addEventListener('click', () => {
  nav.classList.toggle('show');
  burger.classList.toggle('burger-active');

  if (nav.classList.contains('show')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});