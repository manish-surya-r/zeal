/**
 * morphing-background.js
 * Injects animated morphing shapes into #morphing-background-container.
 */

(function () {
  const container = document.getElementById("morphing-background-container");
  if (!container) return;

  const SHAPES_COUNT = 6;

  function createMorphingShape() {
    const shape = document.createElement("div");
    shape.className = "morphing-shape";

    const size     = Math.random() * 300 + 150;
    const x        = Math.random() * 100;
    const y        = Math.random() * 100;
    const delay    = Math.random() * -20;
    const duration = 15 + Math.random() * 10;
    const opacity  = 0.03 + Math.random() * 0.07;
    const color    = Math.random() > 0.5 ? "#000000" : "#ffffff";

    shape.style.width            = `${size}px`;
    shape.style.height           = `${size}px`;
    shape.style.left             = `${x}%`;
    shape.style.top              = `${y}%`;
    shape.style.backgroundColor  = color;
    shape.style.opacity          = opacity;
    shape.style.animationDelay   = `${delay}s`;
    shape.style.animationDuration = `${duration}s`;

    // Randomise the starting primitive shape
    const startState = Math.floor(Math.random() * 3);
    if      (startState === 0) shape.style.borderRadius = "50%";  // circle
    else if (startState === 1) shape.style.borderRadius = "0%";   // square
    else                       shape.style.borderRadius = "20%";  // rounded rect

    container.appendChild(shape);
  }

  for (let i = 0; i < SHAPES_COUNT; i++) {
    createMorphingShape();
  }
})();
