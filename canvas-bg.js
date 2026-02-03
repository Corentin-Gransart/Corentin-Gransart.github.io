/**
 * CANVAS-BG.JS
 * Animation de fond "Réseau Neuronal / Topologie"
 * Technologie : HTML5 Canvas API (Sans librairie externe)
 */

const canvas = document.getElementById('neural-canvas');
const ctx = canvas.getContext('2d');

let particlesArray;

// Gestion de la taille du canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Gestion de la souris
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 80) * (canvas.width / 80)
}

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Adapter la taille si on redimensionne la fenêtre
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    mouse.radius = (canvas.height / 80) * (canvas.width / 80);
    init();
});

// Sortie de souris
window.addEventListener('mouseout', () => {
    mouse.x = undefined;
    mouse.y = undefined;
});

// Classe Particle (Noeud du réseau)
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        ctx.fillStyle = '#94a3b8';
    }

    // Dessiner le point
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = '#3b82f6'; // Couleur des points (Bleu Primary)
        ctx.fill();
    }

    // Mettre à jour la position (Physique)
    update() {
        // Rebondir sur les bords
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // Interaction avec la souris (Répulsion/Attraction ou simple connexion)
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);

        // Si la souris est proche, les particules s'écartent un peu (Effet fluide)
        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                this.x += 3;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x -= 3;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                this.y += 3;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y -= 3;
            }
        }

        // Déplacement normal
        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
    }
}

// Initialisation du réseau
function init() {
    particlesArray = [];
    
    // Calcul du nombre de particules selon la taille de l'écran (Densité)
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    
    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 1; // Taille aléatoire entre 1 et 3
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        
        // Vitesse aléatoire
        let directionX = (Math.random() * 1) - 0.5; // Entre -0.5 et 0.5
        let directionY = (Math.random() * 1) - 0.5;
        let color = '#3b82f6';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// Boucle d'animation (Connexions)
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    
    connect();
}

// Fonction pour tracer les lignes entre les particules proches
function connect() {
    let opacityValue = 1;
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
            let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
            + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
            
            // Si la distance est inférieure à un seuil, on trace une ligne
            // Seuil de connexion (ajuster 20000 pour + ou - de liens)
            if (distance < (canvas.width/7) * (canvas.height/7)) {
                opacityValue = 1 - (distance / 20000);
                
                // Couleur des liens (Cyan ou Bleu avec opacité variable)
                ctx.strokeStyle = 'rgba(2, 132, 199,' + opacityValue + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

// Lancer l'animation
init();
animate();