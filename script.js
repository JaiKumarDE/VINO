const revealElements = document.querySelectorAll('.reveal');
const nav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2,
});

revealElements.forEach((element) => observer.observe(element));

window.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header') && nav.classList.contains('open')) {
    nav.classList.remove('open');
  }
});
