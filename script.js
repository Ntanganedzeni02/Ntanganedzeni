// Fade-in for gallery images on scroll
const faders = document.querySelectorAll('.gallery img');

const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(img => appearOnScroll.observe(img));
