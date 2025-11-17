// Bobby Burrito & Taco – Frontend JS

document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  setupHeroCarousel();
  setupBigTestimonialCarousel();
  setupGalleryModal();
});

/* -----------------------------
   MOBILE NAV
----------------------------- */
function setupMobileNav() {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".main-nav");
  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    nav.classList.toggle("nav-open");
  });

  // close on link click
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBtn.classList.remove("active");
      nav.classList.remove("nav-open");
    });
  });
}

/* -----------------------------
   HERO TOP CAROUSEL (3 slides)
----------------------------- */
function setupHeroCarousel() {
  const slides = document.querySelectorAll(".hero-carousel-slide");
  const dots = document.querySelectorAll(".hero-carousel-dots .dot");
  if (!slides.length) return;

  let index = 0;

  function showSlide(i) {
    slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
    dots.forEach((d, idx) => d.classList.toggle("active", idx === i));
  }

  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => {
      index = i;
      showSlide(index);
    })
  );

  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);

  showSlide(index);
}

/* -----------------------------
   BIG TESTIMONIAL CAROUSEL
----------------------------- */
function setupBigTestimonialCarousel() {
  const track = document.querySelector(".testimonial-track");
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".testimonial-dot");

  if (!track || !slides.length) return;

  let index = 0;

  function goTo(i) {
    index = (i + slides.length) % slides.length;
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}%)`;
    dots.forEach((d, idx) => d.classList.toggle("active", idx === index));
  }

  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => goTo(i))
  );

  setInterval(() => goTo(index + 1), 7000);
  goTo(0);
}

/* -----------------------------
   GALLERY MODAL VIEWER
----------------------------- */
function setupGalleryModal() {
  const imgs = document.querySelectorAll(".gallery-img");
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".img-close");

  if (!imgs.length || !modal || !modalImg || !closeBtn) return;

  imgs.forEach((img) => {
    img.addEventListener("click", () => {
      modalImg.src = img.src;
      modal.classList.add("open");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("open");
    }
  });
}
