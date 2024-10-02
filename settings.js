document.addEventListener('DOMContentLoaded', () => {
    const helpBtn = document.getElementById('helpBtn');
    const settingsBtn = document.getElementById('settingsBtn');
    const helpSection = document.getElementById('helpSection');
    const settingsSection = document.getElementById('settingsSection');
    const accordionItems = document.querySelectorAll('.accordion-item h3');
    const contactForm = document.getElementById('contactForm');
    const settingsForm = document.getElementById('settingsForm');

    // Switch between Help and Settings sections
    helpBtn.addEventListener('click', () => switchSection(helpBtn, settingsBtn, helpSection, settingsSection));
    settingsBtn.addEventListener('click', () => switchSection(settingsBtn, helpBtn, settingsSection, helpSection));

    function switchSection(activeBtn, inactiveBtn, activeSection, inactiveSection) {
        if (!activeBtn.classList.contains('active')) {
            gsap.to(inactiveSection, { opacity: 0, y: 20, duration: 0.3, onComplete: () => {
                inactiveSection.classList.add('hidden');
                activeSection.classList.remove('hidden');
                gsap.fromTo(activeSection, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.3 });
            }});

            activeBtn.classList.remove('bg-gray-300', 'text-gray-800');
            activeBtn.classList.add('bg-blue-500', 'text-white', 'active');

            inactiveBtn.classList.remove('bg-blue-500', 'text-white', 'active');
            inactiveBtn.classList.add('bg-gray-300', 'text-gray-800');
        }
    }

    // Accordion functionality
    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                gsap.fromTo(content, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.3 });
            } else {
                gsap.to(content, { height: 0, opacity: 0, duration: 0.3, onComplete: () => {
                    content.classList.add('hidden');
                }});
            }
        });
    });

    // Contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Message sent successfully!');
        contactForm.reset();
    });

    // Settings form submission
    settingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically save the settings to a server
        alert('Settings saved successfully!');
    });

    // Initial animation
    gsap.from('.container', { opacity: 0, y: 20, duration: 0.5 });
});