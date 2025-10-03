// Hero Carousel
const heroSlides = document.querySelectorAll('.hero .slide');
const heroPrev = document.querySelector('.carousel-prev');
const heroNext = document.querySelector('.carousel-next');
const heroDots = document.querySelectorAll('.dot');
let currentHeroSlide = 0;

function showHeroSlide(index) {
    heroSlides.forEach(slide => slide.classList.remove('active'));
    heroDots.forEach(dot => dot.classList.remove('active'));
    heroSlides[index].classList.add('active');
    heroDots[index].classList.add('active');
}

heroNext.addEventListener('click', () => {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    showHeroSlide(currentHeroSlide);
});

heroPrev.addEventListener('click', () => {
    currentHeroSlide = (currentHeroSlide - 1 + heroSlides.length) % heroSlides.length;
    showHeroSlide(currentHeroSlide);
});

heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentHeroSlide = index;
        showHeroSlide(currentHeroSlide);
    });
});

// Auto-play hero
setInterval(() => {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    showHeroSlide(currentHeroSlide);
}, 5000);

// Featured Carousel
const fSlides = document.querySelectorAll('.carousel-slide');
const fPrev = document.querySelector('.f-carousel-prev');
const fNext = document.querySelector('.f-carousel-next');
let currentFSlide = 0;

function showFSlide(index) {
    fSlides.forEach(slide => slide.style.transform = `translateX(-${index * 100}%)`);
}

fNext.addEventListener('click', () => {
    currentFSlide = (currentFSlide + 1) % fSlides.length;
    showFSlide(currentFSlide);
});

fPrev.addEventListener('click', () => {
    currentFSlide = (currentFSlide - 1 + fSlides.length) % fSlides.length;
    showFSlide(currentFSlide);
});

// Auto-play featured
setInterval(() => {
    currentFSlide = (currentFSlide + 1) % fSlides.length;
    showFSlide(currentFSlide);
}, 4000);

// Mobile menu toggle (basic)
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.product-card, .category-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});