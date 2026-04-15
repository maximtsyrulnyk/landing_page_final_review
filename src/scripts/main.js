'use strict';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Project is ready!');

  // Приклад логіки для плавного скролу
  const links = document.querySelectorAll('.nav__link');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const id = link.getAttribute('href');
      const element = document.querySelector(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
