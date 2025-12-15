/*
 * Updated JavaScript for Bobby Burrito & Taco
 *
 * Enhancements:
 *   - Mobile navigation toggling with aria-expanded state.
 *   - Deals carousel with pause and resume functionality and accessible controls.
 */

(() => {
  // Mobile navigation (hamburger)
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.main-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // Close nav when clicking a link
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
    // Close nav when clicking outside
    document.addEventListener('click', e => {
      if (!document.body.classList.contains('nav-open')) return;
      const clickedInside = nav.contains(e.target) || menuBtn.contains(e.target);
      if (!clickedInside) {
        document.body.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Deals carousel with pause/resume
  const carousel = document.querySelector('[data-carousel="deals"]');
  if (carousel) {
    const track = carousel.querySelector('.deal-track');
    const slides = Array.from(carousel.querySelectorAll('.deal-slide'));
    const dots = Array.from(carousel.querySelectorAll('.deal-dot'));
    const prev = carousel.querySelector('.deal-nav.prev');
    const next = carousel.querySelector('.deal-nav.next');
    const pauseBtn = carousel.querySelector('.carousel-pause');
    let index = 0;
    let timer = null;
    let isPaused = false;
    const goTo = i => {
      index = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, di) => d.classList.toggle('active', di === index));
    };
    const start = () => {
      stop();
      if (!isPaused) {
        timer = setInterval(() => goTo(index + 1), 4500);
      }
    };
    const stop = () => timer && clearInterval(timer);
    // Prev/next controls
    prev && prev.addEventListener('click', () => { goTo(index - 1); start(); });
    next && next.addEventListener('click', () => { goTo(index + 1); start(); });
    // Dot controls
    dots.forEach((d, di) => d.addEventListener('click', () => { goTo(di); start(); }));
    // Pause/resume button
    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => {
        isPaused = !isPaused;
        pauseBtn.textContent = isPaused ? '▶' : '❚❚';
        if (isPaused) {
          stop();
        } else {
          start();
        }
      });
    }
    // Pause on hover for desktop users
    carousel.addEventListener('mouseenter', () => { stop(); });
    carousel.addEventListener('mouseleave', () => { if (!isPaused) start(); });
    goTo(0);
    start();
  }
})();
