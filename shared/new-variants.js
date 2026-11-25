(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); toggle.textContent = open ? 'Close' : 'Menu'; });
    nav.addEventListener('click', (event) => { if (event.target.closest('a')) { toggle.setAttribute('aria-expanded','false'); nav.classList.remove('open'); toggle.textContent = 'Menu'; } });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); toggle.textContent = 'Menu'; toggle.focus(); } });
  }
  const sticky = document.querySelector('.sticky-cta');
  const contact = document.querySelector('#contact');
  if ('IntersectionObserver' in window && sticky && contact) {
    const contactObserver = new IntersectionObserver(entries => { sticky.hidden = entries[0].isIntersecting; }, {threshold: 0.08});
    contactObserver.observe(contact);
  }
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add('in-view');observer.unobserve(entry.target)} }), {threshold:0.08});
    document.documentElement.classList.add('js-motion');
    document.querySelectorAll('.reveal').forEach(item => observer.observe(item));
  }
})();
