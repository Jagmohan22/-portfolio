document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    
    const targetSection = document.querySelector(this.getAttribute('href'));
    
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});
