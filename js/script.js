/* ==========================================================
   PRANAV MOHAN PATIL — PORTFOLIO
   Main JavaScript
   ========================================================== */

'use strict';

/* =========================================================
   1. NAVBAR — scroll state + active link highlighting
   ========================================================= */
(function initNavbar() {
  const navbar  = document.getElementById('mainNavbar');
  const navLinks = document.querySelectorAll('#mainNavbar .nav-link');
  const sections = Array.from(document.querySelectorAll('section[id]'));

  function onScroll() {
    /* Scrolled class for solid background */
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    /* Active nav link based on scroll position */
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 90;
      if (window.scrollY >= top) currentId = sec.id;
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* Close mobile nav after clicking a link */
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const collapse = document.getElementById('navMenu');
      if (collapse.classList.contains('show')) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapse);
        bsCollapse.hide();
      }
    });
  });
})();


/* =========================================================
   2. SCROLL REVEAL
   ========================================================= */
(function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  if (!revealEls.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));
})();


/* =========================================================
   3. SMOOTH SCROLL for anchor links
   ========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = 72; // account for fixed navbar
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});


/* =========================================================
   4. BACK TO TOP BUTTON
   ========================================================= */
(function initBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


/* =========================================================
   5. FOOTER YEAR
   ========================================================= */
(function setYear() {
  const el = document.getElementById('footerYear');
  if (el) el.textContent = new Date().getFullYear();
})();


/* =========================================================
   6. CONTACT FORM — client-side validation + submission
   ========================================================= */
(function initContactForm() {
  const form       = document.getElementById('contactForm');
  const submitBtn  = document.getElementById('submitBtn');
  const btnText    = submitBtn ? submitBtn.querySelector('.btn-text')    : null;
  const btnLoading = submitBtn ? submitBtn.querySelector('.btn-loading') : null;
  const successEl  = document.getElementById('formSuccess');
  const errorEl    = document.getElementById('formError');

  if (!form) return;

  /* ---- Field validators ---- */
  function validateField(input) {
    const val = input.value.trim();
    let valid = true;

    if (input.required && !val) {
      valid = false;
    } else if (input.type === 'email' && val) {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    } else if (input.minLength && val.length < input.minLength) {
      valid = false;
    }

    input.classList.toggle('is-invalid', !valid);
    input.classList.toggle('is-valid', valid);
    return valid;
  }

  /* Validate on blur for each field */
  form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) validateField(input);
    });
  });

  /* ---- Show / hide button states ---- */
  function setLoading(loading) {
    if (!submitBtn) return;
    submitBtn.disabled = loading;
    btnText.classList.toggle('d-none', loading);
    btnLoading.classList.toggle('d-none', !loading);
  }

  function hideAlerts() {
    if (successEl) successEl.classList.add('d-none');
    if (errorEl)   errorEl.classList.add('d-none');
  }

  /* ---- Form submit ---- */
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    hideAlerts();

    /* Validate all fields */
    const inputs = form.querySelectorAll('input, textarea');
    let allValid = true;
    inputs.forEach(input => { if (!validateField(input)) allValid = false; });
    if (!allValid) return;

    setLoading(true);

    /*
      ============================================================
      FORM BACKEND INTEGRATION
      ============================================================
      Option A — Formspree (recommended for static sites):
        1. Sign up at https://formspree.io
        2. Create a form and copy your endpoint URL
        3. Replace the FORMSPREE_ENDPOINT constant below with your URL

      Option B — EmailJS:
        Follow https://www.emailjs.com/docs/ to configure service/template IDs
        and call emailjs.sendForm() inside this handler instead of fetch().

      Option C — Custom backend:
        Point the endpoint at your own API route that accepts JSON/FormData.
      ============================================================
    */
    const FORMSPREE_ENDPOINT = ''; // ← Add your Formspree endpoint here

    try {
      if (FORMSPREE_ENDPOINT) {
        /* Real submission via Formspree */
        const data = new FormData(form);
        const resp = await fetch(FORMSPREE_ENDPOINT, {
          method:  'POST',
          body:    data,
          headers: { Accept: 'application/json' },
        });
        if (resp.ok) {
          showSuccess();
        } else {
          showError();
        }
      } else {
        /*
          No endpoint configured yet.
          Simulate a short delay so the user sees the loading state,
          then show an informational message.
        */
        await sleep(900);
        if (successEl) {
          successEl.textContent =
            '✅ Form received! (Configure a Formspree endpoint in js/script.js to send real emails.)';
          successEl.classList.remove('d-none');
        }
        form.reset();
        inputs.forEach(i => { i.classList.remove('is-valid', 'is-invalid'); });
      }
    } catch (_err) {
      showError();
    } finally {
      setLoading(false);
    }
  });

  function showSuccess() {
    if (successEl) successEl.classList.remove('d-none');
    form.reset();
    form.querySelectorAll('input, textarea').forEach(i => {
      i.classList.remove('is-valid', 'is-invalid');
    });
  }
  function showError() {
    if (errorEl) errorEl.classList.remove('d-none');
  }
  function sleep(ms) { return new Promise(res => setTimeout(res, ms)); }
})();


/* =========================================================
   7. HERO GREETING TYPING EFFECT (subtle — cursor blink only)
   ========================================================= */
(function initHeroCursor() {
  const greeting = document.querySelector('.hero-greeting');
  if (!greeting) return;

  /* Append a blinking cursor character after the text */
  const cursor = document.createElement('span');
  cursor.textContent = '|';
  cursor.style.cssText =
    'margin-left:2px; opacity:1; animation: blink-cursor 1s step-end infinite;';

  /* Inject keyframes if not already present */
  if (!document.getElementById('blink-kf')) {
    const style = document.createElement('style');
    style.id = 'blink-kf';
    style.textContent = '@keyframes blink-cursor { 0%,100%{opacity:1} 50%{opacity:0} }';
    document.head.appendChild(style);
  }
  greeting.appendChild(cursor);

  /* Remove after 6 seconds to avoid distraction */
  setTimeout(() => cursor.remove(), 6000);
})();


/* =========================================================
   8. PROJECT CARD — keyboard focus ring pass-through
      (ensures tab-accessible focus visible inside cards)
   ========================================================= */
document.querySelectorAll('.project-card a, .glass-card a').forEach(link => {
  link.addEventListener('focus', () => {
    link.closest('.project-card, .glass-card')?.classList.add('card-focus');
  });
  link.addEventListener('blur', () => {
    link.closest('.project-card, .glass-card')?.classList.remove('card-focus');
  });
});


/* =========================================================
   9. SKILL CARD — staggered entrance delay via JS
      (complements CSS reveal; adds depth)
   ========================================================= */
(function staggerSkillCards() {
  document.querySelectorAll('.skill-category').forEach((cat, catIdx) => {
    cat.querySelectorAll('.skill-card').forEach((card, i) => {
      card.style.transitionDelay = `${catIdx * 0.08 + i * 0.06}s`;
    });
  });
})();
