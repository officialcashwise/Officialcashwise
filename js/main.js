const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');

if (toggle && menu) {
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('active');
  });
  
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('active');
    }
  });
  
  window.addEventListener('scroll', () => {
    menu.classList.remove('active');
  });
}