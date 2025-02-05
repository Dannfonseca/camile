document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById('menuIcon');
    const menu = document.getElementById('menu');
  
    menuIcon.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  });