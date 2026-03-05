document.getElementById('confetti-btn').addEventListener('click', () => {
    // Fire the confetti
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e88b8b', '#ffffff', '#ffb6b9', '#fae3d9']
    });
    
    // Optional: Change button text after clicking
    const btn = document.getElementById('confetti-btn');
    btn.innerText = "생일 축하해요! 💖";
});