// Floating Hearts Logic
const createHeart = () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.getElementById('bg-hearts').appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 6000);
};

// Create a heart every 300ms
setInterval(createHeart, 300);

// Firework-like Confetti Celebration
document.getElementById('confetti-btn').addEventListener('click', () => {
    const duration = 8 * 1000;
    const animationEnd = Date.now() + duration;

    // Initial big bursts from the bottom corners (Cannons)
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.9, x: 0.1 },
        colors: ['#ff4d6d', '#ff7eb3', '#ffffff', '#ffd700'],
        startVelocity: 80,
        gravity: 0.8
    });
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.9, x: 0.9 },
        colors: ['#ff4d6d', '#ff7eb3', '#ffffff', '#ffd700'],
        startVelocity: 80,
        gravity: 0.8
    });

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Continuous firework explosions in the sky
    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 60 * (timeLeft / duration);

        confetti({ 
            particleCount, 
            startVelocity: randomInRange(20, 40),
            spread: 360, 
            ticks: 80, 
            zIndex: 0,
            origin: { x: randomInRange(0.1, 0.9), y: randomInRange(0.1, 0.4) },
            colors: ['#ff758c', '#ff7eb3', '#ff4d6d', '#ffffff', '#ffd700', '#ffb6b9'],
            gravity: randomInRange(0.4, 0.8),
            scalar: randomInRange(0.8, 1.5),
            drift: randomInRange(-0.5, 0.5),
            shapes: ['circle', 'square']
        });
    }, 350);

    // Change button text and style after clicking
    const btn = document.getElementById('confetti-btn');
    btn.innerText = "생일 축하해요! 💖";
    btn.style.background = "linear-gradient(45deg, #ff4d6d, #ff758c)";

    // Reveal the plan button
    const planBtn = document.getElementById('plan-btn');
    setTimeout(() => {
        planBtn.style.display = 'block';
        planBtn.style.animation = 'fadeInUp 1s ease-out forwards';
    }, 1500);
});

document.getElementById('plan-btn').addEventListener('click', () => {
    window.location.href = 'date_plan.html';
});