// Adds a subtle parallax effect to the hero background
document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero');
    if(hero) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        hero.style.background = `linear-gradient(${135 + (x * 10)}deg, #0f172a 0%, #1e3a8a 100%)`;
    }
});