gsap.registerPlugin(ScrollTrigger);

// Scroll animation for product cards
gsap.utils.toArray('.product-card').forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        
        duration: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        }
    });
});

// Color gradient animation on scroll
gsap.to('body', {
    backgroundColor: '#379cdb',
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
    }
});

// Hover animation for product cards
const cards = document.querySelectorAll('.product-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3 });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3 });
    });
});