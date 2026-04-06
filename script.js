function openInvite() {
    // Hide cover and show content
    document.getElementById('cover').classList.add('fade-out');
    setTimeout(() => {
        document.getElementById('cover').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
    }, 800);

    // Start Music
    const music = document.getElementById('bgMusic');
    music.play().catch(error => console.log("Music autoplay blocked"));
}

// Countdown Timer
const targetDate = new Date("May 2, 2026 11:30:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "HARI INI ADALAH MAJLISNYA!";
    }
}, 1000);