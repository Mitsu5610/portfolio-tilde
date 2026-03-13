/* ============================================
   contact.js — EmailJS Contact Form
   ============================================ */

'use strict';

const contactForm = document.getElementById('contact-form');

contactForm?.addEventListener('submit', function (e) {
  e.preventDefault();

  const btn     = this.querySelector('[type="submit"]');
  const origTxt = btn.innerHTML;

  btn.innerHTML = '<span style="opacity:0.7">Sending...</span>';
  btn.disabled  = true;

  emailjs.send(
    'YOUR_SERVICE_ID',   // 🔴 Replace with your EmailJS Service ID
    'YOUR_TEMPLATE_ID',  // 🔴 Replace with your EmailJS Template ID
    {
      from_name:  document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      subject:    document.getElementById('subject').value,
      message:    document.getElementById('message').value,
    }
  )
  .then(() => {
    btn.innerHTML    = '✓ Message Sent!';
    btn.style.background   = '#166534';
    btn.style.borderColor  = '#166534';
    this.reset();
    setTimeout(() => {
      btn.innerHTML         = origTxt;
      btn.style.background  = '';
      btn.style.borderColor = '';
      btn.disabled          = false;
    }, 3500);
  })
  .catch((err) => {
    console.error(err);
    btn.innerHTML         = '✗ Failed — Try Again';
    btn.style.background  = '#7f1d1d';
    btn.style.borderColor = '#7f1d1d';
    setTimeout(() => {
      btn.innerHTML         = origTxt;
      btn.style.background  = '';
      btn.style.borderColor = '';
      btn.disabled          = false;
    }, 3500);
  });
});