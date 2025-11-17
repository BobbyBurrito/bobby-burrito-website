// =========================================
//  Bobby Burrito & Taco – Frontend JS
//  - Mobile nav toggle
//  - Hero image carousel
//  - Testimonial carousel
// =========================================

document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  setupHeroCarousel();
  setupTestimonialCarousel();
});

/* -----------------------------------------
   MOBILE NAV
------------------------------------------*/

function setupMobileNav() {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".main-nav");

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    nav.classList.toggle("nav-open");
  });

  // Close menu when any nav link clicked
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      nav.classList.remove("nav-open");
    });
  });
}

/* -----------------------------------------
   HERO IMAGE CAROUSEL (TOP STRIP)
------------------------------------------*/

function setupHeroCarousel() {
  const slides = document.querySelectorAll(".hero-carousel .slide");
  if (!slides || slides.length <= 1) return;

  let index = 0;

  function showSlide(i) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle("active", idx === i);
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  // Initialize
  showSlide(index);
  setInterval(nextSlide, 5000);
}

/* -----------------------------------------
   BIG TESTIMONIAL CAROUSEL
------------------------------------------*/

function setupTestimonialCarousel() {
  const track = document.querySelector(".testimonial-track");
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".testimonial-dot");

  if (!track || slides.length === 0) return;

  let index = 0;

  function goToSlide(i) {
    index = (i + slides.length) % slides.length;
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
    });
  }

  // Click on dots
  dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => goToSlide(idx));
  });

  // Auto-advance
  setInterval(() => {
    goToSlide(index + 1);
  }, 7000);

  // Start at first slide
  goToSlide(0);
}
