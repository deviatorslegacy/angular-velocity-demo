const AnglePrototype = {
    angle: 0,
    getRelative() {
        const quadrant = this.getQuadrant();
        let relAngle;
        switch (quadrant) {
            case 1:
                relAngle = this.angle;
                break;
            case 2:
                relAngle = Math.PI - this.angle;
                break;
            case 3:
                relAngle = this.angle - Math.PI;
                break;
            case 4:
                relAngle = Math.PI*2 - this.angle;
                break;
        }
        return relAngle;
    },
    getQuadrant() {
        const angleRelativeToPi = this.angle / Math.PI;
        if (angleRelativeToPi > 3/2)
            return 4;
        if (angleRelativeToPi > 1)
            return 3;
        if (angleRelativeToPi > 0.5)
            return 2;
        return 1;
    },
};

export default function Angle(angle) {
    const angleObject = Object.create(AnglePrototype);
    angleObject.angle = angle;
    return angleObject;
}
