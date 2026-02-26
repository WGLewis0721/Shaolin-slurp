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

/* ==========================================================================
   Phase 2: Today highlight + Open Now + Next Drop countdown
   ========================================================================== */
(function () {
  'use strict';

  // Schedule: JS day index (0=Sun) -> operating hours in 24h floats, null = no public hours
  const SCHEDULE = {
    0: null,                      // Sunday — Closed
    1: { open: 11, close: 14 },  // Monday — Downtown Plaza 11AM–2PM
    2: { open: 17, close: 21 },  // Tuesday — Riverside Park 5PM–9PM
    3: { open: 11, close: 14 },  // Wednesday — Midtown Offices 11AM–2PM
    4: { open: 18, close: 22 },  // Thursday — Brewery Night 6PM–10PM
    5: { open: 19, close: 24 },  // Friday — Night Market 7PM–12AM
    6: null,                      // Saturday — Private Events
  };

  const DAY_ABBR = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const now = new Date();
  const todayIndex = now.getDay();
  const currentHour = now.getHours() + now.getMinutes() / 60;

  // Mark today's schedule row
  const scheduleRows = document.querySelectorAll('.schedule-row');
  scheduleRows.forEach(function (row) {
    const dayCell = row.querySelector('.schedule-day');
    if (!dayCell) return;
    if (dayCell.textContent.trim() !== DAY_ABBR[todayIndex]) return;

    row.classList.add('is-today');

    // Pulsing dot inside the day cell
    const dot = document.createElement('span');
    dot.className = 'today-pulse-dot';
    dot.setAttribute('aria-hidden', 'true');
    dayCell.insertBefore(dot, dayCell.firstChild);

    // TODAY badge appended to the row
    const todayBadge = document.createElement('span');
    todayBadge.className = 'today-badge';
    todayBadge.textContent = '🔥 TODAY';
    row.appendChild(todayBadge);

    // OPEN NOW badge if within operating hours
    const hours = SCHEDULE[todayIndex];
    if (hours && currentHour >= hours.open && currentHour < hours.close) {
      const openBadge = document.createElement('span');
      openBadge.className = 'open-now-badge';
      openBadge.textContent = 'OPEN NOW';
      row.appendChild(openBadge);
    }
  });

  // Next Drop countdown
  const countdownEl = document.getElementById('next-drop-countdown');
  if (countdownEl) {
    let countdownText = '';
    const todayHours = SCHEDULE[todayIndex];

    if (todayHours) {
      if (currentHour < todayHours.open) {
        const hoursUntil = Math.ceil(todayHours.open - currentHour);
        countdownText = 'Next Drop In: ' + hoursUntil + ' Hour' + (hoursUntil === 1 ? '' : 's');
      } else if (currentHour < todayHours.close) {
        countdownText = '🔥 Open Now — Come Get Some';
      }
    }

    if (!countdownText) {
      // Find next day with public hours
      for (let i = 1; i <= 7; i++) {
        const nextDayIndex = (todayIndex + i) % 7;
        if (SCHEDULE[nextDayIndex]) {
          countdownText = 'Next Drop: ' + DAY_ABBR[nextDayIndex];
          break;
        }
      }
    }

    countdownEl.textContent = countdownText;
  }

})();

// Bushido About Enhancements
(function () {
  'use strict';

  // -----------------------------------------------------------------------
  // Timeline spine — animates downward via Intersection Observer
  // -----------------------------------------------------------------------
  const spine = document.querySelector('.bb-tl-spine');

  if (spine) {
    if ('IntersectionObserver' in window) {
      const spineObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              spine.classList.add('bb-tl-spine--visible');
              spineObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05 }
      );
      spineObserver.observe(spine.parentElement);
    } else {
      spine.classList.add('bb-tl-spine--visible');
    }
  }

  // -----------------------------------------------------------------------
  // Timeline entries — staggered fade-in via Intersection Observer
  // -----------------------------------------------------------------------
  const tlEntries = document.querySelectorAll('.bb-tl-entry');

  if (tlEntries.length) {
    if ('IntersectionObserver' in window) {
      const entryObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              const idx = Array.from(tlEntries).indexOf(entry.target);
              const delay = idx * 120;
              setTimeout(function () {
                entry.target.classList.add('bb-tl-entry--visible');
              }, delay);
              entryObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      tlEntries.forEach(function (el) {
        entryObserver.observe(el);
      });
    } else {
      tlEntries.forEach(function (el) {
        el.classList.add('bb-tl-entry--visible');
      });
    }
  }

  // -----------------------------------------------------------------------
  // Hero chevron — hide when hero section is mostly scrolled past
  // -----------------------------------------------------------------------
  const chevron = document.querySelector('.bb-chevron');
  const bbHero = document.querySelector('.bb-hero');

  if (chevron && bbHero) {
    if ('IntersectionObserver' in window) {
      const chevronObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.intersectionRatio < 0.5) {
              chevron.classList.add('bb-chevron--hidden');
            } else {
              chevron.classList.remove('bb-chevron--hidden');
            }
          });
        },
        { threshold: [0.4, 0.5, 0.6] }
      );
      chevronObserver.observe(bbHero);
    }
  }

})();
