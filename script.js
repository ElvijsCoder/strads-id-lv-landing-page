// Vanta.js Initialization
console.log('Initializing Vanta.js');
VANTA.TRUNK({
    el: "#background-vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x459853
});
console.log('Vanta.js initialized');

// Scroll Effect
window.addEventListener("scroll", () => {
    const title = document.getElementById('title');
    const contentBox = document.getElementById('contentBox');

    // Slide the title up when scrolling
    if (window.scrollY > 50) {
        title.style.transform = `translate(-50%, -${window.scrollY}px)`;
        contentBox.classList.add('active');
    } else {
        title.style.transform = 'translate(-50%, -50%)'; // Reset title position
        contentBox.classList.remove('active');
    }
});
