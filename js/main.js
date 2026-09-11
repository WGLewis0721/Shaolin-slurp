(function () {
  'use strict';
  const data = window.SHAOLIN_SITE || {};
  const $ = (s, c=document) => c.querySelector(s);
  const $$ = (s, c=document) => Array.from(c.querySelectorAll(s));

  const year = $('#year'); if (year) year.textContent = new Date().getFullYear();

  const header = $('#site-header');
  const toggle = $('#menu-toggle'); const nav = $('#main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
    $$('#main-nav a').forEach(a => a.addEventListener('click', () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }));
  }
  window.addEventListener('scroll', () => header && header.classList.toggle('scrolled', window.scrollY > 20), {passive:true});

  const reveal = $$('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){e.target.classList.add('in'); io.unobserve(e.target);} }), {threshold:.12});
    reveal.forEach(el => io.observe(el));
  } else reveal.forEach(el => el.classList.add('in'));

  const scheduleList = $('#schedule-list');
  if (scheduleList && data.schedule) {
    scheduleList.innerHTML = data.schedule.map((x,i) => `<article class="route-row ${i===0?'route-row-featured':''}"><div class="route-day">${x.day}</div><div><strong>${x.place}</strong><span>${x.note}</span></div><div class="route-time">${x.time}</div></article>`).join('');
  }
  const status = $('#route-status');
  if (status) status.innerHTML = '<span class="status-dot"></span><strong>DEMO ROUTE</strong><span>Replace with confirmed weekly stops before launch.</span>';

  const menuGrid = $('#menu-grid');
  function renderMenu(cat){
    if (!menuGrid || !data.menu || !data.menu[cat]) return;
    menuGrid.innerHTML = data.menu[cat].map((x,i)=>`<article class="dish-card reveal in"><div class="dish-number">0${i+1}</div><div class="dish-top"><span class="dish-badge">${x.badge||''}</span><span class="dish-price">${x.price}</span></div><h3>${x.name}</h3><p>${x.desc}</p>${x.heat?`<div class="heat"><span>HEAT</span><b class="heat-${x.heat.toLowerCase()}">${x.heat}</b></div>`:''}</article>`).join('');
  }
  renderMenu('bowls');
  $$('.menu-tab').forEach(btn => btn.addEventListener('click', () => { $$('.menu-tab').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); renderMenu(btn.dataset.menuFilter); }));

  const form = $('#catering-form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const fd = new FormData(form);
    const body = `Name: ${fd.get('name')||''}%0AEmail: ${fd.get('email')||''}%0AEvent date: ${fd.get('date')||''}%0AHeadcount: ${fd.get('headcount')||''}%0ALocation: ${fd.get('location')||''}%0A%0A${encodeURIComponent(fd.get('details')||'')}`;
    location.href = `mailto:${data.brand?.email || 'shaolinslurp@gmail.com'}?subject=Shaolin%20Slurp%20Catering%20Inquiry&body=${body}`;
  });
})();