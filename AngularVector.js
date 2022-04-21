import Angle from './Angle.js';
import Vector from './Vector.js';

const UP = -1;
const DOWN = 1;
const LEFT = -1;
const RIGHT = 1;

const AngularVectorPrototype = {
    angle: null,
    magnitude: null,
    getXComponent() {
        const quadrant = this.angle.getQuadrant();
        const relAngle = this.angle.getRelative();
        const xDirection = this.getXDirection(quadrant);
        const xMagnitude = this.magnitude * Math.cos(relAngle);
        return Vector(xMagnitude, xDirection);
    },
    getXDirection(quadrant) {
        let direction;
        if (quadrant == 1 || quadrant == 4)
            direction = RIGHT;
        if (quadrant == 2 || quadrant == 3)
            direction = LEFT;
        return direction;
    },
    getYComponent() {
        const quadrant = this.angle.getQuadrant();
        const relAngle = this.angle.getRelative();
        const yDirection = this.getXDirection(quadrant);
        const yMagnitude = this.magnitude * Math.sin(relAngle);
        return Vector(yMagnitude, yDirection);
    },
    getXDirection(quadrant) {
        let direction;
        if (quadrant == 1 || quadrant == 2)
            direction = UP;
        if (quadrant == 3 || quadrant == 4)
            direction = DOWN;
        return direction;
    },
};

export default function AngularVector(magnitude, angle) {
    const angularVector = Object.create(AngularVectorPrototype);
    angularVector.magnitude = magnitude;
    angularVector.angle = Angle(angle);
    return angularVector;
}
