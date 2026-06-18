// --- Footer year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Fade-in on scroll ---
const fadeEls = document.querySelectorAll('.fade-in');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

fadeEls.forEach((el) => fadeObserver.observe(el));

// --- Active nav highlight ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLinks.forEach((link) => {
                link.classList.toggle('active',
                    link.getAttribute('href') === '#' + entry.target.id);
            });
        }
    });
}, { rootMargin: '-80px 0px -60% 0px' });

sections.forEach((section) => navObserver.observe(section));

// --- Hamburger menu ---
const toggle = document.querySelector('.nav-toggle');
const navLinksEl = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    navLinksEl.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
});

navLinksEl.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        toggle.classList.remove('open');
        navLinksEl.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });
});
