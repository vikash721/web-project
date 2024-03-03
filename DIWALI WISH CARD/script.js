// script.js
function sendWishes() {
    const colors = ['#ffcc00', '#ff5733', '#33ff57', '#5733ff', '#ff3357'];

    for (let i = 0; i < 100; i++) {
        const cube = document.createElement('div');
        cube.classList.add('falling-cube');
        cube.style.width = `${Math.random() * 20 + 10}px`; /* Adjust the width range as needed */
        cube.style.height = `${Math.random() * 20 + 10}px`; /* Adjust the height range as needed */
        cube.style.left = `${Math.random() * window.innerWidth}px`;
        cube.style.top = `${-Math.random() * window.innerHeight}px`; /* Updated to start from above the viewport */
        cube.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        cube.style.animationDuration = `${Math.random() * 4 + 1}s`; /* Adjust the animation duration range as needed */
        document.body.appendChild(cube);
    }

    const hiddenMessage = document.getElementById('hiddenMessage');

    // Toggle the visibility of the hidden message
    hiddenMessage.style.display = 'block';
}
