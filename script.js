// Get elements
const header = document.getElementById('header');
const sections = document.querySelectorAll('section');

// Function to handle scroll event
function handleScroll() {
    // Check if header is visible
    const headerHeight = header.offsetHeight;
    const scrollY = window.scrollY;

    // If scrolled past header, hide it and show sections
    if (scrollY > headerHeight) {
        header.classList.add('hidden');
        sections.forEach(section => {
            section.classList.add('visible');
        });
    } else {
        header.classList.remove('hidden');
        sections.forEach(section => {
            section.classList.remove('visible');
        });
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);
