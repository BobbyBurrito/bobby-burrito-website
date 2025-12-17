document.addEventListener("DOMContentLoaded", function () {

  /* ===== Testimonial carousel (if present) ===== */
  const tCarousel = document.querySelector(".testimonial-carousel");
  if (tCarousel) {
    const track = tCarousel.querySelector(".testimonial-track");
    const slides = Array.from(tCarousel.querySelectorAll(".testimonial-slide"));
    const dots = Array.from(tCarousel.querySelectorAll(".testimonial-dot"));
    let index = 0;

    function goTo(i) {
      if (!track || slides.length === 0) return;
      index = (i + slides.length) % slides.length;
      track.style.transform = "translateX(" + (-index * 100) + "%)";
      dots.forEach((d, idx) => d.classList.toggle("active", idx === index));
    }

    dots.forEach((dot, idx) => dot.addEventListener("click", () => goTo(idx)));
    goTo(0);
    setInterval(() => goTo(index + 1), 6000);
  }

  /* ===== Product carousel (Homepage) ===== */
  const carousel = document.querySelector(".product-carousel");
  if (carousel) {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
    const prevBtn = carousel.querySelector(".carousel-btn.prev");
    const nextBtn = carousel.querySelector(".carousel-btn.next");
    const dotsWrap = document.querySelector(".carousel-dots");

    let index = 0;
    let autoTimer = null;

    function slidesPerView() {
      const w = window.innerWidth;
      if (w <= 640) return 1;
      if (w <= 980) return 3;
      return 4;
    }

    function maxIndex() {
      return Math.max(0, slides.length - slidesPerView());
    }

    function updateDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = "";
      const count = maxIndex() + 1;
      for (let i = 0; i < count; i++) {
        const b = document.createElement("button");
        b.className = "carousel-dot" + (i === index ? " active" : "");
        b.setAttribute("aria-label", "Go to slide " + (i + 1));
        b.addEventListener("click", () => goTo(i, true));
        dotsWrap.appendChild(b);
      }
    }

    function goTo(i, userAction = false) {
      const max = maxIndex();
      index = Math.min(Math.max(i, 0), max);

      const slide = slides[0];
      const slideW = slide.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap || "12");
      const x = (slideW + gap) * index;

      track.style.transform = "translateX(" + (-x) + "px)";

      // update dots
      if (dotsWrap) {
        const dots = Array.from(dotsWrap.querySelectorAll(".carousel-dot"));
        dots.forEach((d, idx) => d.classList.toggle("active", idx === index));
      }

      if (userAction) restartAuto();
    }

    function next() {
      const max = maxIndex();
      goTo(index >= max ? 0 : index + 1);
    }

    function prev() {
      const max = maxIndex();
      goTo(index <= 0 ? max : index - 1);
    }

    function restartAuto() {
      if (autoTimer) clearInterval(autoTimer);
      autoTimer = setInterval(next, 4500);
    }

    // Buttons
    if (prevBtn) prevBtn.addEventListener("click", () => prev());
    if (nextBtn) nextBtn.addEventListener("click", () => next());

    // Swipe support
    let startX = 0;
    let isDown = false;

    const viewport = carousel.querySelector(".carousel-viewport");
    if (viewport) {
      viewport.addEventListener("pointerdown", (e) => {
        isDown = true;
        startX = e.clientX;
      });

      viewport.addEventListener("pointerup", (e) => {
        if (!isDown) return;
        isDown = false;
        const diff = e.clientX - startX;
        if (Math.abs(diff) > 40) {
          if (diff < 0) next();
          else prev();
          restartAuto();
        }
      });

      viewport.addEventListener("pointerleave", () => (isDown = false));
    }

    // Init
    updateDots();
    goTo(0);
    restartAuto();

    window.addEventListener("resize", () => {
      updateDots();
      goTo(Math.min(index, maxIndex()));
    });
  }

});
