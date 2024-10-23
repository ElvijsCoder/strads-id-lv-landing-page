// Function to update background position
const updateBackgroundPosition = (x, y) => {
    const el = document.body;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX', x - l - w / 2);
    el.style.setProperty('--posY', y - t - h / 2);
};

// Mouse movement event for desktop
document.body.addEventListener("pointermove", (e) => {
    const { clientX: x, clientY: y } = e;
    updateBackgroundPosition(x, y);
});

// Touch movement event for mobile
document.body.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    const { clientX: x, clientY: y } = touch;
    updateBackgroundPosition(x, y);
});

// Scroll event to hide title and show content box
window.addEventListener('scroll', () => {
    const scrollThreshold = 50; // Number of pixels to scroll before the effect kicks in
    if (window.scrollY > scrollThreshold) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});
