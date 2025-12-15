// MOBILE MENU
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.main-nav');
if(menuBtn){
  menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
}

// HERO CAROUSEL
const slides=document.querySelectorAll('.hero-carousel img');
let idx=0;
if(slides.length){
  slides[0].classList.add('active');
  setInterval(()=>{
    slides[idx].classList.remove('active');
    idx=(idx+1)%slides.length;
    slides[idx].classList.add('active');
  },4000);
}
