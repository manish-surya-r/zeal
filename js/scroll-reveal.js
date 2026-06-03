/**
 * scroll-reveal.js
 * Uses IntersectionObserver to add the "active" class to
 * every .reveal-on-scroll element as it enters the viewport.
 */

(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
})();
