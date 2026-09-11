(function () {
  'use strict';
  const data = window.SHAOLIN_SITE || {};
  const $ = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => Array.from(c.querySelectorAll(s));

  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();

  const header = $('#site-header');
  const toggle = $('#menu-toggle') || $('#hamburger');
  const nav = $('#main-nav');
  const setMenu = (open) => {
    if (!toggle || !nav) return;
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    if (header) {
      header.style.backdropFilter = open ? 'none' : '';
      header.style.webkitBackdropFilter = open ? 'none' : '';
    }
  };
  if (toggle && nav) {
    toggle.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
    $$('#main-nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  }

  const onScroll = () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 24);
      header.classList.toggle('at-top', window.scrollY <= 24);
    }
    const chevron = $('.bb-chevron');
    if (chevron) chevron.classList.toggle('bb-chevron--hidden', window.scrollY > 80);
  };
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  const reveal = $$('.reveal, .fade-in, .fade-in-left, .fade-in-right');
  const show = el => {
    el.classList.add('in');
    el.classList.add('in-view');
  };
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) {
        show(e.target);
        io.unobserve(e.target);
      }
    }), {threshold:.1});
    reveal.forEach(el => io.observe(el));
  } else {
    reveal.forEach(show);
  }

  const schedule = Array.isArray(data.schedule) ? data.schedule : [];
  const dayIndex = { SUN:0, MON:1, TUE:2, WED:3, THU:4, FRI:5, SAT:6 };
  const today = new Date().getDay();
  const nextStop = schedule.find(x => (dayIndex[x.day] ?? 7) >= today) || schedule[0];
  const heroStop = $('#hero-next-stop');
  if (heroStop && nextStop) heroStop.textContent = `${nextStop.day} / ${nextStop.place} / ${nextStop.time}`;

  const scheduleList = $('#schedule-list');
  if (scheduleList && schedule.length) {
    scheduleList.innerHTML = schedule.map(x => `
      <article class="route-row ${x === nextStop ? 'route-row-featured' : ''}">
        <div class="route-day">${x.day}</div>
        <div><strong>${x.place}</strong><span>${x.note}</span></div>
        <div class="route-time">${x.time}</div>
      </article>`).join('');
  }

  const status = $('#route-status');
  if (status) status.innerHTML = '<span class="status-dot"></span><strong>DEMO ROUTE</strong><span>Replace with confirmed weekly stops before launch.</span>';

  const menuGrid = $('#menu-grid');
  function renderMenu(cat) {
    if (!menuGrid || !data.menu || !data.menu[cat]) return;
    menuGrid.innerHTML = data.menu[cat].map((x, i) => `
      <article class="dish-card reveal in" data-index="0${i+1}">
        <div class="dish-top">
          <span class="dish-badge">${x.badge || 'HOUSE ITEM'}</span>
          <span class="dish-price">${x.price}</span>
        </div>
        <h3>${x.name}</h3>
        <p>${x.desc}</p>
        ${x.heat ? `<div class="heat"><span>HEAT</span><b class="heat-${x.heat.toLowerCase()}">${x.heat}</b></div>` : ''}
      </article>`).join('');
  }
  renderMenu('bowls');

  const menuTabs = $$('.menu-tab');
  const activateTab = (btn, focus=false) => {
    if (!btn) return;
    menuTabs.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
      b.setAttribute('tabindex', '-1');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    btn.setAttribute('tabindex', '0');
    renderMenu(btn.dataset.menuFilter);
    if (focus) btn.focus();
  };
  menuTabs.forEach((btn, index) => {
    btn.addEventListener('click', () => activateTab(btn));
    btn.addEventListener('keydown', e => {
      let target = null;
      if (e.key === 'ArrowRight') target = menuTabs[(index + 1) % menuTabs.length];
      if (e.key === 'ArrowLeft') target = menuTabs[(index - 1 + menuTabs.length) % menuTabs.length];
      if (e.key === 'Home') target = menuTabs[0];
      if (e.key === 'End') target = menuTabs[menuTabs.length - 1];
      if (target) {
        e.preventDefault();
        activateTab(target, true);
      }
    });
  });

  const form = $('#catering-form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const details = [
      `Name: ${fd.get('name') || ''}`,
      `Email: ${fd.get('email') || ''}`,
      `Event date: ${fd.get('date') || ''}`,
      `Headcount: ${fd.get('headcount') || ''}`,
      `Location: ${fd.get('location') || ''}`,
      '',
      fd.get('details') || ''
    ].join('\n');
    const subject = encodeURIComponent('Shaolin Slurp Catering Inquiry');
    const body = encodeURIComponent(details);
    location.href = `mailto:${data.brand?.email || 'shaolinslurp@gmail.com'}?subject=${subject}&body=${body}`;
  });
})();
