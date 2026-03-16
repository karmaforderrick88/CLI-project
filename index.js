/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('hero-canvas');
const ctx = canvas.getContext('2d');
const hero = document.querySelector('.hero');

// SETUP DIMENSIONS DYNAMICALLY
let width, height, dpr;

function setCanvasSize() {
    dpr = window.devicePixelRatio || 1;
    
    // Get the actual size of the hero section from the browser
    const rect = hero.getBoundingClientRect();
    width = rect.width;
    height = rect.height;

    // Set internal resolution (High DPI)
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // Set CSS display size to match the hero section
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    // Scale coordinates 
    ctx.scale(dpr, dpr);
}

setCanvasSize();

//CACHED GLOW TEMPLATE
const glowCanvas = document.createElement('canvas');
const gCtx = glowCanvas.getContext('2d');
const radius = 15;
const glowSize = 25;
const buffer = glowSize * 2 + radius * 2;

function createGlowTemplate(color) {
    glowCanvas.width = buffer * dpr;
    glowCanvas.height = buffer * dpr;
    gCtx.scale(dpr, dpr);
    
    gCtx.clearRect(0, 0, buffer, buffer);
    gCtx.beginPath();
    gCtx.arc(buffer / 2, buffer / 2, radius, 0, Math.PI * 2);
    
    gCtx.shadowBlur = glowSize;
    gCtx.shadowColor = color;
    gCtx.fillStyle = 'white';
    gCtx.fill();
    
    gCtx.shadowBlur = 0;
    gCtx.fill();
}

createGlowTemplate('#f39c12'); 

class Circle {
    constructor() {
        this.diameter = buffer;
        this.init();
    }

    init() {
        // Randomize positions based on current width/height
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.opacity = 0.3 + Math.random() * 0.5;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around logic
        if (this.x < -this.diameter) this.x = width;
        if (this.x > width) this.x = -this.diameter;
        if (this.y < -this.diameter) this.y = height;
        if (this.y > height) this.y = -this.diameter;

    }

    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.drawImage(glowCanvas, this.x - buffer / 2, this.y - buffer / 2, buffer, buffer);
    }
}

const circles = [];
for (let i = 0; i < 50; i++) {
    circles.push(new Circle());
}

function animate() {
    // Slight trail effect
    ctx.fillStyle = 'rgba(10, 10, 11, 0.15)'; 
    ctx.fillRect(0, 0, width, height);

    circles.forEach(circle => {
        circle.update();
        circle.draw();
    });

    requestAnimationFrame(animate);
}

// HANDLE WINDOW RESIZE
window.addEventListener('resize', () => {
    setCanvasSize();
    // Re-render the glow template because dpr or context might have reset
    createGlowTemplate('#f39c12'); 
});

window.onload = animate;