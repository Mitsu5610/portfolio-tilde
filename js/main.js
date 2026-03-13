/* ============================================
   MAIN.JS — Core Interactions & Animations
   Lawrence Olivier N. Tilde Portfolio
   ============================================ */

'use strict';

// ============================================
// PAGE LOADER
// ============================================
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    initReveal();
  }, 1400);
});

document.body.style.overflow = 'hidden';

// ============================================
// CUSTOM CURSOR
// ============================================
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor state on hover
document.querySelectorAll('a, button, .project-card, .skill-category, .contact-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    follower.style.width = '54px';
    follower.style.height = '54px';
    follower.style.opacity = '0.3';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '12px';
    cursor.style.height = '12px';
    follower.style.width = '36px';
    follower.style.height = '36px';
    follower.style.opacity = '0.5';
  });
});

// ============================================
// NAVBAR SCROLL BEHAVIOR
// ============================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  // Scrolled class
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active link highlight
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// ============================================
// HAMBURGER / MOBILE MENU
// ============================================
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
  });
});

// ============================================
// SCROLL REVEAL
// ============================================
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ============================================
// SKILL BAR ANIMATION
// ============================================
const skillBars = document.querySelectorAll('.skill-bar-fill');
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => barObserver.observe(bar));

// ============================================
// COUNT UP ANIMATION
// ============================================
function countUp(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 1500;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + (el.getAttribute('data-suffix') || '');
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

// ============================================
// MATRIX CANVAS (Hero Background)
// ============================================
function initMatrix() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ';
  const fontSize = 12;
  const cols = Math.floor(canvas.width / fontSize);
  const drops = Array(cols).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(8, 8, 8, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#E8000D';
    ctx.font = `${fontSize}px Space Mono, monospace`;

    drops.forEach((y, i) => {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * fontSize, y * fontSize);

      if (y * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    });
  }

  setInterval(draw, 50);

  window.addEventListener('resize', () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });
}

initMatrix();

// ============================================
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const top = target.offsetTop - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ============================================
// CONTACT FORM
// ============================================
const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('[type="submit"]');
  const originalText = btn.textContent;

  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = '✓ Message Sent!';
    btn.style.background = '#1a6b00';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
      contactForm.reset();
    }, 3000);
  }, 1500);
});

// ============================================
// GLITCH TEXT EFFECT (periodic)
// ============================================
function triggerGlitch() {
  const el = document.querySelector('.hero-name .highlight');
  if (!el) return;
  el.style.animation = 'none';
  el.offsetHeight; // reflow
  el.style.animation = '';
}

setInterval(triggerGlitch, 6000);

// ============================================
// PARTICLES ON CLICK
// ============================================
document.addEventListener('click', (e) => {
  const count = 6;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      width: 4px;
      height: 4px;
      background: #E8000D;
      border-radius: 50%;
      left: ${e.clientX}px;
      top: ${e.clientY}px;
      pointer-events: none;
      z-index: 9997;
      transition: none;
    `;
    document.body.appendChild(particle);

    const angle = (i / count) * Math.PI * 2;
    const dist = 30 + Math.random() * 40;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;

    requestAnimationFrame(() => {
      particle.style.transition = `all ${0.4 + Math.random() * 0.3}s ease-out`;
      particle.style.transform = `translate(${dx}px, ${dy}px)`;
      particle.style.opacity = '0';
    });

    setTimeout(() => particle.remove(), 800);
  }
});

console.log('%c LAWRENCE OLIVIER N. TILDE ', 'background: #E8000D; color: white; font-size: 14px; font-weight: bold; padding: 8px 16px;');
console.log('%c Full Stack Developer @ MITSU BYTES ', 'color: #E8000D; font-size: 12px;');
