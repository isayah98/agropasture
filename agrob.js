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
