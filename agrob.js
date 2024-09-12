 // Add JavaScript to handle hovering over each item and adjust the scroll-content position accordingly
  const scrollItems = document.querySelectorAll('.scroll-item');

  scrollItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const scrollContent = item.closest('.scroll-content');
      scrollContent.style.transform = 'translateX(-200px)';
    });

    item.addEventListener('mouseleave', () => {
      const scrollContent = item.closest('.scroll-content');
      scrollContent.style.transform = 'translateX(0)';
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu on click
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    } else {
        console.error('Menu icon element not found.');
    }

    // Handle screen resizing
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('active');
        }
    });
});

document.getElementById('anafa').innerHTML('HI')
