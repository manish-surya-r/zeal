/**
 * particles.js
 * Injects subtle floating geometric micro-dots into #particle-container.
 */

(function () {
  const container = document.getElementById("particle-container");
  if (!container) return;

  const PARTICLE_COUNT = 30;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement("div");
    p.className = "geometric-shape float-animation";

    const size = Math.random() * 2 + 1;

    p.style.width            = `${size}px`;
    p.style.height           = `${size}px`;
    p.style.backgroundColor  = "#000";
    p.style.left             = `${Math.random() * 100}%`;
    p.style.top              = `${Math.random() * 100}%`;
    p.style.opacity          = Math.random() * 0.05;
    p.style.animationDelay   = `${Math.random() * 10}s`;

    container.appendChild(p);
  }
})();
