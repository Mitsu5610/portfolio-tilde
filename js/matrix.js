/* ============================================
   matrix.js — Hero Matrix Canvas Background
   ============================================ */

'use strict';

function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const ctx      = canvas.getContext('2d');
  const chars    = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
  const fontSize = 12;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();

  const cols  = Math.floor(canvas.width / fontSize);
  const drops = Array(cols).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(8,8,8,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#E8000D';
    ctx.font      = `${fontSize}px Space Mono, monospace`;

    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }

  setInterval(draw, 50);
  window.addEventListener('resize', resize);
}

initMatrix();