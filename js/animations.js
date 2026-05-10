document.addEventListener('DOMContentLoaded', function() {
  // Fade-in animation for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.classList.add('fade-in');
  }

  // Slide-in animation for hero-left and hero-right
  const heroLeft = document.querySelector('.hero-left');
  const heroRight = document.querySelector('.hero-right');
  if (heroLeft) {
    heroLeft.classList.add('slide-in-left');
  }
  if (heroRight) {
    heroRight.classList.add('slide-in-right');
  }

  // Button hover animation (pulse)
  const buttons = document.querySelectorAll('.primary-btn, .secondary-btn, .nav-btn');
  buttons.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      btn.classList.add('pulse');
    });
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('pulse');
    });
  });
});
