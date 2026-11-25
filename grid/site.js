(()=>{
 const menu=document.querySelector('.menu-btn'),nav=document.querySelector('#site-nav');
 menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);menu.textContent=open?'Close':'Menu'});
 nav.addEventListener('click',e=>{if(e.target.closest('a')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu'}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='Menu';menu.focus()}});
 const toggle=document.querySelector('.ticker-toggle'),ticker=document.querySelector('.service-ticker');
 toggle.addEventListener('click',()=>{const paused=toggle.getAttribute('aria-pressed')!=='true';ticker.classList.toggle('is-paused',paused);toggle.setAttribute('aria-pressed',String(paused));toggle.textContent=paused?'Play':'Pause'});
 if('IntersectionObserver'in window){const sticky=document.querySelector('.sticky'),contact=document.querySelector('#contact');new IntersectionObserver(e=>{sticky.hidden=e[0].isIntersecting},{threshold:.08}).observe(contact);
 if(!matchMedia('(prefers-reduced-motion: reduce)').matches){const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');obs.unobserve(e.target)}}),{threshold:.08});document.documentElement.classList.add('js-motion');document.querySelectorAll('.reveal').forEach(e=>obs.observe(e))}}
})();
