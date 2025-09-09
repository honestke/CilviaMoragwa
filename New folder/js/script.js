
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{e.preventDefault(); const t=document.querySelector(a.getAttribute('href')); if(t) t.scrollIntoView({behavior:'smooth'});});
});
// subtle reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries=>{
  entries.forEach(ent=>{ if(ent.isIntersecting){ ent.target.classList.add('visible'); obs.unobserve(ent.target); } });
},{threshold:0.15});
reveals.forEach(r=>obs.observe(r));
