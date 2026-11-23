// Interacciones sencillas del sitio web colaborativo.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav-menu');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menuButton.textContent = open ? '✕' : '☰';
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    menuButton.textContent = '☰';
  }));
}
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
