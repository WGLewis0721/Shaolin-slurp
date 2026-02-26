/* ==========================================================================
   Shaolin Slurp Ramen — Main JavaScript
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Dynamic copyright year
     ------------------------------------------------------------------ */
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ------------------------------------------------------------------
     Sticky header: transparent → solid on scroll
     ------------------------------------------------------------------ */
  const header = document.getElementById('site-header');

  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  /* ------------------------------------------------------------------
     Hero parallax
     ------------------------------------------------------------------ */
  const heroBgImg = document.querySelector('.hero-bg-img');

  function updateParallax() {
    if (!heroBgImg) return;
    const scrolled = window.scrollY;
    const factor = 0.35;
    heroBgImg.style.transform = 'scale(1.08) translateY(' + scrolled * factor + 'px)';
  }

  // Only apply parallax if user hasn't requested reduced motion
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.addEventListener('scroll', updateParallax, { passive: true });
  }

  /* ------------------------------------------------------------------
     Hamburger menu toggle
     ------------------------------------------------------------------ */
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('main-nav');

  function openMenu() {
    if (!hamburger || !mainNav) return;
    mainNav.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (!hamburger || !mainNav) return;
    mainNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      const isOpen = mainNav && mainNav.classList.contains('open');
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Close menu when a nav link is clicked
  if (mainNav) {
    mainNav.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  // Close menu on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  /* ------------------------------------------------------------------
     Scroll-triggered fade-in animations
     ------------------------------------------------------------------ */
  const animatedEls = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    animatedEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all elements for older browsers
    animatedEls.forEach(function (el) {
      el.classList.add('in-view');
    });
  }

  /* ------------------------------------------------------------------
     Gallery carousel — mouse drag support
     ------------------------------------------------------------------ */
  const carousel = document.querySelector('.gallery-carousel');

  if (carousel) {
    let isDragging = false;
    let startX = 0;
    let scrollStart = 0;

    carousel.addEventListener('mousedown', function (e) {
      isDragging = true;
      startX = e.pageX - carousel.offsetLeft;
      scrollStart = carousel.scrollLeft;
      carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener('mouseleave', function () {
      isDragging = false;
      carousel.style.cursor = '';
    });

    carousel.addEventListener('mouseup', function () {
      isDragging = false;
      carousel.style.cursor = '';
    });

    carousel.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      e.preventDefault();
      var currentX = e.pageX - carousel.offsetLeft;
      var dragDistance = (currentX - startX) * 1.5;
      carousel.scrollLeft = scrollStart - dragDistance;
    });
  }

  /* ------------------------------------------------------------------
     Book form — confirmation message on submit
     ------------------------------------------------------------------ */
  var bookForm = document.getElementById('book-form');
  var bookConfirmation = document.getElementById('book-confirmation');

  if (bookForm && bookConfirmation) {
    bookForm.addEventListener('submit', function (e) {
      e.preventDefault();
      bookConfirmation.hidden = false;
      bookForm.reset();
    });
  }

})();
