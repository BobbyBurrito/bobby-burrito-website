document.addEventListener("DOMContentLoaded", () => {
  /* ===== HERO CAROUSEL ===== */
  const heroSlides = document.querySelectorAll(".hero-slide");
  let current = 0;

  function switchHero() {
    heroSlides.forEach(slide => slide.classList.remove("active"));
    current = (current + 1) % heroSlides.length;
    heroSlides[current].classList.add("active");
  }

  heroSlides[0].classList.add("active");
  setInterval(switchHero, 4500);

  /* ===== MOBILE NAV TOGGLE ===== */
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".main-nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open");
      nav.classList.toggle("nav-open");
      document.body.classList.toggle("nav-open");
    });
  }
});
