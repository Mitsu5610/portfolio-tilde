/* ============================================
   animations.js — Skill Bars, Count Up, Glitch, Particles
   ============================================ */

'use strict';

// ── Skill Bar Animation ──
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('animated');
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-bar-fill').forEach(bar => barObserver.observe(bar));

// ── Count Up ──
function countUp(el) {
  const target   = parseInt(el.getAttribute('data-target'));
  const suffix   = el.getAttribute('data-suffix') || '';
  const duration = 1500;
  const step     = target / (duration / 16);
  let current    = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + suffix;
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      entry.target.classList.add('counted');
      countUp(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.count-up').forEach(el => counterObserver.observe(el));

// ── Glitch Text (periodic) ──
function triggerGlitch() {
  const el = document.querySelector('.hero-name .highlight');
  if (!el) return;
  el.style.animation = 'none';
  el.offsetHeight; // force reflow
  el.style.animation = '';
}
setInterval(triggerGlitch, 6000);

// ── Click Particles ──
document.addEventListener('click', (e) => {
  for (let i = 0; i < 6; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position:fixed; width:4px; height:4px;
      background:#E8000D; border-radius:50%;
      left:${e.clientX}px; top:${e.clientY}px;
      pointer-events:none; z-index:9997; transition:none;
    `;
    document.body.appendChild(particle);

    const angle = (i / 6) * Math.PI * 2;
    const dist  = 30 + Math.random() * 40;

    requestAnimationFrame(() => {
      particle.style.transition = `all ${0.4 + Math.random() * 0.3}s ease-out`;
      particle.style.transform  = `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`;
      particle.style.opacity    = '0';
    });

    setTimeout(() => particle.remove(), 800);
  }
});