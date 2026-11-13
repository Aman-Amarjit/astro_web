/* ==========================================================================
   P.C. Mohapatra | Vedic Astrology — main.js
   ========================================================================== */
(function () {
  'use strict';

  /* ── SCROLL REVEAL ─────────────────────────────────────────────────────── */
  function initReveal() {
    var reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* ── STICKY HEADER ─────────────────────────────────────────────────────── */
  function initHeader() {
    var header = document.getElementById('site-header');
    if (!header) return;
    function onScroll() {
      header.classList.toggle('scrolled', window.scrollY > 50);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── MOBILE MENU ───────────────────────────────────────────────────────── */
  function initMobileMenu() {
    var btn = document.getElementById('mobile-toggle');
    var nav = document.getElementById('nav-links');
    if (!btn || !nav) return;

    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('show');
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('show');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!btn.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('show');
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── BACK TO TOP ───────────────────────────────────────────────────────── */
  function initBackToTop() {
    var btn = document.getElementById('topBtn');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      btn.classList.toggle('show', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── ACTIVE NAV LINK ───────────────────────────────────────────────────── */
  function initActiveNav() {
    var path = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.classList.remove('active');
      var href = link.getAttribute('href') || '';
      var isHome = (path === '/' || path.endsWith('index.html')) && href === 'index.html';
      var isPage = href !== 'index.html' && path.includes(href.replace('../', ''));
      if (isHome || isPage) link.classList.add('active');
    });
  }

  /* ── BOOKING FORM ──────────────────────────────────────────────────────── */
  function initBookingForm() {
    var form = document.getElementById('bookingForm');
    if (!form) return;
    var msg = document.getElementById('formMsg');
    var submitBtn = form.querySelector('[type="submit"]');

    var today = new Date().toISOString().split('T')[0];
    var dobField = form.querySelector('[name="dob"]');
    var dateField = form.querySelector('[name="preferredDate"]');
    if (dobField) dobField.setAttribute('max', today);
    if (dateField) dateField.setAttribute('min', today);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Processing…'; }
      if (msg) { msg.style.display = 'none'; msg.className = 'form-msg'; }

      setTimeout(function () {
        if (msg) {
          msg.style.display = 'block';
          msg.className = 'form-msg ok';
          msg.textContent = '✓ Booking received! A confirmation will be sent via WhatsApp.';
        }
        if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = 'Book Consultation'; }
        form.reset();
      }, 1500);
    });
  }


  /* ── INIT ──────────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    initReveal();
    initHeader();
    initMobileMenu();
    initBackToTop();
    initActiveNav();
    initBookingForm();
  });

})();
