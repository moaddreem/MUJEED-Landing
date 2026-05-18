document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    });

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => navLinks.classList.remove('open'));
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const siblings = el.parentElement.querySelectorAll('.problem-card, .solution-card, .feature-card, .user-card, .step-card, .value-item, .preview-card, .team-card');
                const idx = Array.from(siblings).indexOf(el);
                setTimeout(() => el.classList.add('visible'), idx * 100);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.problem-card, .solution-card, .feature-card, .user-card, .step-card, .value-item, .preview-card, .team-card').forEach(el => {
        observer.observe(el);
    });
});
