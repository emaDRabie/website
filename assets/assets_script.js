// Mobile menu toggle (simple: show/hide nav)
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear().toString();

  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const visible = getComputedStyle(nav).display !== 'none';
      nav.style.display = visible ? 'none' : 'flex';
    });
  }

  // Fake form handler: replace with Formspree/Netlify or backend endpoint
  const form = document.getElementById('contactForm');
  if (form) {
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());

      // Example: send to Formspree (replace YOUR_ID)
      // await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) })

      // For now, just show confirmation
      if (status) {
        status.textContent = 'تم استلام طلبك. سنعاود الاتصال بك خلال 24 ساعة. شكراً!';
        form.reset();
      }
    });
  }
});