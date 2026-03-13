/* ============================================
   cursor.js — Custom Cursor & Follower
   ============================================ */

'use strict';

const cursor   = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top  = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Expand cursor on hover
document.querySelectorAll('a, button, .project-card, .skill-category, .contact-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width  = '20px';
    cursor.style.height = '20px';
    follower.style.width   = '54px';
    follower.style.height  = '54px';
    follower.style.opacity = '0.3';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width  = '12px';
    cursor.style.height = '12px';
    follower.style.width   = '36px';
    follower.style.height  = '36px';
    follower.style.opacity = '0.5';
  });
});