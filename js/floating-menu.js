document.addEventListener("DOMContentLoaded", function() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('#floating-menu ul');

  menuToggle.addEventListener('click', function() {
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });
});
