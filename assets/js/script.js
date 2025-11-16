// -----------------------------
// Mobile Menu Toggle
// -----------------------------
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navbar');

if (menuBtn && nav) {
    menuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
}

// -----------------------------
// Sticky Header on Scroll
// -----------------------------
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 50);
    }
});

// -----------------------------
// Auto Carousel + Fade + Swipe
// -----------------------------
let slideIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
let carouselContainer = document.querySelector('.hero-carousel');
let startX = 0;

function showSlides() {
    if (slides.length === 0) return;

    slides.forEach(slide => slide.style.opacity = 0);

    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    slides[slideIndex - 1].style.opacity = 1;

    setTimeout(showSlides, 4000); 
}

if (slides.length > 0) {
    slides.forEach(slide => {
        slide.style.transition = "opacity 1s ease";
    });
    showSlides();
}

// Swipe gestures for mobile:
if (carouselContainer) {
    carouselContainer.addEventListener("touchstart", e => {
        startX = e.touches[0].clientX;
    });

    carouselContainer.addEventListener("touchend", e => {
        let endX = e.changedTouches[0].clientX;

        if (endX < startX - 50) {
            slideIndex++;
            if (slideIndex > slides.length) slideIndex = 1;
        } else if (endX > startX + 50) {
            slideIndex--;
            if (slideIndex < 1) slideIndex = slides.length;
        }

        slides.forEach(slide => slide.style.opacity = 0);
        slides[slideIndex - 1].style.opacity = 1;
    });
}

// -----------------------------
// Smooth Scroll
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// -----------------------------
// Toast Order Button
// -----------------------------
document.querySelectorAll('.order-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = "https://order.toasttab.com/online/bobby-burrito";
    });
});

// -----------------------------
// Fade-in Animation on Scroll
// -----------------------------
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// -----------------------------
// Form Success Popup
// -----------------------------
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", () => {
        setTimeout(() => {
            alert("Thank you! Your request has been submitted successfully.");
        }, 300);
    });
});
