const CirclePrototype = {
    x: 0,
    y: 0,
    radius: 10,
    color: '#000',
    draw(context) {
        context.beginPath();
        context.fillStyle = this.color;
        context.ellipse(
            this.x, this.y,
            this.radius, this.radius,
            0, 0,
            2*Math.PI,
        );
        context.fill();
        context.closePath();
    },
};

export default function Circle(x, y, radius, color) {
    console.log('Drawing circle: ', x, y, radius, color);
    const circle = Object.create(CirclePrototype);
    circle.x = x;
    circle.y = y;
    circle.radius = radius;
    circle.color = color;
    return circle;
}
