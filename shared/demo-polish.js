(()=>{
 if(!('IntersectionObserver' in window))return;
 const quick=document.querySelector('.demo-quick-cta'),contact=document.querySelector('#contact');
 if(quick&&contact)new IntersectionObserver(entries=>{quick.hidden=entries[0].isIntersecting},{threshold:.08}).observe(contact);
 if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const items=document.querySelectorAll('.ec-card,.ec-list');
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('polish-visible');observer.unobserve(entry.target)}}),{threshold:.06});
 document.documentElement.classList.add('has-polish');items.forEach(item=>observer.observe(item));
})();
