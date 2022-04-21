const VectorPrototype = {
    magnitude: 0,
    direction: 1,
    multiplyByValue(value) {
        const vector = Object.create(this);
        vector.magnitude *= value;
        return vector;
    },
    reduce() {
        return this.magnitude * this.direction;
    },
};

export default function Vector(magnitude, direction) {
    const vector = Object.create(VectorPrototype);
    vector.magnitude = magnitude;
    vector.direction = direction;
    return vector;
}
