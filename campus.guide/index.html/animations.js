document.addEventListener("DOMContentLoaded", function() {
  const elementsToAnimate = document.querySelectorAll(
    '.hero-content, .about-content, .container, .card, .calendar-card, .key-dates-list, .page-header-content'
  );

  elementsToAnimate.forEach(el => {
    el.classList.add('reveal');
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.1, 
    rootMargin: "0px 0px -50px 0px" 
  });

  elementsToAnimate.forEach(el => {
    observer.observe(el);
  });
});