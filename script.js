// Get elements
const header = document.getElementById('header');
const sections = document.querySelectorAll('section');

// Function to handle scroll event
function handleScroll() {
    const headerHeight = header.offsetHeight;
    const scrollY = window.scrollY;

    // Show sections when scrolled past header
    if (scrollY > headerHeight) {
        sections.forEach((section, index) => {
            // Check if scrolled down enough to show each section
            if (scrollY > headerHeight + (index * window.innerHeight * 0.5)) {
                section.classList.remove('hidden'); // Remove hidden class
                section.classList.add('visible'); // Add visible class
            }
        });
    } else {
        // Reset visibility when scrolling back to the top
        sections.forEach(section => {
            section.classList.remove('visible'); // Hide sections
            section.classList.add('hidden'); // Keep sections hidden
        });
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
