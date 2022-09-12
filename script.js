const btn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

const navToggle = () => {
  btn.classList.toggle('open');
  mobileMenu.classList.toggle('flex');
  mobileMenu.classList.toggle('hidden');
};

btn.addEventListener('click', navToggle);
