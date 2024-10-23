/* Background and General Reset */
body {
    height: 200vh; /* To allow scrolling */
    margin: 0;
    --x: calc(var(--posX, 0) * 1px);
    --y: calc(var(--posY, 0) * 1px);
    background-image: 
        linear-gradient(115deg, rgb(211, 255, 215), rgb(0, 0, 0)), 
        radial-gradient(90% 100% at calc(50% + var(--x)) calc(0% + var(--y)), rgb(200, 200, 200), rgb(22, 0, 45)), 
        radial-gradient(100% 100% at calc(80% - var(--x)) calc(0% - var(--y)), rgb(250, 255, 0), rgb(36, 0, 0)), 
        radial-gradient(150% 210% at calc(100% + var(--x)) calc(0% + var(--y)), rgb(20, 175, 125), rgb(0, 10, 255)), 
        radial-gradient(100% 100% at calc(100% - var(--x)) calc(30% - var(--y)), rgb(255, 77, 0), rgb(0, 200, 255)), 
        linear-gradient(60deg, rgb(255, 0, 0), rgb(120, 86, 255));
    background-blend-mode: overlay, overlay, difference, difference, difference, normal;
    overflow-x: hidden; /* Prevent horizontal scroll */
}

/* Title Styling */
.title {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: 'Cyberpunk Neu', sans-serif;
    font-size: 48px;
    text-align: center;
    z-index: 10;
    transition: transform 0.5s ease-out;
}

/* Content Box Styling (that slides up) */
.content-box {
    position: fixed;
    bottom: -50%; /* Start hidden below the screen */
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8); /* Semi-transparent black */
    color: white;
    padding: 50px;
    opacity: 0;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
    z-index: 9;
}

/* Active state when scrolling */
body.scrolled .title {
    transform: translate(-50%, -100%); /* Slide the title up out of view */
}

body.scrolled .content-box {
    transform: translateY(-100%); /* Slide content up from bottom */
    opacity: 1; /* Make content visible */
}

.content p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 20px;
}

/* Add some padding for better readability */
.content-box .content {
    max-width: 600px;
    margin: 0 auto;
}
