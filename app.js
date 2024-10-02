// app.js

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Sidebar toggle functionality
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');
const sidebar = document.getElementById('sidebar');
const content = document.querySelector('main');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full');
    content.classList.toggle('overflow-hidden');
    animateSidebarItems();
});

sidebarClose.addEventListener('click', () => {
    sidebar.classList.add('-translate-x-full');
    content.classList.remove('overflow-hidden');
});

// Animate sidebar items
function animateSidebarItems() {
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    gsap.fromTo(sidebarItems,
        { opacity: 0, x: -20, },
        { opacity: 1, x: 0, stagger: 0.1, duration: 0.5, ease: "power3.out", }
    );
}

// Initial animation for sidebar items on page load
animateSidebarItems();

// // Animate product cards on scroll
// gsap.utils.toArray('.product-card').forEach((card, index) => {
//     gsap.from(card, {
//         opacity: 0,
//         y: 50,
//         scale: 0.9,
//         duration: 0.8,
//         scrollTrigger: {
//             trigger: card,
//             start: 'top bottom-=100',
//             end: 'bottom top+=100',
//             toggleActions: 'play none none reverse'
//         },
//         delay: index * 0.1
//     });
// });

// Hover animation for product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3 });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3 });
    });
});