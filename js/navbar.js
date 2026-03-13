/* ============================================
   navbar.js — Scroll Behavior & Mobile Menu
   ============================================ */

'use strict';

const navbar    = document.getElementById('navbar');
const navLinks  = document.querySelectorAll('.nav-link');
const hamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.nav-links');

// Scrolled state + active link highlight
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);

  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

// Hamburger toggle
hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    mobileMenu?.classList.remove('open');
  });
});