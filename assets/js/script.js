// =====================================
// MOBILE MENU TOGGLE
// =====================================
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".main-nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });
}

// =====================================
// STICKY HEADER ON SCROLL
// =====================================
const header = document.querySelector("header") || document.querySelector(".site-header");

if (header) {
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 50);
  });
}

// =====================================
// HERO CAROUSEL (TOP SLIDES)
// =====================================
const heroSlides = document.querySelectorAll(".hero-carousel .slide");
let heroIndex = 0;

function showHeroSlide() {
  if (!heroSlides.length) return;

  heroSlides.forEach(slide => (slide.classList.remove("active")));
  heroIndex++;
  if (heroIndex > heroSlides.length) heroIndex = 1;

  heroSlides[heroIndex - 1].classList.add("active");
}

if (heroSlides.length) {
  heroSlides[0].classList.add("active");
  setInterval(showHeroSlide, 4000);
}

// =====================================
// TESTIMONIAL CAROUSEL
// =====================================
const testimonialTrack = document.querySelector(".testimonial-track");
const testimonialSlides = document.querySelectorAll(".testimonial-slide");
const testimonialDots = document.querySelectorAll(".testimonial-dot");
let testimonialIndex = 0;

function updateTestimonials() {
  if (!testimonialTrack || !testimonialSlides.length) return;

  testimonialTrack.style.transform = `translateX(-${testimonialIndex * 100}%)`;

  if (testimonialDots.length) {
    testimonialDots.forEach(dot => dot.classList.remove("active"));
    testimonialDots[testimonialIndex].classList.add("active");
  }
}

if (testimonialSlides.length) {
  updateTestimonials();
  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
    updateTestimonials();
  }, 4500);

  testimonialDots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
      testimonialIndex = idx;
      updateTestimonials();
    });
  });
}

// =====================================
// SMOOTH SCROLL FOR INTERNAL LINKS
// =====================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// =====================================
// TOAST ORDER BUTTONS
// =====================================
document.querySelectorAll(".order-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    window.location.href = "https://order.toasttab.com/online/bobby-burrito";
  });
});

// =====================================
// FADE-IN ON SCROLL
// =====================================
const faders = document.querySelectorAll(".fade-in");

if ("IntersectionObserver" in window && faders.length) {
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -40px 0px",
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => appearOnScroll.observe(fader));
}

// =====================================
// SIMPLE FORM SUBMIT ALERT
// (Netlify handles actual submission)
// =====================================
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", () => {
    setTimeout(() => {
      alert("Thank you! Your request has been submitted.");
    }, 300);
  });
});
