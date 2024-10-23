// Initialize Vanta.js TRUNK animation
VANTA.TRUNK({
  el: "#background-vanta", // Make sure this ID matches the one in HTML
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x459853
});

// Function to slide the title up and the content box in on scroll
window.addEventListener('scroll', () => {
    const scrollThreshold = 50; // Number of pixels to scroll before the effect kicks in
    if (window.scrollY > scrollThreshold) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
