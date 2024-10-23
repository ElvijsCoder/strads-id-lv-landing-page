// Function to update background position
const updateBackgroundPosition = (x, y) => {
    const el = document.body;
    const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
    el.style.setProperty('--posX', x - l - w / 2);
    el.style.setProperty('--posY', y - t - h / 2);
};

// Mouse movement event
document.body.addEventListener("pointermove", (e) => {
    const { clientX: x, clientY: y } = e;
    updateBackgroundPosition(x, y);
});

// Touch movement event for mobile
document.body.addEventListener("touchmove", (e) => {
    const touch = e.touches[0]; // Get the first touch point
    const { clientX: x, clientY: y } = touch;
    updateBackgroundPosition(x, y);
});

// Scroll event to change body class
window.addEventListener('scroll', () => {
    document.body.classList.add('scrolled');
});
