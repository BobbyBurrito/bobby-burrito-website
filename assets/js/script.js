(function () {
  // -----------------------------
  // MOBILE NAV (hamburger)
  // -----------------------------
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".main-nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = document.body.classList.toggle("nav-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close nav when clicking a link
    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Close nav when clicking outside
    document.addEventListener("click", (e) => {
      if (!document.body.classList.contains("nav-open")) return;
      const clickedInside = nav.contains(e.target) || menuBtn.contains(e.target);
      if (!clickedInside) {
        document.body.classList.remove("nav-open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // -----------------------------
  // DEALS CAROUSEL (homepage)
  // -----------------------------
  const carousel = document.querySelector('[data-carousel="deals"]');
  if (carousel) {
    const track = carousel.querySelector(".deal-track");
    const slides = Array.from(carousel.querySelectorAll(".deal-slide"));
    const dots = Array.from(carousel.querySelectorAll(".deal-dot"));
    const prev = carousel.querySelector(".deal-nav.prev");
    const next = carousel.querySelector(".deal-nav.next");

    let index = 0;
    let timer = null;

    const goTo = (i) => {
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, di) => d.classList.toggle("active", di === index));
    };

    const start = () => {
      stop();
      timer = setInterval(() => goTo(index + 1), 4500);
    };
    const stop = () => timer && clearInterval(timer);

    prev && prev.addEventListener("click", () => { goTo(index - 1); start(); });
    next && next.addEventListener("click", () => { goTo(index + 1); start(); });

    dots.forEach((d, di) => d.addEventListener("click", () => { goTo(di); start(); }));

    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);

    goTo(0);
    start();
  }
})();
