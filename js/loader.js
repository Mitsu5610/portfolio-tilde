/* ============================================
   loader.js — Page Loader
   ============================================ */

'use strict';

document.body.style.overflow = 'hidden';

window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
    initReveal(); // from reveal.js
  }, 1400);
});