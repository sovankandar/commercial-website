document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".carousel-item");
    const hero = document.getElementById("hero");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    let currentItem = 0;
    const colors = ["#FF5733", "#33FF57", "#3357FF"]; // Add more colors if needed
  
    // Function to update carousel
    function updateCarousel(direction) {
      items.forEach((item, index) => {
        gsap.to(item, { x: index === currentItem ? 0 : direction === "next" ? "-100%" : "100%", duration: 1 });
      });
  
      gsap.to(hero, { backgroundColor: colors[currentItem], duration: 1 });
    }
  
    // Show next item
    nextBtn.addEventListener("click", () => {
      currentItem = (currentItem + 1) % items.length;
      updateCarousel("next");
    });
  
    // Show previous item
    prevBtn.addEventListener("click", () => {
      currentItem = (currentItem - 1 + items.length) % items.length;
      updateCarousel("prev");
    });
  
    // Initial setup
    updateCarousel();
  
    // GSAP ScrollTrigger for Product Cards
    gsap.utils.toArray(".product-card").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power2.out",
      });
    });
  });
  