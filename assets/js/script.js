document.addEventListener("DOMContentLoaded", function(){
  const tCarousel = document.querySelector(".testimonial-carousel");
  if (!tCarousel) return;

  const track = tCarousel.querySelector(".testimonial-track");
  const slides = Array.from(tCarousel.querySelectorAll(".testimonial-slide"));
  const dots = Array.from(tCarousel.querySelectorAll(".testimonial-dot"));
  let index = 0;

  function goTo(i){
    if (!track || !slides.length) return;
    index = (i + slides.length) % slides.length;
    track.style.transform = "translateX(" + (-index * 100) + "%)";
    dots.forEach((d,idx)=>d.classList.toggle("active", idx===index));
  }

  dots.forEach((dot,idx)=>dot.addEventListener("click", ()=>goTo(idx)));
  goTo(0);
  setInterval(()=>goTo(index+1), 6000);
});
