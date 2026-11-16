
(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = document.querySelector('#form-status');
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = encodeURIComponent(`MIPOL enquiry — ${data.get('organisation')}`);
      const body = encodeURIComponent(
        `Name: ${data.get('name')}\nBusiness email: ${data.get('email')}\nOrganisation: ${data.get('organisation')}\nRole: ${data.get('role')}\n\nChallenge:\n${data.get('challenge')}`
      );
      status.textContent = 'Opening your email application with the enquiry prepared…';
      window.location.href = `mailto:hello@mipolhq.com?subject=${subject}&body=${body}`;
      window.setTimeout(() => {
        status.textContent = 'Your email draft is ready. Please send it from your email application to complete the enquiry.';
      }, 700);
    });
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
