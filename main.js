import Particle from './Particle.js';

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const game = {
    particles: [],
    timeElapsed: 0,
};

document.addEventListener('DOMContentLoaded', main);

function main() {
    canvas.style.backgroundColor = '#934';

    const margin = 5;
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * (canvas.width - margin*2) + margin;
        const y = Math.random() * (canvas.height - margin*2) + margin;
        const radius = Math.random()*10 + 5;
        const particle = Particle(x, y, radius, '#0005');
        game.particles.push(particle);
    }

    requestAnimationFrame(update);
}

function update(timeElapsed) {
    const deltaTime = (timeElapsed - game.timeElapsed) / 1000;
    game.timeElapsed = timeElapsed;

    tick(deltaTime);
    draw();
    requestAnimationFrame(update);
}

function tick(deltaTime) {
    game.particles.forEach((p) => p.moveAtRandomAngle(deltaTime));
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.particles.forEach((p) => p.body.draw(context));
}
