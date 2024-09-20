document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('animate');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .engagement-card, .testimonial-card').forEach(element => {
        observer.observe(element);
    });

    // Removed menu toggle functionality
});

const urls = document.querySelectorAll('.url');
let index = 0;

setInterval(() => {
    urls[index].classList.remove('active');
    index = (index + 1) % urls.length;
    urls[index].classList.add('active');
}, 2000);
