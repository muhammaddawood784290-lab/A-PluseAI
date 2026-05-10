// Barba.js initialization and simple fade transition
// Assumes Barba.js is loaded via CDN in the HTML

document.addEventListener('DOMContentLoaded', function() {
  if (window.barba && window.gsap) {
    window.barba.init({
      transitions: [
        {
          name: 'fade',
          leave(data) {
            return window.gsap.to(data.current.container, {
              opacity: 0,
              duration: 0.5
            });
          },
          enter(data) {
            return window.gsap.from(data.next.container, {
              opacity: 0,
              duration: 0.5
            });
          }
        }
      ]
    });
  }
});
