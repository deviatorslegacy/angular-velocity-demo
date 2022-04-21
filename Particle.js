import Circle from './Circle.js';
import AngularVector from './AngularVector.js';

const ParticlePrototype = {
    body: null,
    speed: 50,
    angle: 0,
    moveAtRandomAngle(deltaTime) {
        this.angle += Math.random()*Math.PI/39;
        const netVelocity = AngularVector(this.speed, this.angle);
        const xVelocity = netVelocity.getXComponent();
        const yVelocity = netVelocity.getYComponent();
        const xDisplacement = xVelocity.multiplyByValue(deltaTime);
        const yDisplacement = yVelocity.multiplyByValue(deltaTime);
        this.move(xDisplacement, yDisplacement);
    },
    move(xDisplacement, yDisplacement) {
        this.body.x += xDisplacement.reduce();
        this.body.y += yDisplacement.reduce();
    },
};

export default function Particle(x, y, radius, color) {
    const particle = Object.create(ParticlePrototype);
    particle.body = new Circle(x, y, radius, color);
    return particle;
}
