"use strict";
        
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

// Animate dashboard cards on scroll
const dashboardScroll = document.getElementById('dashboard-scroll');
gsap.utils.toArray('.dashboard-card').forEach((card, index) => {
    gsap.from(card, {
        opacity: 0,
        y: 50,
        rotation: 5,
        scale: 0.9,
        duration: 0.8,
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            end: 'bottom top+=100',
            toggleActions: 'play none none reverse',
            scroller: dashboardScroll
        },
        delay: index * 0.1
    });
});

// Animate table rows on scroll
gsap.utils.toArray('tbody tr').forEach((row, index) => {
    gsap.from(row, {
        opacity: 0,
        x: -50,
        duration: 0.5,
        scrollTrigger: {
            trigger: row,
            start: 'top bottom-=50',
            end: 'bottom top+=50',
            toggleActions: 'play none none reverse',
            scroller: dashboardScroll
        },
        delay: index * 0.1
    });
});

// Smooth scrolling animation for the dashboard section
let lastScrollTop = 0;
dashboardScroll.addEventListener('scroll', () => {
    const st = dashboardScroll.scrollTop;
    if (st > lastScrollTop) {
        gsap.to(dashboardScroll, { duration: 0.5, ease: 'power2.out' });
    } else {
        gsap.to(dashboardScroll, { duration: 0.5, ease: 'power2.out' });
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);