let index = 0;
function showSlides() {
    const slides = document.querySelector('.slides');
    index = (index + 1) % slides.children.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(showSlides, 3000);

// Floating Hearts Effect
const canvas = document.querySelector(".hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];
for (let i = 0; i < 50; i++) {
    hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 4,
        speed: Math.random() * 1.5 + 0.5
    });
}

function drawHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < hearts.length; i++) {
        let h = hearts[i];
        ctx.beginPath();
        ctx.fillStyle = "red";
        ctx.font = `${h.size}px Arial`;
        ctx.fillText("❤", h.x, h.y);
        h.y -= h.speed;
        if (h.y < 0) h.y = canvas.height;
    }
}
setInterval(drawHearts, 30);