// Fungsi untuk membuat partikel animasi
function createParticles() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
    }
}

// Panggil fungsi partikel saat halaman dimuat
window.onload = createParticles;

// Event listener untuk tombol Iya - pindah ke halaman yes.html
document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'yes.html';
});

// Event listener untuk tombol Tidak - pindah ke halaman no.html
document.getElementById('noBtn').addEventListener('click', function() {
    window.location.href = 'no.html';
});

// Buat tombol Tidak bergerak saat hover (untuk kesan lucu)
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', function() {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});